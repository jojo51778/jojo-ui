import Button from './Button'
import Buttons from './Buttons'
import BackTop from './BackTop'
import Card from './Card'
import Cards from './Cards'
import Collapse from './Collapse'
import CollapseItem from './CollapseItem'
const install = Vue => {
  Vue.component(Button.name, Button)
  Vue.component(Buttons.name, Buttons)
  Vue.component(BackTop.name, BackTop)
  Vue.component(Card.name, Card)
  Vue.component(Cards.name, Cards)
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
}

if (typeof window.Vue !== 'undefined') {
  // eslint-disable-next-line no-undef
  install(Vue)
}

export default {
  install
}
