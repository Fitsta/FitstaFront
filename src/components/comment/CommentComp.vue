<template>
  <div class="box">
    <img class="profile" :src="`${this.comment.profileImg}`"/>
    <div class="content">
      <div class="box">
        <p class="name">{{this.comment.nickname}}</p>
        <p class="date2">{{this.comment.date}}</p>
        <button v-if="comment.userId == this.$store.state.loginUser.id" @click="deleteComment" type="button" class="btn btn-sm publish-btn">삭제</button>
      </div>

    <p class="content2">{{this.comment.comment}}</p>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  props: {
    comment: Object,
  },
  methods: {
    deleteComment() {
      const info = {
        commentId: this.comment.commentId,
        postId: this.$route.params.id
      }
      swal({
        text: "정말로 삭제하시겠습니까?",
        buttons: ["취소", "삭제"]
      })
      .then((willDelete) => {
        if (willDelete) {
          this.$store.dispatch('deleteComment', info);
          this.$toast.error(`댓글이 삭제되었습니다.`, { position:"top",duration:2000 });
        }
      })

    
    }
  }
}
</script>

<style scoped>
.publish-btn {
  margin-left: auto;
  /* margin-bottom: 10px; */
  margin-top: 0.8%;
  color: #8974fc;
  border-color: #8974fc;
  font-weight: bolder;
  font-size: 10px;
}
.date2 {
  margin-left: 3%;
  margin-top: 0.9%;
  color: rgb(110, 108, 108);
  font-size: 14px;
  font-weight: bolder !important;
}
p {
  margin-bottom: 0px;
}
.content {
  margin-left: 3%;
  width: 75%;
}
.content2 {
  margin-top: 2.2%;
  font-weight: bolder;
  font-size: 14px;
}
.comment-title {
  font-weight: bolder;
  font-size: 20px;
  margin-left: 3.7%;
}

.box {

  justify-content: flex-start;
  display: flex;
  margin-bottom: 3%;
}

.profile {
  /* background-image: url("https://placeimg.com/100/100/arch"); */
  width: 45px;
  height: 45px;
  background-size: 100%;
  border-radius: 50%;
  margin-top: 1%;
  overflow: hidden;
  float: left;
  margin-left: 4%;
}
</style>