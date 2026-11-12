import { readFile } from 'node:fs/promises'
import { extractAll } from '../src/extract'
import { manifestSchema } from '../src/schema'

const root = new URL('../../', import.meta.url)
const generated = new URL('../src/generated/', import.meta.url)
const result = await extractAll(root)
const rawManifest = JSON.parse(await readFile(new URL('manifest.json', generated), 'utf-8')) as unknown
const manifest = manifestSchema.parse(rawManifest)
const rootPkg = JSON.parse(await readFile(new URL('package.json', root), 'utf-8')) as { version: string }

const errors: string[] = []
if (manifest.libraryVersion !== rootPkg.version) errors.push(`version-mismatch: data=${manifest.libraryVersion} root=${rootPkg.version}`)
if (manifest.counts.components !== result.index.filter(item => !item.parentId).length) errors.push('component-count-mismatch')
if (manifest.counts.guides !== result.guides.length) errors.push('guide-count-mismatch')
if (manifest.counts.icons !== result.icons.length) errors.push('icon-count-mismatch')
if (manifest.counts.components < 60) errors.push('component-count-too-low')
if (manifest.counts.icons < 70) errors.push('icon-count-too-low')
if (result.warnings.length > 300) errors.push(`too-many-warnings: ${result.warnings.length}`)

for (const item of result.index) {
  const id = item.parentId ?? item.id
  if (!result.components.has(id)) errors.push(`orphan-index-item: ${item.name} -> ${id}`)
}

const iconNames = new Set(result.icons.map(icon => icon.name))
if (iconNames.size !== result.icons.length) errors.push('duplicate-icon-name')

if (errors.length) {
  console.error('[check] failed')
  for (const error of errors) console.error(`  - ${error}`)
  process.exit(1)
}

console.log(`[check] ok: components=${manifest.counts.components} guides=${manifest.counts.guides} icons=${manifest.counts.icons} warnings=${result.warnings.length}`)
