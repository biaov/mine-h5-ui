import MeMspaint from './index.vue'

MeMspaint.install = Vue => {
  Vue.component(MeMspaint.name, MeMspaint)
}

export default MeMspaint
