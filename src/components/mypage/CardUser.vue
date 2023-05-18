<template>
  <div class="card recommend-component item" style="width: 8rem; height: 13rem">
    <div class="card-body">
      <img class="user-image2" src="../../icon/me.png" alt="프로필사진">
      <p class="title">민성</p>
      <p class="text">&nbsp;회원님을 위한 추천</p>
      <a class="btn btn-info follow">팔로우</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.user-image2 {
  margin-left: 13%;
  width: 70px;
  height: 70px;
  min-width:32px;
  border-radius: 50%;
  overflow:hidden;
  margin-right: 10px;
}
.follow {
  font-size: 13px;
  height: 19%;
  width: 100%;
  /* margin-left: %; */
}

.title {
  text-align: center;
  font-weight: bolder;
}

.text {
  font-weight: bolder;
  font-size: 6px;
  color: darkgray;
}

.container2 {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.item {
  flex: 0 0 auto;
}

.recommend-component {
  margin-right: 1.5%;
}
</style>