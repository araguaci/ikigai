import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from './components/PdfViewer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/ikigai-os-segredos-dos-japones', component: PdfViewer }
  ]
})

createApp(App).use(router).mount('#app')