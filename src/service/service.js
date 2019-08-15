import LoginService from './login.service';
import RequestService from './request.service';
import ContentsService from './contents.service';


export default {
  install(Vue) {
    Vue.prototype.$service = {};
    Vue.prototype.$service.$requestservice = new RequestService(Vue.prototype);
    Vue.prototype.$service.$loginservice = new LoginService(Vue.prototype);
    Vue.prototype.$service.$contentsservice = new ContentsService(Vue.prototype);
  }
};
