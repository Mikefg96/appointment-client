import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// https://tachyons.io/
import "tachyons";

// https://designrevision.com/docs/shards-vue/getting-started
import ShardsVue from 'shards-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'
Vue.use(ShardsVue);

// https://github.com/chronotruck/vue-ctk-date-time-picker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

// https://www.npmjs.com/package/vue-toasted
import Toasted from 'vue-toasted'; 
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
