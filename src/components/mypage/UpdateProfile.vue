<template>
  <Header />
  <div class="container">
    <img class="icon-cross" src="../../icon/back.png" @click="back">
    <img class="icon-check" src="../../icon/check.png" @click="update">
  </div>
  <img class="user-image" :src="`${updateMyProfile.profileImg}`" alt="프로필사진">
  <br>
  <div class="box">
    <button type="button" class="btn btn-sm btn-outline publish-btn" @click="updatePicture">프로필 사진 수정</button>
  </div>
  <div class="input-item">
    <div class="mb-3 mt-4">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input type="text" class="form-control" v-model="updateMyProfile.name">
    </div>
    <div class="mb-3 mt-4">
      <label for="exampleFormControlInput1" class="form-label">Nickname</label>
      <input type="text" class="form-control" v-model="updateMyProfile.nickName">
    </div>
  </div>
  <p class="input-item setting">개인정보 설정</p>
  <Navbar/>
</template>

<script>
import { mapState } from 'vuex';
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'

export default {
  components: {
    Header,
    Navbar,
  },
  computed: {
    ...mapState(['updateMyProfile'])
  },
  created() {
    this.$store.dispatch("getUpdateProfile")
  },
  methods: {
    updatePicture() {
      console.log(123)
    },
    back() {
      this.$router.go(-1)
    },
    update() {
      console.log(123)
    }
  }
}
</script>

<style scoped>
.setting {
  font-weight: bolder;
  color: #8974fc;
}
.input-item{
  width: 95%;
  margin: auto;
  display: block;
}
.title {
  margin-top: 4%;
  color: blueviolet;
}
.container {
  display: flex;
}
.user-image {
  margin-top: 3%;
  margin-left: 29.3%;
  width: 170px;
  height: 170px;
  min-width:32px;
  border-radius: 50%;
  overflow:hidden;
  margin-right: 10px;
}
.icon-cross {
  margin-top: 1%;
  margin-left: 0%;
  padding: 5px;
  width : 35px;
  height: 35px;
  /* margin-left: 23%; */
  /* margin-right: 14%; */
}
.icon-check {
  margin-top: -1.9%;
  margin-left: 77.5%;
  padding: 5px;
  width : 55px;
  height: 55px;
}
.publish-btn {
  margin: auto;
  display: block;
  margin-top: 3%;
  color: #8974fc;
  border-color: #8974fc;
  font-weight: bolder;
  background-color: white
}
.box{
  margin: auto;
}
</style>