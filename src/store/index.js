import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const $https = axios.create({
  baseURL: "http://localhost:1337/api/",
});

// modules
// import auth from "@/store/modules/auth"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    search: "",
    fullfilled: false,
    videos: [],
    favorites: [],
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_SEARCH_VALUE(state, payload) {
      state.search = payload;
    },
    SET_TOKEN(_, payload) {
      localStorage.setItem("token", payload);
    },
    REMOVE_TOKEN() {
      localStorage.removeItem("token");
    },
    SET_FULLFILLED_STATUS(state, payload) {
      state.fullfilled = payload;
    },
    SET_VIDEOS(state, payload) {
      state.videos = payload;
    },
    SET_FAVORITES(state, payload) {
      state.favorites = payload;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        $https
          .post("auth/local", {
            identifier: username,
            password,
          })
          .then(({ data }) => {
            commit("SET_USER", data.user);
            commit("SET_TOKEN", data.jwt);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logout({ commit }) {
      commit("REMOVE_TOKEN");
    },
    searchItems({ commit }, { search, order = "relevance", amount = 25 }) {
      return new Promise((resolve, reject) => {
        $https
          .get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              key: "AIzaSyCfT9M8PmJmWCEboMOGJhn5eFDzU5UGglA",
              part: "snippet",
              maxResults: amount,
              q: search,
              order,
            },
          })
          .then(({ data }) => {
            commit("SET_VIDEOS", data.items);
            commit("SET_FULLFILLED_STATUS", true);
            resolve(data.items);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getFavorites({ commit }) {
      return new Promise((resolve, reject) => {
        $https
          .get("http://localhost:1337/api/favorites")
          .then(({ data }) => {
            commit("SET_FAVORITES", data.data);
            resolve(data.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    createFavorite(_, { amount, name, sort, request }) {
      return new Promise((resolve, reject) => {
        $https
          .post("http://localhost:1337/api/favorites", {
            data: {
              amount,
              name,
              sort,
              request,
            },
          })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateFavorite(_, { amount, name, sort, request, id }) {
      return new Promise((resolve, reject) => {
        $https
          .put(`http://localhost:1337/api/favorites/${id}`, {
            data: {
              amount,
              name,
              sort,
              request,
            },
          })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    deleteFavorite(_, id) {
      return new Promise((resolve, reject) => {
        $https
          .delete(`http://localhost:1337/api/favorites/${id}`)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  getters: {
    videoList(state) {
      return state.videos.map(
        ({
          id: { videoId },
          snippet: { description, channelTitle, thumbnails, title },
        }) => ({
          id: videoId,
          description,
          channelTitle,
          thumbnails,
          title,
        })
      );
    },
    favsList(state) {
      return state.favorites.map(
        ({ id, attributes: { amount, name, request, sort } }) => ({
          id,
          amount,
          name,
          request,
          sort,
        })
      );
    },
  },
});
