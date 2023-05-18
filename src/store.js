import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      imgURL:"",
    }
  },
  getters: {

  },
  mutations : {
    setImgURL(state, payload) {
      state.imgURL = payload;
    },
  },
  actions: {

  },
  modules:{

  },
  strict:false
})

export default store;