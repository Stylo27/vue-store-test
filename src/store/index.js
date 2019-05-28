import Vue from 'vue'
import Vuex from 'vuex'
import HTTP from '../adapters/http-wrapper.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  muttations: {},
  actions: {
    GET_NEWS: async (context, payload) => {
      let data = HTTP.get('GetTopNews')
        .then(response => {
          console.log(response)
        })
        .catch(error => {console.log(error)})
    }
  }
})
