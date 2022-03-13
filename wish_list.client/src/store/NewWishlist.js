import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
  title: "",
  WishItems:[{text:"", img:null}]
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
  },
  deleteWishItem:(state,id) =>{
    state.WishItems.splice(id,1)
  },
  cleanWishItems:(state) =>{
    state.WishItems = [{text:"", img:null}]
  }
}
const actions = {
  addProduct(context, payload){
    context.commit('addWishItem',payload)
  },
  deleteProduct(context,index) {
    if(context.state.WishItems.length == 1){
      context.commit('cleanWishItems')
    }
    else {
      context.commit('deleteWishItem',index)
    }
  },
  cleanWishItems(context){
    context.commit('cleanWishItems')
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