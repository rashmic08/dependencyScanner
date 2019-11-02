import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import './components/styled-components';

Vue.use(BootstrapVue)
Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({routes});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
