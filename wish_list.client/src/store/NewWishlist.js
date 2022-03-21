import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
  title: "",
  wishItems:[{text:"", img:null}]
})
const getters = {
  wishItems: (state) => {
    return state.wishItems
  },
  title: (state) => {
    return state.title
  },
}
const mutations ={
  addWishItem:(state,payload) =>{
    state.wishItems.push(payload)
  },
  setTitle:(state,payload) =>{
    state.title = payload
  },
  deleteWishItem:(state,id) =>{
    state.wishItems.splice(id,1)
  },
  cleanWishItems:(state) =>{
    state.wishItems = [{text:"", img:null}]
  }
}
const actions = {
  addProduct(context, payload){
    context.commit('addWishItem',payload)
  },
  deleteProduct(context,index) {
    if(context.state.wishItems.length == 1){
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