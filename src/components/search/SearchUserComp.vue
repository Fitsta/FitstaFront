<template>
  <div class="container mb-4">
    <img class="user-image" :src="`${user.profileImg}`" alt="프로필사진">
    <div>
      <div class="id">{{ user.userName }}</div>
      <div class="name">{{ user.Name }}</div>
    </div>
    <button v-if="user.isFollow" type="button" class="btn btn-secondary follow mt-1" @click="follow">unfollow</button>
    <button v-else type="button" class="btn btn-primary follow mt-1" @click="follow">follow</button>
  </div>
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
.follow {
  z-index: -1;
  padding-right: 1px;
  padding-left: 1px;
  width: 80px;
  height: 40px;
  position: absolute;
  margin-left: 70%;
}
.name {
  font-weight: bolder;  
  color: rgb(122, 121, 121);
}

.container {
  display: flex;
}

.id {
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