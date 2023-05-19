import { createStore } from 'vuex';
import axios from 'axios'

const store = createStore({
  state() {
    return {
      imgURL:"",
      postList:[],
    }
  },
  getters: {

  },
  mutations : {
    setImgURL(state, payload) {
      state.imgURL = payload;
    },
    setPostList(state, payload) {
      state.postList = payload;
    }
  },
  actions: {
    getPostList() {
      axios.get('./data/post.json')
      .then((result) => {
        console.log(result)
        // this.commit('setPostList', result.data);
      })
    },
  },
  modules:{

  },
  strict:false
})

export default store;