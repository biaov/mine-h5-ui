import { execSync } from 'child_process'
import pkg from '../package.json' assert { type: 'json' }

execSync(`git tag v${pkg.version}`)
execSync(`git push origin v${pkg.version}`)
