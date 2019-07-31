import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import Services from './service/service'

Vue.config.productionTip = false

Vue.use(Services);
Vue.use(ArgonDashboard);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
