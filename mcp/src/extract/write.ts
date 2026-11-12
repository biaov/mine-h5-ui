import { mkdir, writeFile } from 'node:fs/promises'
import type { ExtractResult } from './merge'

async function writeJson(dir: URL, name: string, value: unknown): Promise<void> {
  await writeFile(new URL(name, dir), `${JSON.stringify(value, null, 2)}\n`, 'utf-8')
}

export async function writeGenerated(result: ExtractResult, outputDir: URL): Promise<void> {
  await mkdir(new URL('components/', outputDir), { recursive: true })
  await mkdir(new URL('guides/', outputDir), { recursive: true })

  for (const [id, meta] of result.components) await writeJson(new URL('components/', outputDir), `${id}.json`, meta)
  for (const guide of result.guides) await writeJson(new URL('guides/', outputDir), `${guide.topic}.json`, guide)

  await writeJson(outputDir, 'components.index.json', result.index)
  await writeJson(outputDir, 'guides.index.json', result.guides.map(({ topic, title, category, kind }) => ({ topic, title, category, kind })))
  await writeJson(outputDir, 'icons.json', result.icons)
  await writeJson(outputDir, 'manifest.json', result.manifest)
}
