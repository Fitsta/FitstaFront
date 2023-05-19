<template>
  <div class="post">
    <div class="post-header">
      <!-- profileImg -->
      <img class="profile" :src="`${ post.profileImg }`"/>
      <!-- userName -->
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <!-- postImg -->
    <img class="post-body" :src="`${ post.postImg }`" />
    <div class="post-content">
      <!-- 좋아요 -->
      <img v-if="post.isLike" class="post-icon" src="../../icon/up.png" @click="like">
      <img v-else class="post-icon" src="../../icon/no_up.png" @click="like">
      <!-- 댓글 -->
      <img class="post-icon-comment" src="../../icon/comment.png" @click="showComment">
      <!-- DM -->
      <img class="post-icon" src="../../icon/dm.png" @click="showDM">
      <!-- 북마크 -->
      <!-- <img v-if="this.isBookMark" class="col-icon" src="../../icon/collectionBorder.png" @click="bookMark">
      <img v-else class="col-icon" src="../../icon/collection.png" @click="bookMark"> -->
      <!-- ... 버튼 누르면 수정 삭제 -->

      <!-- post info -->
      <p class="likes">좋아요 {{ post.likeCount }}개</p>
      <p class="name">{{ post.userName }} &nbsp; {{ post.comment }}</p>
      <!-- <p class="date">May 15</p> -->
      <p class="date">댓글 {{ post.commentCount }}개 모두 보기</p>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      // name : "CheeseCake",
      // likes: 342,
      // isLike: false,
      // isBookMark: false,
      // commentCount:542,
    }
  },
  props: {
    post: Object,
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