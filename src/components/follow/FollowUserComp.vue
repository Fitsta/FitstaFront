<template>
  <div class="container mb-4">
    <img class="user-image" :src="`${user.profileImg}`" alt="프로필사진" @click="detail(user.userId)">
    <div>
      <div class="id" @click="detail(user.userId)">{{ user.nickname }}</div>
      <div class="name">{{ user.name }}</div>
    </div>
    <button v-if="user.follow" type="button" class="btn btn-secondary follow4 mt-1" @click="unfollow">unfollow</button>
    <button v-else type="button" class="btn btn-light follow5 mt-1" @click="follow">follow</button>
  </div>
</template>

<script>


export default {

  methods : {
    follow() {
      if (this.user.userId === this.$store.state.loginUser.id) {
          this.$toast.error(`본인을 팔로우 할 수 없습니다.`, { position:"top",duration:2000 });
        return
      }
      this.$store.dispatch("followAndGetUserList", this.user.userId)
      this.$store.commit('follow1', this.index)
    },
    unfollow() {
      this.$store.dispatch("unFollowAndGetUserList", this.user.userId)
      this.$store.commit('unfollow1', this.index)
    },
    detail(userId) {
      this.$router.push('/detail/' + userId);
    }
  },
  props: {
    user: Object,
    index: Number,
  },
}
</script>

<style scoped>
.follow5 {
  font-weight: bolder;
  font-size: 13px;
  border-color: #a99df0;
  background-color: #a99df0;
  padding-right: 1px;
  padding-left: 1px;
  width: 80px;
  height: 40px;
  position: absolute;
  margin-left: 70%;
}
.follow4 {
  font-weight: bolder;
  font-size: 13px;
  padding-right: 1px;
  padding-left: 1px;
  width: 80px;
  height: 40px;
  position: absolute;
  margin-left: 70%;
}
.name {
  font-size: 14px;
  font-weight: bolder;  
  color: rgb(122, 121, 121);
}

.container {
  display: flex;
}

.id {
  font-size: 15px;
  font-weight: bolder;
}

.user-image {
  width: 50px;
  height: 50px;
  min-width:32px;
  border-radius: 50%;
  overflow:hidden;
  margin-right: 10px;
}
</style>