<template>
  <div class="footer">
    <img v-if="this.navNum === 0" class="icon first" src="../../icon/mainBorder.png" @click="moveHome">
    <img v-else class="icon first" src="../../icon/main.png" @click="moveHome">

    <img v-if="this.navNum === 1" class="icon-select" src="../../icon/search.png" @click="moveSearch">
    <img v-else class="icon" src="../../icon/search.png" @click="moveSearch">

    <img v-if="this.navNum === 2" class="icon-select" src="../../icon/post.png" @click="movePosting">
    <img v-else class="icon" src="../../icon/post.png" @click="movePosting">

    <img v-if="this.navNum === 3" class="icon-select" src="../../icon/reels.png" @click="moveReels">
    <img v-else class="icon" src="../../icon/reels.png" @click="moveReels">

    <img v-if="this.navNum === 4" class="icon-select" src="../../icon/up.png" @click="moveProfile">
    <img v-else class="icon" src="../../icon/up.png" @click="moveProfile">

  </div>
</template>

<script>
export default {
  data() {
    return {
      navNum : 0,
    }
  },
  methods: {
    moveHome() {
      this.navNum = 0;
      this.$router.push('/')
    },
    moveSearch() {
      this.navNum = 1;
      this.$router.push('/search')
    },
    movePosting() {
      this.navNum = 2;
      this.$router.push('/regist')
    },
    moveReels() {
      this.navNum = 3;
      this.$router.push('/reels')
    },
    moveProfile() {
      this.navNum = 4;
      this.$router.push('/profile')
    },
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding-top: 7px;
  padding-bottom: 9px;
  background-color: white;
}
.icon {
  padding: 5px;
  width : 35px;
  margin-right: 5.5%;
  margin-left: 5.8%;
}
.icon-select {
  padding: 1px;
  width : 35px;
  margin-right: 5.5%;
  margin-left: 5.5%;
}
/* .footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
} */

.inputfile {
  display: none;
}
/* .input-plus {
  cursor: pointer;
} */
</style>