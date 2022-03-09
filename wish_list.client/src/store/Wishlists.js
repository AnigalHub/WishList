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
    addWishlist:(state,wishlist) =>{
       // state.Wishlists.push(name)
        state.Wishlists.push(wishlist)
    },
}
const actions = {
    addWishlist(context, wishlist){
        context.commit('addWishlist', wishlist)
    },
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}