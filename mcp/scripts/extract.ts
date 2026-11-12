import { extractAll } from '../src/extract'
import { writeGenerated } from '../src/extract/write'

const root = new URL('../../', import.meta.url)
const outputDir = new URL('../src/generated/', import.meta.url)

const result = await extractAll(root)
await writeGenerated(result, outputDir)

console.log(`[extract] mine-h5-ui@${result.manifest.libraryVersion}`)
console.log(`[extract] components=${result.manifest.counts.components} guides=${result.manifest.counts.guides} icons=${result.manifest.counts.icons}`)
console.log(`[extract] warnings=${result.warnings.length}`)
for (const warning of result.warnings.slice(0, 20)) console.warn(`  - ${warning}`)
if (result.warnings.length > 20) console.warn(`  ... ${result.warnings.length - 20} more`)
