import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
    Wishlists: [],
    Wishlist:[]
})
const getters = {
    Wishlists: (state) => {
        return state.Wishlists
    },
    Wishlist: (state) => {
        return state.Wishlist
    },
}
const mutations ={
    copyArray:(state,array) =>{
       state.Wishlist = array.slice()
    },
    addWishItem:(state,wishItem)=>{
        state.Wishlist.push(wishItem)
    },
    addWishlist:(state,wishlist) =>{
        state.Wishlists.push(wishlist)
    },
    deleteWishlist:(state,id) =>{
        state.Wishlists.splice(id,1)
    }
}
const actions = {
    copyArray(context, array){
        context.commit('copyArray', array)
    },
    addWishItem(context, wishItem){
        context.commit('addWishItem', wishItem)
    },
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