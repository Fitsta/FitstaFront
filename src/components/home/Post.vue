<template>
  <div class="post">
    <div class="post-header">
      <!-- profileImg -->
      <img class="profile" :src="`${ post.profileImg }`"/>
      <!-- userName -->
      <span class="profile-name" @click="detail(post.writerId)">{{ post.userName }}</span>
    </div>
    <!-- postImg -->
    <div :class="post.filterName + ' post-body'" :style="{ backgroundImage : `url(${post.img})` }"></div>
    <!-- <img :class="post.filter + ' post-body'" :src="`${ post.postImg }`" /> -->
    <div class="post-content">
      <!-- 좋아요 -->
      <img v-if="post.like" class="post-icon" src="../../icon/up.png" @click="disLikeClick">
      <img v-else class="post-icon" src="../../icon/no_up.png" @click="likeClick">
      <!-- 댓글 -->
      <img class="post-icon-comment" src="../../icon/comment.png" @click="showComment(post.postId)">
      <!-- DM -->
      <img class="post-icon" src="../../icon/dm.png" @click="showDM">
      <!-- 수정, 삭제 드랍다운 -->
      <img v-if="post.writerId == this.$store.state.loginUser.id"
        class="col-icon dropdown-toggle" src="../../icon/menu.png" data-bs-toggle="dropdown" aria-expanded="false">
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" @click="updatePost">수정</a></li>
        <li><a class="dropdown-item" @click="deletePost">삭제</a></li>
      </ul>
      <!-- ... 버튼 누르면 수정 삭제 -->
      <!-- post info -->
      <p class="likes">좋아요 {{ post.likeCount }}개</p>
      <p class="name" @click="detail(post.writerId)" >{{ post.userName }}</p>
      <p class="name" @click="showComment(post.postId)">{{ post.postComment }}</p>
      <p class="date" @click="showComment(post.postId)">댓글 {{ post.commentCount }}개 모두 보기</p>
    </div>
  </div> 
</template>

<script>
import swal from 'sweetalert';

export default {
  props: {
    post: Object,
    index: Number,
    type: String,
  },
  methods: {
    showComment(postId) {
      this.$router.push('/comment/' + postId)
      // console.log(postId + ' 댓글창 열기')
    },

    showDM() {
      console.log('DM창 열기')
    },

    likeClick() {
      this.$store.dispatch('getLike', this.post.postId);
      this.$store.commit('setLike', this.index);
    },

    disLikeClick() {
      if (this.type === 'like') {
        this.$store.dispatch('getDislikeLikeList', this.post.postId);

      }
      this.$store.dispatch('getDislike', this.post.postId);
      this.$store.commit('setDislike', this.index);
    },

    updatePost() {
      this.$router.push('/update/' + this.post.postId)
    },

    deletePost() {
      swal({
        text: "정말로 삭제하시겠습니까?",
        buttons: ["취소", "삭제"]
      })
      .then((willDelete) => {
        // 삭제
        if (willDelete) {
          if (this.type === 'home') {
            this.$store.dispatch('deletePoatHome', this.post.postId);
          } else {
            this.$store.dispatch('deletePoatUser', this.post.postId);
          }
          this.$toast.error(`포스팅이 삭제되었습니다.`, { position:"top",duration:2000 });
        } 
      });
    },
    detail(userId) {
      this.$router.push('/detail/' + userId);
    }
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
  padding-top: 4px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
  margin-bottom: 4.5%;
}
.post-body {
  transform: translate(50, 50);
  height: 400px;
  background: cornflowerblue;
  background-size: cover;
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