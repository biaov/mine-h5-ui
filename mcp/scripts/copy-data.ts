import { cp } from 'node:fs/promises'

const source = new URL('../src/generated/', import.meta.url)
const target = new URL('../dist/generated/', import.meta.url)

await cp(source, target, { recursive: true })
console.log('[build] generated data copied to dist/generated')
