import { parse } from '@vue/compiler-sfc'
import * as ts from 'typescript'
import type { EventMeta, PropMeta, TypeMeta } from '../types'

export interface ParsedTypesSource {
  props: PropMeta[]
  events: EventMeta[]
  types: TypeMeta[]
}

function getJsDoc(node: ts.Node): string {
  const docs = ts.getJSDocCommentsAndTags(node)
  return docs
    .map(doc => (doc as ts.JSDoc).comment)
    .filter((comment): comment is string => typeof comment === 'string')
    .join(' ')
    .trim()
}

function propertyName(node: ts.PropertyName, source: ts.SourceFile): string {
  if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) return node.text
  return node.getText(source)
}

export function parseTypesSource(text: string, filename: string): ParsedTypesSource {
  const source = ts.createSourceFile(filename, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const props: PropMeta[] = []
  const events: EventMeta[] = []
  const types: TypeMeta[] = []

  for (const statement of source.statements) {
    if (ts.isTypeAliasDeclaration(statement)) {
      types.push({ name: statement.name.text, definition: statement.type.getText(source) })
    }

    if (!ts.isInterfaceDeclaration(statement)) continue

    if (statement.name.text === 'Props') {
      for (const member of statement.members) {
        if (!ts.isPropertySignature(member)) continue
        props.push({
          name: propertyName(member.name, source),
          type: member.type?.getText(source) ?? 'unknown',
          required: !member.questionToken,
          description: getJsDoc(member),
          source: 'ts'
        })
      }
    }

    if (statement.name.text === 'Emits') {
      for (const member of statement.members) {
        if (!ts.isCallSignatureDeclaration(member)) continue
        const [eventParam, ...rest] = member.parameters
        let eventName: string | undefined
        if (eventParam?.type && ts.isLiteralTypeNode(eventParam.type)) {
          eventName = eventParam.type.literal.getText(source).replace(/^['"]|['"]$/g, '')
        }
        if (!eventName) continue
        const params = rest.map(param => `${param.name.getText(source)}: ${param.type?.getText(source) ?? 'unknown'}`).join(', ')
        events.push({ name: eventName, params: params || undefined })
      }
    }
  }

  return { props, events, types }
}

export function parseSfcSource(text: string, filename: string): { defaults: Record<string, string> } {
  const { descriptor } = parse(text, { filename })
  const content = descriptor.scriptSetup?.content ?? descriptor.script?.content ?? ''
  const source = ts.createSourceFile(`${filename}.ts`, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const defaults: Record<string, string> = {}

  const visit = (node: ts.Node): void => {
    if (ts.isCallExpression(node) && node.expression.getText(source) === 'withDefaults') {
      const object = node.arguments[1]
      if (object && ts.isObjectLiteralExpression(object)) {
        for (const property of object.properties) {
          if (!ts.isPropertyAssignment(property)) continue
          defaults[propertyName(property.name, source)] = property.initializer.getText(source)
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(source)
  return { defaults }
}

export function parseInstallKind(indexTs: string): 'component' | 'api' {
  return indexTs.includes('addInstallAPI') ? 'api' : 'component'
}
