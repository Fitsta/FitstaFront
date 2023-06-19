<template>
  <img src="../../icon/title_logo.png" class="d-inline-block align-text-top logo-title">
  <div class="input-item box">
    <div class="mb-3 mt-4 login">
      <input type="text" class="form-control login-comp" placeholder="전화번호, 사용자 이름 또는 이메일" v-model="this.email">
    </div>
    <div class="mb-3 mt-4 login">
      <input type="password" class="form-control login-comp" placeholder="비밀번호" v-model="this.password">
    </div>
    <div class="find-pw">비밀번호를 잊으셨나요?</div>
    <button class="btn btn-primary login-btn" type="button" @click="login">로그인</button>  
  </div>
  <hr class="box line">
  <!-- <div class="or">
    또는
  </div> -->
  <img class="kakao" src="../../icon/kakao.jpg" @click="kakaoLogin">
  <div class="foot">
    <div class="up">계정이 없으신가요?</div>
    <div class="down" @click="enter">가입하기</div>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return{
      email:"",
      password:"",
    }
  },
  methods: {
    async kakaoLogin(){
      await axios.get(process.env.VUE_APP_API_URL + 'login')
      .then((response) => {
        console.log(response.data)
        window.location.href = response.data;
      })
      this.$router.replace('/')
    },
    enter() {
      this.$router.push('/enter');
    },
    login() {
      const url = process.env.VUE_APP_API_URL + 'api/local/';
      const data = {
        email: this.email,
        password: this.password,
      }
      const config = {"Content-Type": 'application/json'};
      axios.post(url, data, config)
      .then((result) => {
        this.$toast.success(`로그인 성공`, { position:"top",duration:2000 });
        this.$store.commit('setLoginUser', result.data)
        const loginData = JSON.stringify(result.data);
        sessionStorage.setItem("loginUser", loginData)
        // console.log(result.data)
        this.$router.push('/main');
      })
      .catch(() => {
        this.$toast.error(`로그인에 실패했습니다`, { position:"top",duration:2000 });
      })
    }
  },
}
</script>

<style scoped>
.down {
  margin-left: 10px;
  font-weight: bold;
  color: #8974fc;
}
.up {
  font-weight: bold;
  color: rgb(124, 122, 122);
}
.foot {
  margin-top: 44%;
  background-color: white;
  display: flex;
  justify-content: center;
}
.kakao {
  height: 55px;
  margin: auto;
  display: block;
  border-radius: 13px;
}
.or {
  font-weight:600;
  color: darkgrey;
  position: absolute;
  left: 44%;
  top: 57.1%;
  background-color: white;
  width: 50px;
  text-align: center;
}
.line {
  margin-bottom: 8%;
  margin-top: 9%;
  margin-left: 5%;
}
.find-pw {
  /* width: 100%; */
  font-weight: bolder;
  color: #8974fc;
  margin-top: 6%;
  margin-left: 55%;
}

.login-btn {
  width: 100%;
  margin-top: 5%;
  margin-left: 5.5%;
  border-color: #a99df0;
  background-color: #a99df0;
}

.login-comp {
  height: 50px;
  width:105.8%
}

.login {
  margin-left: 5.2%;
}

.box {
  width: 90%;
}

.logo-title {
  margin-top: 20%;
  margin-left: 22%;
  display: block;
  height: 70px;
}
</style>