<template>
  <Header />
  <div class="container">
    <img class="icon-cross" src="../../icon/back.png" @click="back">
    <img class="icon-check" src="../../icon/check.png" @click="update">
  </div>
  <img class="user-image" :src="`${loginUser.profileImg}`" alt="프로필사진">
  <br>
  <div class="box">
    <input @change="upload" type="file" id="my-input" class="inputfile" />
    <button type="button" class="btn btn-sm btn-outline publish-btn" @click="updatePicture">프로필 사진 수정</button>
  </div>
  <div class="input-item">
    <div class="mb-3 mt-4">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input type="text" class="form-control" v-model="loginUser.name">
    </div>
    <div class="mb-3 mt-4">
      <label for="exampleFormControlInput1" class="form-label">Nickname</label>
      <input type="text" class="form-control" v-model="loginUser.nickname">
    </div>
  </div>
  <p class="input-item setting">개인정보 설정</p>
  <Navbar/>
</template>

<script>
import { mapState } from 'vuex';
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import axios from 'axios'

export default {
  data() {
    return{
      imgFile:"1"
    }
  },
  components: {
    Header,
    Navbar,
  },
  computed: {
    ...mapState(['loginUser'])
  },
  created() {
    this.$store.commit("setNavState", 4)
  },
  methods: {
    updatePicture() {
      let myInput = document.getElementById("my-input");
      myInput.click();
    },
    back() {
      this.$router.go(-1)
    },
    async update() {
      let form = new FormData();
      let url;
      form.append("images", this.imgFile);
      form.append("email", this.loginUser.email);
      form.append("password", this.loginUser.id);
      form.append("name", this.loginUser.name);
      form.append("nickname", this.loginUser.nickname);
      if (this.imgFile === "1") {
        url = process.env.VUE_APP_API_URL + "update/profile2";
      } else {
        url = process.env.VUE_APP_API_URL + "update/profile";
      }
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      await axios.post(url, form, config)
      .then((response) => {
        console.log(response.data)
        const newUserInfo = response.data;
        let loginUser = JSON.parse(sessionStorage.getItem("loginUser"))
        loginUser.name = newUserInfo.name;
        loginUser.nickname = newUserInfo.nickname;
        if (this.imgFile !== "1") {
          loginUser.profileImg = newUserInfo.profileImg;
        }
        sessionStorage.setItem("loginUser", JSON.stringify(loginUser));
        this.$store.commit('setLoginUser', loginUser);
      })
      this.$toast.success(`프로필이 수정되었습니다.`, { position:"top",duration:2000 });

      this.$router.push('/profile');
    },
    upload(e) {
      let file = e.target.files[0];
      try {
        this.url = URL.createObjectURL(file); 
      } catch (error) {
        console.log(error)
      }
      this.loginUser.profileImg = this.url;
      this.imgFile = file; 
      this.$store.commit("setUpdateProfileImg", file);
    },
  }
}
</script>

<style scoped>
.inputfile {
  display: none;
  /* visibility: hidden; */
}
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
}
.icon-check {
  margin-top: 0%;
  margin-left: 77.5%;
  padding: 5px;
  width : 55px;
  height: 45px;
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