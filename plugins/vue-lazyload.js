import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import error from '../static/error.svg'
import loading from '../static/loading.svg'

Vue.use(VueLazyload, {
  preLoad: 1,
  error,
  loading,
  attempt: 1
})
