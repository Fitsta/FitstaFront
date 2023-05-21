import { createStore } from 'vuex';
import axios from 'axios'

const store = createStore({
  state() {
    return {
      imgURL:"",
      postList:[], //
      userPostList:[], //
      userList:[],
      myProfile:{},
      updatePost:{},
      updateMyProfile:{},
      navState:0,
      loginUser:{
        id: 2,
        name: "minsung",
        nickname: "flourine",
        profileImg: "https://newsimg.hankookilbo.com/2019/08/01/201908010842397047_1.jpg",
      },
    }
  },
  getters: {

  },
  mutations : {
    setImgURL(state, payload) {
      state.imgURL = payload;
    },
    // Spring
    setPostList(state, payload) {
      state.postList = payload;
    },
    // Spring
    setUserPostList(state, payload) {
      state.userPostList = payload;
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
    setNavState(state, payload) {
      state.navState = payload;
    }
  },
  actions: {
    // 메인화면 포스트 가져오기
    getPostList() {
      axios.get('http://localhost:8080/api/postInfo/' + this.state.loginUser.id)
      .then((result) => {
        this.commit('setPostList', result.data);
      })
    },
    // 특정 유저의 게시글 가져오기
    getUserPostList(context, writerId) {
      axios.get('http://localhost:8080/api/postInfo/detail/' + writerId)
      .then((result) => {
        this.commit('setUserPostList', result.data);
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