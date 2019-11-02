//Setup Vuex store-- having a global variable which holds the currently chosen theme color and is used by components all across the application
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  themeColor: '#41B883'
};

const mutations = {
  setThemeColor(state, color) {
    state.themeColor = color;
  }
};

const getters = {
  themeColor: state => state.themeColor,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
});