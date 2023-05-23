<template>
  <Header />
  <div class="box">

  <p class="comment-title">댓글</p>
  <button type="button" class="btn btn-sm btn-light post-btn" @click="publish">게시</button>
  </div>
    <div class="input-area">
    <textarea type="text" class="form-control login-comp" v-model="this.myComment" placeholder="댓글 추가..."/>
  </div>
  <CommentComp :comment="`asd`"/>
  <div v-for="(comment, index) in commentList" :key="index">
    <CommentComp :comment="comment"/>
  </div>
  <Navbar />
</template>

<script>
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import CommentComp from '../comment/CommentComp.vue'
import axios from 'axios'

export default {
  data() {
    return {
      commentList:[],
      myComment:""
    }
  },
  components: {
    Header,
    Navbar,
    CommentComp
  },
  created () {
    const url = process.env.VUE_APP_API_URL + 'api/commentInfo/' + this.$route.params.id;
    axios.get(url)
    .then((result) => {
      this.commentList = result.data;
      // console.log(result.data)
    })
  },
  methods: {
    publish() {
      console.log(this.myComment)
    },
  }
}
</script>

<style scoped>
.box {
  display: flex;
}
.post-btn{
  margin-left: 70%;
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
  margin-bottom: 4%;
}

.comment-title {
  font-weight: bolder;
  font-size: 20px;
  margin-left: 3.7%;
}
</style>