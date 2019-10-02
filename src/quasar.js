import Vue from 'vue'

import './styles/quasar.styl'
import iconSet from 'quasar/icon-set/ionicons-v4.js'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {},
  iconSet: iconSet
 })