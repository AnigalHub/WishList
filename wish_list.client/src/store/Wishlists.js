import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
    Wishlists: []
})
const getters = {
    Wishlists: (state) => {
        return state.Wishlists
    },
}
const mutations ={
    addWishlists:(state,name) =>{
        state.Wishlists.push(name)
    },
}
const actions = {
    addWishlist(context, name){
        context.commit('addWishlists', name)
    },
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}