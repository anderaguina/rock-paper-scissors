import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    brokerEmail: "",
    brokerId: 0,
  },
  getters: {
    user(state){
      return state.user
    },
    brokerEmail(state) {
      return state.brokerEmail;
    },
    brokerId(state) {
      return state.brokerId;
    },
    userData(state) {
      return state.user.data
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_USER_EMAIL(state, data) {
      state.brokerEmail = data;
    },
    SET_BROKER_ID(state, data) {
      state.brokerId = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    setBrokerEmail({commit}, userEmail) {
      commit("SET_USER_EMAIL", userEmail);
    },
    setBrokerId({commit}, brokerId) {
      commit("SET_BROKER_ID", brokerId);
    }
  }
});