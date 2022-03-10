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
        state.Wishlists.push(wishlist)
    },
    deleteWishlist:(state,id) =>{
        state.Wishlists.splice(id,1)
    }
}
const actions = {
    addWishlist(context, wishlist){
        context.commit('addWishlist', wishlist)
    },
   deleteWishlist(context,id){
        context.commit('deleteWishlist',id)
    },
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}