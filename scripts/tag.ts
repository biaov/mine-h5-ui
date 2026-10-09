import { execSync } from 'child_process'
import pkg from '../package.json' with { type: 'json' }

if (process.argv[2] === 'r') {
  execSync(`git tag -d v${pkg.version}`)
  execSync(`git push origin --delete tag v${pkg.version}`)
}

execSync(`git tag v${pkg.version}`)
execSync(`git push origin v${pkg.version}`)
