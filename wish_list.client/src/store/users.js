import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({

})
const getters = {
    user: (state) => {
        return state.user
    },
}
const mutations ={

}
const actions = {

}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}