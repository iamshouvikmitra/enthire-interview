import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock, faCalendar, faGlobe, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

 
// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
});
extend('email', {
  ...email,
  message: 'Enter correct email'
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
library.add(faClock, faCalendar, faGlobe, faArrowAltCircleLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
