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

import vuex from 'vuex'
Vue.use(vuex)
import newWishList from './store/NewWishlist'
import wishlists from './store/Wishlists'

const store = new vuex.Store({
    modules:{
        newWishlist: newWishList,
        wishlists:wishlists,
    }
})

const router = new VueRouter(
    {
        mode:'history',
        routes
    });

new Vue({
    router,
    store,
    async created() {
        let config = await fetch('config.json')

    },
    render: function (h) { return h(App) }
}).$mount('#app')