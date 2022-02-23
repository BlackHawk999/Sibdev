// initial state
const state = () => ({
  user: null,
});

// getters
const getters = {};

// actions
const actions = {
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      this.$axios.post("auth/local", {
        identifier: username,
        password,
      })
      .then(data => {
          console.log("login response", data);
          resolve(data)
      })
      .catch(error => {
          reject(error)
      });
    });
  },
};

// mutations
const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
