import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const $https = axios.create({
  baseURL: "http://localhost:1337/api/"
})


// modules
// import auth from "@/store/modules/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   user: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_TOKEN(_, payload) {
      localStorage.setItem('token', payload)
    },
    REMOVE_TOKEN() {
      localStorage.removeItem('token')
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        $https.post("auth/local", {
          identifier: username,
          password,
        })
        .then(({data}) => {
          commit('SET_USER', data.user)
          commit('SET_TOKEN', data.jwt)
            resolve(data)
        })
        .catch(error => {
            reject(error)
        });
      });
    },
    logout({commit}) {
      REMOVE_TOKEN
    }
  }
})
