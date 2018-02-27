import Vue from 'vue'
import App from './App.vue'
import VueUploadWeb from './index.js'

Vue.use(VueUploadWeb);

new Vue({
  el: '#app',
  render: h => h(App)
})
