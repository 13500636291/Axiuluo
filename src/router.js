import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './view/login'
import home from './view/home'
Vue.use(VueRouter)
export const router = new VueRouter({
    routes: [
        { name: 'login', path: '/login', component: login },
        { name: 'Home', path: '/', component: home }
    ]
})