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
import config from './store/ConfigStore'

const store = new vuex.Store({
    modules:{
        newWishlist: newWishList,
        wishlists:wishlists,
        config:config,
    }
})

const router = new VueRouter(
    {
        mode:'history',
        routes
    });
router.beforeEach(async(to,from,next)=>{
    if(!store.getters['config/url'])
        await store.dispatch('config/loadConfig')
    await next()
})
new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app')