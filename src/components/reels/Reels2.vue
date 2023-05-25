<template>
  <!-- <Header /> -->
  <div class="bg3">
    <div class="bg">
      <div class="player">
      <iframe class="video-box"
              id=""
              :src="`https://www.youtube.com/embed/${this.videoId[index]}?rel=0`"
              title="[아이유] 근력 운동을 열심히 한다는 아이유"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              />
      </div>
    </div>
  </div>
  <img class="bgc" src="../../icon/black.jpg">
  <button class="btn btn-light next-btn" type="button" @click="next">다음영상</button>  

  <Navbar />
</template>

<script>
import Navbar from '../common/Navbar.vue'
import axios from 'axios';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      index:0,
      videoId:[]
    }
  },
  methods : {
    next() {
      this.index = (this.index + 1) % this.videoId.length;
    }
  },
  created() {
    this.$store.commit("setNavState", 3)
    const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&status=&playlistId=PLgaOBPAy_5i-xlhbulU-BT_1WpdaKIrxS&key=" + process.env.VUE_APP_YOUTUBE_API_KEY;
    axios.get(url)
    .then((result) => {
      let temp = []
      for (let item of result.data.items) {
        temp.push(item.snippet.resourceId.videoId)
        // console.log(item.snippet.resourceId.videoId)
      }
      this.videoId = temp;
    })
  },
}
</script>

<style scoped>
.bgc {
  z-index: -10;
  width: 414px;
  height: 63px;
}
body {
  background-color: black !important;
}
.player{
  background-color: black;
  width: 100%;
  height: 100%;
}
.icon {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
.footer {
  background-color: black;
}
a {
  display: hidden !important;
  visibility: hidden !important;
}
.ytp-title {
  display: hidden !important;
  visibility: hidden !important;
}
.yt-uix-sessionlink{
  display: hidden !important;
  visibility: hidden !important;
}
.ytp-title-text{
  display: hidden !important;
  visibility: hidden !important;
}

.next-btn {
  /* z-index: 999; */
  position: absolute;
  /* width: 150px; */
  /* height: 100px; */
  top: 94%;
  right: 1%;
  font-weight: bold;
  
  border-color: #a99df0;
  background-color: #a99df0;
  opacity: 0.4;
}
.player {
  width: 100%;
  height: 100%;
}
.video-box {
   width:413px;
   height:802px;
}
.video-text {
  color: aliceblue;
  position: fixed;
  top: 6.6%;
  margin-left: 88%;
  width: 100%; 
}

.bg {
  height: 130%;
  background-color: black;
}
</style>