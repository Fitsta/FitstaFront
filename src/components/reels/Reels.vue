<template>
  <Header />
  <!-- <iframe src="https://www.youtube.com/embed/Rrf8uQFvICE" width="412px" height=800px title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> -->
<!-- </iframe> -->
  <video muted autoplay loop controls class="video-box">
    <source src="../../icon/sample2.mp4" type="video/mp4">
    <strong>Your browser does not support the video tag.</strong>
  </video>
  <div class="video-text">
    <!-- <p>다음 영상</p> -->
    <p><button type="button" class="btn btn-sm btn-outline-success profile-btn" @click="next">next</button></p>
  </div>
  <!-- <video src="../../icon/sample.mp4" class="video" controls autoplay loop></video> -->
  <!-- <video :src="'../../icon/' + this.sample" controls class="video" autoplay /> -->
  <!-- <button type="button" class="btn btn-info profile-btn" @click="next">다음영상</button> -->
  <!-- <img src="C:/Users/jimmy/Desktop/Fitstagram/front/fitstagram/src/icon/icon.png"/> -->
  <!-- {{this.sample}} -->
</template>

<script>
import Header from '../common/Header.vue'

export default {
  components: {
    Header,
  },
  data() {
    return {
      // sample:"sample2.mp4",
      sample:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdwDEYRPat47IaYdO719kyxDBPCxMEfgIZGEEfreNVg&s",
      // sample:"C:/Users/jimmy/Desktop/Fitstagram/front/fitstagram/src/icon/icon.png",
      // ../../icon/icon.png
      // sample2:"../../icon/sample2.mp4",
    }
  },
  methods : {
    next() {
      this.sample = "sample.mp4"
      console.log("next")
    }
  }
}
</script>

<style scoped>
.video-box {
   width:412px;
   height:800px;
}
.video-text {
  color: aliceblue;
  position: fixed;
  top: 6.6%;
  margin-left: 88%;
  width: 100%; 
}
</style>