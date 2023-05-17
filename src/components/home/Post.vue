<template>
  <div class="post">
    <div class="post-header">
      <!-- <div class="profile" :style="{ backgroundImage : `url(https://placeimg.com/100/100/people)` }"></div> -->
      <img class="profile" src="../../icon/dummyprofile.jpg"/>
      <span class="profile-name">{{this.name}}</span>
    </div>
    <!-- <div class="post-body" :style="{ backgroundImage : `url(https://placeimg.com/400/500/arch)` }"></div> -->
      <img class="post-body" src="../../icon/dummypost.jpg"/>
    <div class="post-content">

      <img v-if="this.isLike" class="post-icon" src="../../icon/up.png" @click="like">
      <img v-else class="post-icon" src="../../icon/no_up.png" @click="like">

      <img class="post-icon-comment" src="../../icon/comment.png" @click="showComment">
      <img class="post-icon" src="../../icon/dm.png" @click="showDM">

      <img v-if="this.isBookMark" class="col-icon" src="../../icon/collectionBorder.png" @click="bookMark">
      <img v-else class="col-icon" src="../../icon/collection.png" @click="bookMark">

      <p class="likes">좋아요 {{ this.likes }}개</p>
      <p class="name">{{ this.name }} &nbsp; #Boxing #미추홀 복싱 클럽</p>
      <!-- <p class="date">May 15</p> -->
      <p class="date">댓글 {{ commentCount }}개 모두 보기</p>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      name : "CheeseCake",
      likes: 342,
      isLike: false,
      isBookMark: false,
      commentCount:542,
    }
  },
  props: {
    info: Object,
    index: Number,
  },
  methods: {
    showComment() {
      console.log('showComment')
    },
    showDM() {
      console.log('showDM')
    },
    like() {
      if (!this.isLike) {
        this.likes++
      } else {
        this.likes--
      }
      this.isLike = !this.isLike
    },
    bookMark() {
      this.isBookMark = !this.isBookMark
    },
  }
}
</script>

<style scope>
.col-icon {
  padding: 3px;
  width : 27px;
  margin-top: 2%;
  margin-left: 65%;
}
.name {
  font-weight: bolder;
}
.likes {
  margin-top: 2%;
  font-weight: bolder;
}
.post-icon-comment {
  padding: 3px;
  width : 27px;
  margin-top: 2%;
  margin-right: 2%;
  margin-left: 0%;
}
.post-icon {
  padding: 3px;
  width : 28px;
  margin-top: 2.2%;
  margin-right: 2%;
  margin-left: 0%;
}
.post {
  width: 100%;
}
.profile {
  /* background-image: url("https://placeimg.com/100/100/arch"); */
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  overflow: hidden;
  float: left;
}
.profile-name {
  font-weight: bolder;
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
  margin-bottom: 4.5%;
}
.post-body {
  /* background-image: url("https://placeimg.com/640/480/animals"); */
  height: 450px;
  /* background-position: center;
  background-size: cover; */

  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>