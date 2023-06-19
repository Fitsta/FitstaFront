<template>
  <div class="card recommend-component item" style="width: 8rem; height: 13rem">
    <div class="card-body">
      <img class="user-image2" :src="`${user.profileImg}`" @click="detail(user.userId)" alt="프로필사진">
      <p class="title">{{ user.nickname }}</p>
      <p class="text">&nbsp;&nbsp;회원님을 위한 추천</p>
      <a v-if="user.follow" class="btn btn-secondary follow3" @click="unfollow1">unfollow</a>
      <a v-else class="btn  btn-light follow1" @click="follow1">follow</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    index: Number,
  },
  methods : {
    follow1() {
      this.$store.dispatch("followAndGetUserList", this.user.userId)
      this.$store.commit('follow', this.index)
    },
    unfollow1() {
      this.$store.dispatch("unFollowAndGetUserList", this.user.userId)
      this.$store.commit('unfollow', this.index)
    },
    detail(userId) {
      this.$router.push('/detail/' + userId);
    }
  },
}
</script>

<style>
.user-image2 {
  margin-left: 13%;
  width: 70px;
  height: 70px;
  min-width:32px;
  border-radius: 50%;
  overflow:hidden;
  margin-right: 10px;
}

.follow1 {
  font-weight: bolder;
  border-color: #a99df0;
  background-color: #a99df0;
  font-size: 13px;
  height: 19%;
  width: 100%;
}

.follow3 {
  font-size: 13px;
  height: 19%;
  width: 100%;
}

.title {
  margin-top: 8%;
  text-align: center;
  font-weight: bolder;
  font-size: 14px;
}

.text {
  margin-top: -4%;
  font-weight: bolder;
  font-size: 10px;
  color: darkgray;
}

.container2 {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.item {
  flex: 0 0 auto;
}

.recommend-component {
  margin-right: 1.5%;
}
</style>