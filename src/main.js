import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
createApp(App).mount('#app')
