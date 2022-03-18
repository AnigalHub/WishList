import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    },
}
const actions = {
    setUrl(context,payload){
        context.commit('setUrl',payload)
    },
    loadConfig:async (ctx)=>{
        const res = (await fetch(`${process.env.BASE_URL}config.json`))
        const resp = await res.json()
        console.log("befpre", axios.defaults.baseURL)
        axios.defaults.baseURL = resp.url
        console.log("after", axios.defaults.baseURL)
        ctx.commit("setUrl",resp.url)
    },
}

export default {
    namespaced: true,
        state,
        actions,
        getters,
        mutations,
}