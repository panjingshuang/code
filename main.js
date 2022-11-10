import { createApp } from 'vue'
import router from './router/index.js'
import index from './src/index.vue'


const app = createApp(index)
app.use(router)
app.mount('#app')
