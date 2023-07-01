import type { App } from 'vue'
import axios from './axios.ts'

export function registerPlugins(app: App) {
  app.use(axios)
}
