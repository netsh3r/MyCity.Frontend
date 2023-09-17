
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
axios.defaults.baseURL = 'https://localhost:5001/';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify);
app.mount('#app')
