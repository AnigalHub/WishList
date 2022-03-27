import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "axios";

const state = () =>({
    wishlists: [],
    selectedWishlist:[]
})
const getters = {
    wishlists: (state) => {
        return state.wishlists
    },
    selectedWishlist: (state) => {
        return state.selectedWishlist
    },
}
const mutations ={
    copyOfWishesInWishlists:(state, selectedWishlist) =>{
        state.selectedWishlist = {
            id: selectedWishlist.id,
            title: selectedWishlist.title,
            wishItems: selectedWishlist.wishItems.slice()
        }
    },
    addWishItem:(state,wishItem)=>{
        state.selectedWishlist.wishItems.push(wishItem)
    },
    deleteWishItem:(state,id) =>{
        state.selectedWishlist.wishItems.splice(id,1)
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
    copyOfWishesInWishlists(context, selectedWishlist){
        context.commit('copyOfWishesInWishlists', selectedWishlist)
    },
    addWishItem(context, wishItem){
        context.commit('addWishItem', wishItem)
    },
    async deleteWishItem(context,id){
      await axios.post('deleteWishItem',id)
    },
   async addWishlist(context, wishlist){
       await axios.post("addWishlist", wishlist)
    },
    async deleteWishlist(context, id){
     await axios.post("deleteWishlist", id)
    },
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}