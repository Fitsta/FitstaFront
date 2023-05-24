<template>
  <Header />
  <div class="title-container">
    <img class="icon-cross" src="../../icon/back.png" @click="back">
    <p class="username">{{ myProfile.nickname }}</p>
  </div>
  <div class="big-container">
    <div class="container">
      <img class="user-image" :src="`${myProfile.profileImg}`" alt="프로필사진">
      <div class="box">
        <div class="num first">
          {{myProfile.postCount}}
        </div>
        <div class="category">
          게시물
        </div>
      </div>
      <div class="box" @click="showFollowerList">
        <div class="num">
          {{myProfile.followingCount}}
        </div>
        <div class="category">
          팔로워
        </div>
      </div>
      <div class="box"  @click="showFollowingList">
        <div class="num">
          {{myProfile.followerCount}}
        </div>
        <div class="category">
          팔로잉
        </div>
      </div>
    </div>
    <div class="name">
    </div>
     <button type="button" class="btn btn-light profile-btn" @click="follow">팔로우</button>
  <button type="button" class="btn btn-light profile-btn">메시지</button>
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
    ...mapState(['myProfile']),
    ...mapState(['postList'])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getMyProfile", id);
    this.$store.dispatch('getUserPostList', id);
  },
  methods: {
    follow() {
      console.log("팔로우하기")
    },
    showFollowerList() {
      this.$store.commit('setTargetUserName', this.myProfile.nickname);
      this.$router.push('/followerInfo/' + this.myProfile.userId);
    },
    showFollowingList() {
      this.$store.commit('setTargetUserName', this.myProfile.nickname);
      this.$router.push('/followingInfo/' + this.myProfile.userId);
    },
    back() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.title-container{
  display: flex;
}
.icon-cross {
  margin-top: 0%;
  margin-left: 2%;
  padding: 5px;
  width : 35px;
  height: 35px;
}
.profile-btn {
  width: 180px;
  margin-top: 5%;
  margin-left: 4%;
  margin-bottom: 3%;
  background-color: lightgray;
  font-size: 15px;
  font-weight: bold;
}

.username{
  margin-left: 2%;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0px;
}

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