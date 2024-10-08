import { createApp } from 'vue'
import './main.css'
import App from './App.vue'

import './lib/supabaseClient.js'; // подключаем supaBase

createApp(App).mount('#app')
