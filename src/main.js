import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import './styles/index.scss'

import VueRouter from 'vue-router'
import login from './view/login'
import home from './view/home'
Vue.use(ElementUI)
Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        { name: 'login', path: '/login', component: login },
        { name: 'Home', path: '/', component: home }
    ]
})
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')