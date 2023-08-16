import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

import App from '@/App.vue'

//引入样式
import 'tailwindcss/tailwind.css'
import '@/assets/css/index.scss'

const app = createApp(App)

//插件注册
app.use(createPinia())
app.use(router)

app.mount('#app')
