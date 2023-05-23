<template>
  <!-- <Header /> -->
  <iframe class="video-box"
          id=""
          :src="`https://www.youtube.com/embed/vWD48Q8YKc4?autoplay=1`"
          title="[아이유] 근력 운동을 열심히 한다는 아이유"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
  <div id="player">
  </div>
  <Navbar />
</template>

<script>
// import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'

export default {
  components: {
    // Header,
    Navbar,
  },
  data() {
    return {
      sample:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdwDEYRPat47IaYdO719kyxDBPCxMEfgIZGEEfreNVg&s",
      videoId:"vWD48Q8YKc4"
    }
  },
  methods : {
    next() {
      this.sample = "sample.mp4"
      console.log("next")
    }
  },
  created() {
    this.$store.commit("setNavState", 3)
  },
}
</script>

<style scoped>
.video-box {
   width:412px;
   height:860px;
}
.video-text {
  color: aliceblue;
  position: fixed;
  top: 6.6%;
  margin-left: 88%;
  width: 100%; 
}
</style>