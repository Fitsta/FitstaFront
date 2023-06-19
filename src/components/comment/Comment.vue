<template>
  <Header />
  <div class="top">
    <div class="box">
    <img class="icon-cross" src="../../icon/back.png" @click="back">
      <p class="comment-title regist">댓글</p>
      <img class="bg" src="../../icon/white.png">
      <!-- <img src="../../icon/kakao.jpg"> -->
      <button type="button" class="btn btn-sm btn-light post-btn regist" @click="publish">게시</button>
    </div>
    <div class="input-area regist2">
      <textarea type="text" class="form-control login-comp" v-model="this.myComment" placeholder="댓글 추가..."/>
    </div>
  </div>
  <div class="comment-list">
    <CommentComp :comment="`asd`"/>
    <div v-for="(comment, index) in commentList" :key="index">
      <CommentComp :comment="comment"/>
    </div>
  </div>
  <br>
  <br>
  <Navbar />
</template>

<script>
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import CommentComp from '../comment/CommentComp.vue'
import { mapState } from 'vuex';

export default {
  data() {
    return {
      myComment:""
    }
  },
  components: {
    Header,
    Navbar,
    CommentComp
  },
  computed: {
    ...mapState(['commentList'])
  },
  created () {
    this.$store.dispatch('getCommentList', this.$route.params.id)
  },
  methods: {
    publish() {
      const data = {
        comment : this.myComment,
        userId : this.$store.state.loginUser.id,
        postId : this.$route.params.id,
      }
      this.$store.dispatch('registComment', data)
      this.$toast.success(`댓글이 등록되었습니다.`, { position:"top",duration:2000 });
      this.myComment = "";
    },
    back() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.icon-cross {
  position: fixed;
  z-index: 1;
  margin-top: 0%;
  margin-left: 2.3%;
  padding: 5px;
  width : 35px;
  height: 35px;
}
.bg {
  margin-top: 0px;
  position: fixed;
  width: 600px;
  height: 110px;
}
.top {
  width: 100%;
  height: 100%;
}
.comment-list {
  margin-top: 14%;
}
.regist {
  z-index: 1;
  position: fixed;
}
.regist2 {
  position: fixed;
  top: 14%;
}
.box {
  
  display: flex;
}
.post-btn{
  margin-left: 83.4%;
  width: 50px;
  height: 30px;
  font-weight: bold;
  border-color: #a99df0;
  background-color: #a99df0;
  opacity: 0.6;
}

.input-area {
  margin-left: 3%;
  align-content: center;
  display: flex;
  width: 93%;
  margin-bottom: 5%;
}

.comment-title {
  font-weight: bolder;
  font-size: 20px;
  margin-left: 15%;
}
</style>