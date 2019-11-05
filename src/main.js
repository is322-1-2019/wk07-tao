import Vue from 'vue';
import App from './App.vue';
import './plugins/buefy-vue';
import "./plugins/vuelidate";


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');