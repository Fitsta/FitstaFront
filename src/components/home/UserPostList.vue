<template>
  <Header />
  <div class="big-container">
    <div class="container">
      <img class="user-image" :src="`https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/d9885b29-1d09-4f2b-9254-b51b143df4b6-dog.jpg`" alt="프로필사진">
      <div class="box">
        <div class="num first">
          234
        </div>
        <div class="category">
          게시물
        </div>
      </div>
      <div class="box">
        <div class="num">
          689
        </div>
        <div class="category">
          팔로워
        </div>
      </div>
      <div class="box">
        <div class="num">
          456
        </div>
        <div class="category">
          팔로잉
        </div>
      </div>
    </div>
    <!-- <div class="name">
      flourine
    </div> -->
    <hr>
  </div>
  <div v-for="(post, index) in postList" :key="index">
    <Post :post="post" :index="index" :type="`user`"/>
  </div>
  <Navbar/>
  <br><br>
</template>

<script>
import Post from '../home/Post.vue'
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import { mapState } from 'vuex';

export default {
  components: {
    Header,
    Post,
    Navbar,
  },
  computed: {
    // ...mapState(['userPostList'])
    ...mapState(['postList'])
  },
  created() {
    const id = this.$route.params.id;
    // this.$store.dispatch('getUserPostList', id);
    this.$store.dispatch('getUserPostList', id);
  },
}
</script>

<style scoped>
.name {
  margin-top: 2%;
  margin-left: 5.6%;
  font-weight: bolder;
}

.first {
  color:rgb(126, 124, 124)
}

.box {
  margin-top: 11%;
  margin-left: 7%;
}

.num {
  margin-left: 29%;
  font-weight: bolder;
}

.category {
  font-weight: bolder;
}

.container {
  display: flex;
}
.big-container{
  padding-top: 1%;
  align-items: center;
  margin-left: 1.5%;
  width: 97%;
  border-radius: 10px;
  padding-bottom: 4%;
  /* background-color: rgb(235, 226, 238); */
}
.user-image {
  margin-top: 5%;
  margin-left: 3%;
  width: 100px;
  height: 100px;
  min-width:32px;
  border-radius: 50%;
  overflow:hidden;
  margin-right: 10px;
}
</style>