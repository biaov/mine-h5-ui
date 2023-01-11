import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import API from './functions'
import VAR from '@/config/variables'

Vue.use(VueClipboard)
Vue.prototype.$api = API
Vue.prototype.$var = VAR
