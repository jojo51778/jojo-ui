import Button from './Button'
import Buttons from './Buttons'
import BackTop from './BackTop'
import Card from './Card'

const install = Vue => {
  Vue.component(Button.name, Button)
  Vue.component(Buttons.name, Buttons)
  Vue.component(BackTop.name, BackTop)
  Vue.component(Card.name, Card)
}

if (typeof window.Vue !== 'undefined') {
  // eslint-disable-next-line no-undef
  install(Vue)
}

export default {
  install
}
