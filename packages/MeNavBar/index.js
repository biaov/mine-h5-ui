import MeNavBar from './index.vue'
MeNavBar.install = Vue => {
  Vue.component(MeNavBar.name, MeNavBar)
}

export default MeNavBar
