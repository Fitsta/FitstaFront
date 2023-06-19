<template>
  <div v-if="this.$store.state.navState !== 3"  class="footer">
    <img v-if="this.$store.state.navState === 0" class="icon first" src="../../icon/mainBorder.png" @click="moveHome">
    <img v-else class="icon first" src="../../icon/main.png" @click="moveHome">

    <img v-if="this.$store.state.navState === 1" class="icon-select" src="../../icon/search.png" @click="moveSearch">
    <img v-else class="icon" src="../../icon/search.png" @click="moveSearch">

    <input @change="upload" type="file" id="file" class="inputfile" />
    <label for="file" class="icon-select">
      <img v-if="this.$store.state.navState === 2" class="icon-select" src="../../icon/post.png" @click="movePosting">
      <img v-else class="icon" src="../../icon/post.png">  
    </label>

    <img v-if="this.$store.state.navState === 3" class="icon-select" src="../../icon/reels.png" @click="moveReels">
    <img v-else class="icon" src="../../icon/reels.png" @click="moveReels">

    <img v-if="this.$store.state.navState === 4" class="icon-select my-profile" :src="this.$store.state.loginUser.profileImg" @click="moveProfile">
    <img v-else class="icon my-profile2" :src="this.$store.state.loginUser.profileImg" @click="moveProfile">
  </div>
  <div v-else class="footer">
    <img v-if="this.$store.state.navState === 0" class="icon first" src="../../icon/mainBorder.png" @click="moveHome">
    <img v-else class="icon first" src="../../icon/r_main.png" @click="moveHome">

    <img v-if="this.$store.state.navState === 1" class="icon-select" src="../../icon/search.png" @click="moveSearch">
    <img v-else class="icon" src="../../icon/r_search.png" @click="moveSearch">

    <input @change="upload" type="file" id="file" class="inputfile" />
    <label for="file" class="icon-select">
      <img v-if="this.$store.state.navState === 2" class="icon-select" src="../../icon/post.png" @click="movePosting">
      <img v-else class="icon" src="../../icon/r_post.png">  
    </label>

    <img v-if="this.$store.state.navState === 3" class="icon-select" src="../../icon/r_reels.png" @click="moveReels">
    <img v-else class="icon" src="../../icon/r_reels.png" @click="moveReels">

    <img v-if="this.$store.state.navState === 4" class="icon-select my-profile" :src="this.$store.state.loginUser.profileImg" @click="moveProfile">
    <img v-else class="icon my-profile2" :src="this.$store.state.loginUser.profileImg" @click="moveProfile">
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:"",
      step:0,
    }
  },
  methods: {
    moveHome() {
      this.navNum = 0;
      this.$store.commit("setNavState", 0);
      this.$router.push('/main')
    },
    moveSearch() {
      this.navNum = 1;
      this.$store.commit("setNavState", 1);
      this.$router.push('/search')
    },
    upload(e) {
      let file = e.target.files[0];
      try {
        this.url = URL.createObjectURL(file); 
      } catch (error) {
        console.log(error)
      }
      this.$store.commit("setPostImageFile", file);
      this.$store.commit("setImgURL", this.url);
      this.$store.commit("setNavState", 2);
      this.navNum = 2;
      this.step = 1;
      this.$router.push('/regist')
    },
    moveReels() {
      this.navNum = 3;
      this.$store.commit("setNavState", 3);
      this.$router.push('/reels')
    },
    moveProfile() {
      this.navNum = 4;
      this.$store.commit("setNavState", 4);
      this.$router.push('/profile')
    },
  },

}
</script>

<style scoped>
.my-profile {
  width: 40px !important;
  height: 40px !important;
  padding: 0px !important;
  border-radius: 50%;
}

.my-profile2 {
  width: 40px !important;
  height: 40px !important;
  padding: 4px !important;
  border-radius: 50%;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

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
  margin-right: 5%;
  margin-left: 5%;
}
.icon-select {
  padding: 1px;
  width : 35px;
  margin-right: 5%;
  margin-left: 5%;
}

.inputfile {
  display: none;
}

.first {
  margin-left: 6%;
}
</style>