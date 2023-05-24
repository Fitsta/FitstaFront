import { createStore } from 'vuex';
import axios from 'axios'

const store = createStore({
  state() {
    return {
      imgURL:"",
      postList:[],
      postImageFile:"",
      updatePost:{},
      userList:[],
      myProfile:{},
      updateMyProfile:{},
      navState:0,
      loginUser:{},
      updateProfileImg:"",
      followInfo:[],
      targetUserName:""
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
    setTargetUserName(state, payload) {
      state.targetUserName = payload;
    },
    // 팔로우
    follow1(state, payload) {
      state.followInfo[payload].follow = !state.followInfo[payload].follow;
    },
    // 언팔로우
    unfollow1(state, payload) {
      state.followInfo[payload].follow = !state.followInfo[payload].follow;
    },
    
    // 좋아요
    setLike(state, payload) {
      state.postList[payload].like = !state.postList[payload].like;
      state.postList[payload].likeCount = state.postList[payload].likeCount + 1;
    },
    // 좋아요 취소
    setDislike(state, payload) {
      state.postList[payload].like = !state.postList[payload].like;
      state.postList[payload].likeCount = state.postList[payload].likeCount - 1;
    },
    // 게시글 수정
    setUpdatePost(state, payload) {
      state.updatePost = payload;
    },
    // 로그인 유저
    setLoginUser(state, payload) {
      state.loginUser = payload;
    },
    // 프사 수정
    setUpdateProfileImg(state, payload) {
      state.updateMyProfile = payload;
    },
    // 팔로우 정보
    setFollowInfo(state, payload) {
      state.followInfo = payload;
    }
  },
  actions: {
    // 메인화면 포스트 가져오기
    getPostList() {
      const url = process.env.VUE_APP_API_URL + 'api/postInfo/' + this.state.loginUser.id;
      axios.get(url)
      .then((result) => {
        this.commit('setPostList', result.data);
      })
    },
    // 특정 유저의 게시글 가져오기
    getUserPostList(context, writerId) {
      const url = process.env.VUE_APP_API_URL + 'api/postInfo/detail/' + writerId + '/' + this.state.loginUser.id;
      axios.get(url)
      .then((result) => {
        // this.commit('setUserPostList', result.data);
        this.commit('setPostList', result.data);
      })
    },
    // 유저 검색화면 
    getUserList() {
      const url = process.env.VUE_APP_API_URL + 'api/searchUser/' + this.state.loginUser.id;
      axios.get(url)
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
        followerId: payload,
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
    // 게시글 삭제
    deletePoatHome(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/post/' + payload;
      axios.delete(url)
      .then(() => {
        this.dispatch('getPostList');
      })
    },
    // 게시글 삭제
    deletePoatUser(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/post/' + payload;
      axios.delete(url)
      .then(() => {
        this.dispatch('getUserPostList', this.state.loginUser.id);
      })
    },
    // 게시글 수정할때 조회
    getUpdatePost(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/post/' + payload;
      axios.get(url)
      .then((result) => {
        this.commit('setUpdatePost', result.data);
        console.log(result.data)
      })
    },
    // 내 프로필 가져오기
    getMyProfile(context, payload) {
      const url = process.env.VUE_APP_API_URL + 'api/profile/' + payload;
      axios.get(url)
      .then((result) => {
        this.commit('setMyProfile', result.data);
      })
    },
    // 팔로우 정보 세팅
    getFollowerList(context, payload) {
      const url = process.env.VUE_APP_API_URL + "api/searchUser/searchFollower/" + payload;
      axios.get(url)
      .then((result) => {
        this.commit('setFollowInfo', result.data)
      })
    },
    // 팔로워 정보 세팅
    getFollowingList(context, payload) {
      const url = process.env.VUE_APP_API_URL + "api/searchUser/searchFollowing/" + payload;
      axios.get(url)
      .then((result) => {
        this.commit('setFollowInfo', result.data)
      })
    }
  },
  modules:{

  },
  strict:false
})

export default store;