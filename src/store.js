import { createStore } from 'vuex';
import axios from 'axios'

const store = createStore({
  state() {
    return {
      imgURL:"",
      postList:[],
      userList:[],
      myProfile:{},
      updatePost:{},
      updateMyProfile:{},
      navState:0,
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
    },
    setUpdatePost(state, payload) {
      state.updatePost = payload;
    },
    setUpdateProfile(state, payload) {
      state.updateMyProfile = payload;
    },
    setNavState(state, payload) {
      state.navState = payload;
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
      // axios.get('http://localhost:8080/api/review/detail')
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
    },
    getUpdateProfile() {
      axios.get('http://localhost:3000/updateProfile')
      .then((result) => {
        this.commit('setUpdateProfile', result.data);
      })
    },
  },
  modules:{

  },
  strict:false
})

export default store;