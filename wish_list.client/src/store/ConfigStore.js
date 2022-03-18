import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
    url:''
})
const getters = {
    url:(state) =>{
        return state.url
    }
}
const mutations ={
    setUrl:(state,payload)=>{
        state.url = payload
    }
}
const actions = {
    setUrl(context,payload){
        context.commit('setUrl',payload)
    }
}

export default {
    namespaced: true,
        state,
        actions,
        getters,
        mutations,
}