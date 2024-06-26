import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },

  mutations: {
    SET_USER(state, payload) {
      state.currentUser = payload;
    },
  },
});
