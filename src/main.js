import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/router'
import VueGTag from 'vue-gtag'

loadFonts()

const app = createApp(App);
app.use(createPinia());
createApp(App)
  .use(vuetify)
  .use(
    VueGTag,
    {
      config: {
        id: 'G-ZXJJX9H0JB'
      }
    },
    router
  )
  .use(router)
  .mount('#app')