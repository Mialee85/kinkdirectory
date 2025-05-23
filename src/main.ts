import ui from '@nuxt/ui/vue-plugin'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './style.css'

createApp(App)
  .use(i18n)
  .use(ui)
  .mount('#app')
