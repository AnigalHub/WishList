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
    addWishlists:(state,name,array) =>{
       // state.Wishlists.push(name)
        console.log( state.Wishlists.push(name,array))
        console.log(state.Wishlists)
    },
}
const actions = {
    addWishlist(context, name,array){
        context.commit('addWishlists', name,array)
    },
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}