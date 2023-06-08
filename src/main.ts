import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import { router } from './router.ts'
import { registerPlugins } from './plugins'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
registerPlugins(app)

app.mount('#app')
