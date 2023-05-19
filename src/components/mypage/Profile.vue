<template>
  <div class="container">
    <img class="user-image" src="../../icon/me.png" alt="프로필사진">
    <div class="box">
      <div class="num first">
        {{myProfile.postCount}}
      </div>
      <div class="category">
        게시물
      </div>
    </div>
    <div class="box">
      <div class="num">
        {{myProfile.followerCount}}
      </div>
      <div class="category">
        팔로워
      </div>
    </div>
    <div class="box">
      <div class="num">
        {{myProfile.followingCount}}
      </div>
      <div class="category">
        팔로잉
      </div>
    </div>
  </div>
  <div class="name">
    {{ myProfile.userName }}
  </div>
  <button type="button" class="btn btn-light profile-btn">프로필 편집</button>
  <button type="button" class="btn btn-light profile-btn">프로필 공유</button>
  <div class="name">
    사람 찾아보기
  </div>
  <div class="container2 recommend">
    <div v-for="(user, index) in myProfile.userList" :key="index">
      <CardUser :user="user"/>
    </div>
  </div>
  <img class="icon" src="../../icon/grid.png" alt="프로필사진" @click="grid">
  <img class="icon" src="../../icon/teg.png" alt="프로필사진" @click="calendar">
  <div class="container text-center">
  <div v-if="this.state == 0" class="row row-cols-3 images">
    <img v-for="i in 10" :key="i" src="../../icon/dog.jpg" class="col my-grid" alt="프로필사진">
    <img src="../../icon/dog.jpg" class="col my-grid" alt="프로필사진">
  </div>
  <div v-if="this.state == 1">
    <div class="calendar">
      <VCalendar />
    </div>
  </div>
</div>
</template>

<script>
import CardUser from './CardUser.vue';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      state:1,
      postNum : 213,
      follower : 58,
      following: 481,
    }
  },
  components: {
    CardUser
  },
  methods : {
    grid() {
      this.state = 0;
    },
    calendar() {
      this.state = 1;
    }
  },
  computed: {
    ...mapState(['myProfile'])
  },
  created() {
    this.$store.dispatch("getMyProfile");
  }
}
</script>

<style scoped>
.calendar {
  margin-top: 7%;
  margin-left: 27%;
  margin-bottom: 25%;
}

.images {
  margin-top: 3%;
}

.my-grid {
  padding: 1px 1px 1px 1px
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

.profile-btn {
  width: 180px;
  margin-top: 5%;
  margin-left: 4%;
  margin-bottom: 3%;
  background-color: lightgray;
  font-size: 15px;
  font-weight: bold;

}

.name {
  margin-top: 2%;
  margin-left: 5.6%;
  /* font-size: 16px; */
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