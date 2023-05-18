<template>
  <!-- <iframe src="https://www.youtube.com/embed/Rrf8uQFvICE" width="412px" height=800px title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> -->
<!-- </iframe> -->
  <!-- <video src="../../icon/sample2.mp4" class="video"></video> -->
  <!-- <video :src="'../../icon/' + this.sample" controls class="video" autoplay /> -->
  <button type="button" class="btn btn-info profile-btn" @click="next">다음영상</button>
  <!-- <img src="C:/Users/jimmy/Desktop/Fitstagram/front/fitstagram/src/icon/icon.png"/> -->
  <!-- {{this.sample}} -->
</template>

<script>
export default {
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
    }
  }
}
</script>

<style>
.video {
   width:412px;
   height:732px;
}
</style>