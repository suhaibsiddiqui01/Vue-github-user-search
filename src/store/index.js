import Vuex from "vuex";
import Vue from "vue";
import userSearch from "./modules/userSearch";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    userSearch
  }
});
