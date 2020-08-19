import { NodeBundle } from './webpack/node'
import { ReactBundle } from './webpack/react'

// NodeBundle will be tempomary default export because some of my packages are using craftpack as a build tool and changing that will break them, I'm too lazy to change that, maybe later.

export default NodeBundle
export { ReactBundle }
