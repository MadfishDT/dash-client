import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import Services from './service/service'
import VueSwal from 'vue-swal'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

new Vue({
  components: {
    PulseLoader
  }
})

Vue.config.productionTip = false

Vue.use(Services);
Vue.use(ArgonDashboard);
Vue.use(VueSwal);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
