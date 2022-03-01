import MeCountDown from './index.vue'
MeCountDown.install = Vue => {
  Vue.component(MeCountDown.name, MeCountDown)
}

export default MeCountDown
