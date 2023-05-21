<template>
  <div class="card recommend-component item" style="width: 8rem; height: 13rem">
    <div class="card-body">
      <img class="user-image2" :src="`${user.profileImg}`" alt="프로필사진">
      <p class="title">{{ user.userName }}</p>
      <p class="text">&nbsp;회원님을 위한 추천</p>

      <a v-if="!user.isFollow" class="btn btn-light follow1">follow</a>
      <a v-else class="btn btn-secondary follow3">unfollow</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
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
  font-size: 6px;
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