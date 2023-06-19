<template>
  <Header />
  <p class="username">{{ myProfile.nickname }}</p>
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
    <div class="box" @click="showFollowingList">
      <div class="num">
        {{myProfile.followerCount}}
      </div>
      <div class="category">
        팔로잉
      </div>
    </div>
  </div>
  <div class="name">
    {{ myProfile.userName }}
  </div>
  <button type="button" class="btn btn-light profile-btn" @click="updateProfile">프로필 편집</button>
  <button type="button" class="btn btn-light profile-btn" @click="detail">포스팅 관리</button>
  <div class="name">
    사람 찾아보기
  </div>
  <div class="container2">
    <div class="recommend" v-for="(user, index) in userList" :key="index">
      <CardUser :user="user" :index="index"/>
    </div>
  </div>
  <div class="name">
    
  </div>

  <div class="container text-center">
    <div v-if="this.state == 0" class="row row-cols-3 images">
      <div 
        @click="detail"
        v-for="(post, index) in myProfile.postList"
        :key="index"
        :style="{ backgroundImage : `url(${post.img})` }"
        :class="post.filterName + ' col my-grid'" alt="프로필사진"></div>
    </div>
    <div v-if="this.state == 1">
      <div class="calendar">
        <VCalendar />
      </div>
    </div>
  </div>
  <br><br><br>
  <Navbar />
</template>

<script>
import CardUser from './CardUser.vue';
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import { mapState } from 'vuex';

export default {
  data() {
    return {
      state:0,
      postNum : 213,
      follower : 58,
      following: 481,
    }
  },
  components: {
    Header,
    CardUser,
    Navbar,
  },
  methods : {
    grid() {
      this.state = 0;
    },
    calendar() {
      this.state = 1;
    },
    updateProfile() {
      this.$router.push('/updateprofile')
    },
    detail() {
      this.$router.push('/detail/' + this.$store.state.loginUser.id);
    },
    showFollowerList() {
      this.$store.commit('setTargetUserName', this.myProfile.nickname);
      this.$router.push('/followerInfo/' + this.myProfile.userId);
    },
    showFollowingList() {
      this.$store.commit('setTargetUserName', this.myProfile.nickname);
      this.$router.push('/followingInfo/' + this.myProfile.userId);
    },
  },
  computed: {
    ...mapState(['myProfile']),
    ...mapState(['userList']),
  },
  created() {
    this.$store.dispatch("getMyProfile", this.$store.state.loginUser.id);
    this.$store.commit("setNavState", 4)
    this.$store.dispatch("getUserList")
  }
}
</script>

<style scoped>
.username{
  margin-left: 7%;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0px;
}
.calendar {
  margin-top: 7%;
  margin-left: 27%;
  margin-bottom: 25%;
}

.images {
  margin-top: 3%;
}

.my-grid {
  width: 7.81rem;
  height: 7.81rem;
  margin: 1px 1px 1px 1px;
  transform: translate(50, 50);
  background: rgb(215, 221, 231);
  background-size: cover;
}

.recommend {
  margin-top: 2%;
  margin-left: 1.4%;
}

.icon {
  margin-top: 4%;
  padding: 5px;
  width : 35px;
  margin-left: 23%;
  margin-right: 14%;
}

.icon2 {
  margin-top: 4%;
  padding: 0px;
  width : 35px;
  margin-left: 23%;
  margin-right: 14%;
}

.profile-btn {
  width: 160px;
  margin-top: 5%;
  margin-left: 5.2%;
  margin-bottom: 3%;
  background-color: lightgray;
  font-size: 15px;
  font-weight: bold;

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