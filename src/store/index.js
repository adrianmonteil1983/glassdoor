import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    right: false,
  },
  mutations: {
    slideRight(state){
      state.right = true
    },
    slideLeft(state){
      state.right = false
    }
  },
  actions:{
  },
  modules: {}
});
