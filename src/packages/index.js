import Button from './Button'
import Buttons from './Buttons'

const install = Vue => {
  Vue.component(Button.name, Button)
  Vue.component(Buttons.name, Buttons)
}

if (typeof window.Vue !== 'undefined') {
  // eslint-disable-next-line no-undef
  install(Vue)
}

export default {
  install
}
