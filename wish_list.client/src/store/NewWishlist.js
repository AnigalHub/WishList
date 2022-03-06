import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
  title: "",
  WishItems:[{}]
})
const getters = {
  WishItems: (state) => {
    return state.WishItems
  },
  title: (state) => {
    return state.title
  },
}
const mutations ={
  addWishItem:(state,payload) =>{
    state.WishItems.push(payload)
  },
  setTitle:(state,payload) =>{
    state.title = payload
  }
}
const actions = {
  addProduct(context, payload){
    context.commit('addWishItem',payload)
  },
  setTitle(context,payload){
    context.commit('setTitle',payload)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}