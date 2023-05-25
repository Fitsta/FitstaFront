<template>
  <Header />
  <div class="title-container">
    <img class="icon-cross" src="../../icon/back.png" @click="back">
    <p class="username">좋아요</p>
    <!-- 내꺼 제외하고 띄우기 -->
    <!-- 
      { 
        "postId": 2, 
        "writerId": 3, 
        "regDate": "2023-05-24 23:11:55", 
        "postComment": "오늘 상체 맛있누", 
        "filterName": "brannan", 
        "img": "https://placeimg.com/640/480/nature", 
        "likeCount": 3, 
        "userName": "borussen", 
        "commentCount": 4, 
        "profileImg": "https://placeimg.com/100/100/animals", 등록한사람
        "like": true // 좋아요 여부
      }
     -->
  </div>
  <div v-for="(post, index) in myLikeList" :key="index">
    <div v-if="post.writerId !== this.$store.state.loginUser.id">
      <Post :post="post" :index="index" :type="`like`"/>
    </div>
  </div>
  <!-- {{myLikeList}}   -->
  <Navbar />
</template>

<script>
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import Post from '../home/Post.vue'
import { mapState } from 'vuex';

export default {
  components: {
    Header,
    Navbar,
    Post,
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
  computed: {
    ...mapState(['myLikeList']),
  },
  created() {
    // vuex로 내가 좋아요 누른 게시물 요청
    this.$store.dispatch('getLikeList', this.$store.state.loginUser.id);
  }
}
</script>

<style scoped>
.title-container{
  display: flex;
  margin-bottom: 3%;
}
.icon-cross {
  margin-top: 0%;
  margin-left: 2%;
  padding: 5px;
  width : 35px;
  height: 35px;
}

.username{
  margin-left: 2%;
  margin-top: 0.5%;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0px;
}
</style>