import Vue from 'vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'; 

import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Appointments from '../views/Appointments'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/services',
		name: 'services',
		component: Services
	},
	{
		path: '/appointments',
		name: 'appointments',
		component: Appointments
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

Vue.use(Toasted, {
    router
});

export default router;
