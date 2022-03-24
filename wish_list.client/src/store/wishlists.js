import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios";

const state = () =>({
    wishlists: [],
    wishlist:[]
})
const getters = {
    wishlists: (state) => {
        return state.wishlists
    },
    wishlist: (state) => {
        return state.wishlist
    },
}
const mutations ={
    copyOfWishesInWishlists:(state,wishItems) =>{
        state.wishlist = wishItems.slice()
    },
    addWishItem:(state,wishItem)=>{
        state.wishlist.push(wishItem)
    },
    deleteWishItem:(state,id) =>{
        state.wishlist.splice(id,1)
    },
    addWishlist:(state,wishlist) =>{
        state.wishlists.push(wishlist)
    },
    deleteWishlist:(state,id) =>{
        state.wishlists.splice(id,1)
    },
    setSavedWishlists(state,savedWishlists){
        state.wishlists = savedWishlists
    },
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
    async deleteWishItem(context,id){
     //   context.commit('deleteWishItem',id)
      await axios.post('deleteWishItem',id)
    },
    addWishlist(context, wishlist){
        axios.post("addWishlist", wishlist)
    },
   async deleteWishlist(context, id){
     await  axios.post("deleteWishlist", id)
    },
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}