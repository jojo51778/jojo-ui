import Vue from 'vue'
import App from './App.vue'

import jojoUi from './packages/index'
import './styles/index.scss'

Vue.use(jojoUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
