import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);

Vue.config.productionTip = false

import routes from './routes';

const router = new VueRouter(
    {
        mode:'history',
        routes
    });

new Vue({
    router,
    render: function (h) { return h(App) },
}).$mount('#app')