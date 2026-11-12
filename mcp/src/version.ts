import { readFileSync } from 'node:fs'

const packageUrl = new URL('../package.json', import.meta.url)

export function readPackageInfo(): { name: string; version: string } {
  const pkg = JSON.parse(readFileSync(packageUrl, 'utf-8')) as { name: string; version: string }
  return { name: pkg.name, version: pkg.version }
}

export function withVersion<T extends { version: string }>(pkg: T, version: string): T {
  return { ...pkg, version }
}
