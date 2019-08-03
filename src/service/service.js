import LoginService from './login.service';
import RequestService from './request.service';

export default {
  install(Vue) {
    Vue.prototype.$service = {};
    Vue.prototype.$service.$requestservice = new RequestService(Vue.prototype);
    Vue.prototype.$service.$loginservice = new LoginService(Vue.prototype);
  }
};
