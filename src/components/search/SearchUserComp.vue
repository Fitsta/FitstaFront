<template>
  <div class="container mb-4">
    <img class="user-image" :src="`${user.profileImg}`" alt="프로필사진">
    <div>
      <div class="id">{{ user.nickname }}</div>
      <div class="name">{{ user.name }}</div>
    </div>
    <button v-if="user.follow" type="button" class="btn btn-secondary follow4 mt-1" @click="follow">unfollow</button>
    <button v-else type="button" class="btn btn-light follow5 mt-1" @click="follow">follow</button>
  </div>
  <!-- {{user}} -->
</template>

<script>


export default {
  data() {
    return {
      isFollow: false,      
    }
  },
  methods : {
    follow() {
      this.isFollow = !this.isFollow
    },
  },
  props: {
    user: Object,
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