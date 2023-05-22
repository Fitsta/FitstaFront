import { createStore } from 'vuex';
import axios from 'axios'

const store = createStore({
  state() {
    return {
      imgURL:"",
      postList:[], //
      // userPostList:[], //
      postImageFile:"",
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
    // // Spring
    // setUserPostList(state, payload) {
    //   state.userPostList = payload;
    // },
    // 현재 포스팅 할때 업로드한 이미지파일 
    setPostImageFile(state, payload) {
      state.postImageFile = payload;
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
    },
    // 팔로우
    follow(state, payload) {
      state.userList[payload].follow = !state.userList[payload].follow;
    },
    // 언팔로우
    unfollow(state, payload) {
      state.userList[payload].follow = !state.userList[payload].follow;
    },
    // 좋아요
    setLike(state, payload) {
      state.postList[payload].like = !state.postList[payload].like;
    },
    // 좋아요 취소
    setDislike(state, payload) {
      state.postList[payload].like = !state.postList[payload].like;
    },
  },
  actions: {
    // 메인화면 포스트 가져오기
    getPostList() {
      axios.get(process.env.VUE_APP_API_URL + 'api/postInfo/' + this.state.loginUser.id)
      .then((result) => {
        this.commit('setPostList', result.data);
      })
    },
    // 특정 유저의 게시글 가져오기
    getUserPostList(context, writerId) {
      axios.get(process.env.VUE_APP_API_URL + 'api/postInfo/detail/' + writerId)
      .then((result) => {
        // this.commit('setUserPostList', result.data);
        this.commit('setPostList', result.data);
      })
    },
    // 유저 검색화면 
    getUserList() {
      axios.get(process.env.VUE_APP_API_URL + 'api/searchUser/' + this.state.loginUser.id)
      .then((result) => {
        this.commit('setUserList', result.data);
      })
    },
    // 팔로우 버튼 누름
    followAndGetUserList(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/follow/';
      const data = {
        followingId: this.state.loginUser.id,
        followerId: payload
      };
      const config = {"Content-Type": 'application/json'};
      axios.post(url, data, config)
    },
    // 언팔 버튼 누름
    unFollowAndGetUserList(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/follow/unfollow';
      const data = {
        followingId: this.state.loginUser.id,
        followerId: payload
      };
      const config = {"Content-Type": 'application/json'};
      axios.post(url, data, config)
    },
    // 유저 검색
    getSearchUserList(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/searchUser/search/' + this.state.loginUser.id + "/" + payload;
      axios.get(url)
      .then((result) => {
        console.log(payload)
        this.commit('setUserList', result.data);
      })
    },
    // 좋아요 누름
    getLike(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/like/';
      const data = {
        postId :payload,
        userId :this.state.loginUser.id,
      }
      const config = {"Content-Type": 'application/json'};
      axios.post(url, data, config)
    },
    // 좋아요 취소
    getDislike(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/like/dislike';
      const data = {
        postId :payload,
        userId :this.state.loginUser.id,
      }
      const config = {"Content-Type": 'application/json'};
      axios.post(url, data, config)
    },
    deletePoatHome(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/post/' + payload;
      axios.delete(url)
      .then(() => {
        this.dispatch('getPostList');
      })
    },
    deletePoatUser(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/post/' + payload;
      axios.delete(url)
      .then(() => {
        this.dispatch('getUserPostList', this.state.loginUser.id);
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