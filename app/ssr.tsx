import { getRouterManifest } from '@tanstack/start/router-manifest'
/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/start/server'

import { createRouter } from './router'

const handler = createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler)

export default handler
