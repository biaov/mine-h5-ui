import { readFile, writeFile } from 'node:fs/promises'
import { withVersion } from '../src/version'

const root = new URL('../../', import.meta.url)
const packageUrl = new URL('../package.json', import.meta.url)

const rootPkg = JSON.parse(await readFile(new URL('package.json', root), 'utf-8')) as { version: string }
const pkg = JSON.parse(await readFile(packageUrl, 'utf-8')) as { name: string; version: string }

await writeFile(packageUrl, `${JSON.stringify(withVersion(pkg, rootPkg.version), null, 2)}\n`, 'utf-8')
console.log(`[sync-version] ${pkg.name}: ${pkg.version} -> ${rootPkg.version}`)
