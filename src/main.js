import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/router'

loadFonts()

const app = createApp(App);
app.use(createPinia());
createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')