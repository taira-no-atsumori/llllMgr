import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import WebFont from 'webfontloader';
import router from './router/router';
import VueGtag from 'vue-gtag-next';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);

WebFont.load({
  google: {
    families: ['Roboto:400,500,700', 'Material+Icons'], // 必要なフォントを指定
  },
});

app.use(createPinia());
app.use(createVuetify());
app.use(router);

app.use(VueGtag, {
  property: {
    id: import.meta.env.VITE_GTAG_ID,
  },
}, router);

app.mount('#app');