import { createStore } from 'vuex';
import axios from 'axios'

const store = createStore({
  state() {
    return {
      imgURL:"",
      postList:[],
      userList:[],
      myProfile:{},
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
    },
    setUserList(state, payload) {
      state.userList = payload;
    },
    setMyProfile(state, payload) {
      state.myProfile = payload;
    }
  },
  actions: {
    getPostList() {
      axios.get('http://localhost:3000/posts')
      .then((result) => {
        this.commit('setPostList', result.data);
      })
    },
    getUserList() {
      axios.get('http://localhost:3000/users')
      .then((result) => {
        this.commit('setUserList', result.data);
      })
    },
    getMyProfile() {
      axios.get('http://localhost:3000/myProfile')
      .then((result) => {
        this.commit('setMyProfile', result.data);
      })
    }
  },
  modules:{

  },
  strict:false
})

export default store;