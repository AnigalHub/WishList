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
    copyOfWishesInWishlists:(state,wishes) =>{
       state.Wishlist = wishes.slice()
    },
    addWishItem:(state,wishItem)=>{
        state.Wishlist.push(wishItem)
    },
    deleteWishItem:(state,id) =>{
        state.Wishlist.splice(id,1)
    },
    addWishlist:(state,wishlist) =>{
        state.Wishlists.push(wishlist)
    },
    deleteWishlist:(state,id) =>{
        state.Wishlists.splice(id,1)
    },
    setSavedWishlists(state,savedWishlists){
        state.Wishlists = savedWishlists
    },
    setSavedWishlist(state,savedWishlist){
        state.Wishlist = savedWishlist
    }
}
const actions = {
    refreshSavedState(context){
        let newWishlist = JSON.parse(localStorage.getItem('wishlists'))
        if(newWishlist){
            context.commit('setSavedWishlists',newWishlist)
        }
    },
    copyOfWishesInWishlists(context, wishes){
        context.commit('copyOfWishesInWishlists', wishes)
    },
    addWishItem(context, wishItem){
        context.commit('addWishItem', wishItem)
    },
    deleteWishItem(context,id){
        context.commit('deleteWishItem',id)
    },
    addWishlist(context, wishlist){
        context.commit('addWishlist', wishlist)
        localStorage.setItem('wishlists',JSON.stringify(context.getters.Wishlists))
    },
   deleteWishlist(context,id){
        context.commit('deleteWishlist',id)
       localStorage.setItem('wishlists',JSON.stringify(context.getters.Wishlists))
    },
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}