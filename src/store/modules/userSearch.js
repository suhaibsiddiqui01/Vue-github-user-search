import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { SET_SEARCH_QUERY, SET_LOADING, SET_USER, RESET_USER } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
    loading: false,
    user: null
  },
  mutations: {
    [SET_SEARCH_QUERY]: (state, searchQuery) =>
      (state.searchQuery = searchQuery),
    [SET_LOADING]: (state, loading) => (state.loading = loading),
    [SET_USER]: (state, user) => (state.user = user),
    [RESET_USER]: state => (state.user = null)
  },
  actions: {
    setSearchQuery({ commit }, searchQuery) {
      commit(SET_SEARCH_QUERY, searchQuery);
    },
    async search({ commit, state }) {
      commit(SET_LOADING, true);
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${state.searchQuery}`
        );
        commit(SET_USER, data);
      } catch (e) {
        commit(RESET_USER);
      }
      commit(SET_LOADING, false);
    }
  }
});
