<template>
  <div class="box">
    <img class="profile" :src="`${this.comment.profileImg}`"/>
    <div class="content">
      <div class="box">
        <p class="name">{{this.comment.nickname}}</p>
        <p class="date2">{{this.comment.date}}</p>
      </div>
    <p class="content2">{{this.comment.comment}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment:Object,
  },
}
</script>

<style scoped>
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
  margin-top: 2%;
  font-weight: bolder;
  font-size: 14px;
}
.comment-title {
  font-weight: bolder;
  font-size: 20px;
  margin-left: 3.7%;
}

.box {
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