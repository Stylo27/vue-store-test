import Vue from 'vue'
import Vuex from 'vuex'
import HTTP from '../adapters/http-wrapper.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: null
  },
  getters: {
    NEWS: state => {
      return state.news
    }
  },
  mutations: {
    SET_NEWS: (state, payload) => {
      state.news = payload
    }
  },
  actions: {
    GET_NEWS: (context, payload) => {
      let data = HTTP.get('GetTopNews')
        .then(response => {
          context.commit('SET_NEWS', response.data['Data'])
        })
        .catch(error => {console.log(error)})
    }
  }
})
