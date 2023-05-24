<template>
  <img src="../../icon/title_logo.png" class="d-inline-block align-text-top logo-title">
  <div class="input-item box">
    <div class="mb-3 mt-4 login">
      <input type="text" class="form-control login-comp" v-model="this.id" placeholder="사용자 이름 또는 이메일">
    </div>
    <div class="mb-3 mt-4 login">
      <input type="password" class="form-control login-comp" v-model="this.pw" placeholder="비밀번호">
    </div>
    <div class="mb-3 mt-4 login">
      <input type="password" class="form-control login-comp" v-model="this.pwCheck" placeholder="비밀번호 확인">
    </div>
    <button class="btn btn-primary login-btn" type="button" @click="enter">회원가입</button>  
  </div>
  <hr class="box line">
  <div class="or">
    또는
  </div>
  <img class="kakao" src="../../icon/kakao.jpg" @click="kakaoLogin">
  <div class="foot">
    <div class="up">이미 계정이 있으신가요?</div>
    <div class="down" @click="login">로그인하기</div>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return{
      id:"",
      pw:"",
      pwCheck:"",
    }
  },
  methods: {
    kakaoLogin(){
      axios.get(process.env.VUE_APP_API_URL + 'login')
      .then((response) => {
        // console.log(response.data)
        // console.warn("warn : " + response);
        window.location.href = response.data;
      })
    },
    login() {
      this.$router.push('/login');       
    },
    enter() {
      const url = process.env.VUE_APP_API_URL + 'api/enter/';
      const data = {
        name : this.id,
        email : this.id,
        password: this.pw,
        nickname: this.id,
        profileImg: "https://fitsta-bucket.s3.ap-northeast-2.amazonaws.com/d54eac16-4c55-4137-ae1c-1a0b759cfdf6-color.png",
      }
      const config = {"Content-Type": 'application/json'};
      axios.post(url, data, config)
      .then(() => {
        this.$toast.success(`회원 가입 성공`, { position:"top",duration:2000 });
        this.$router.push('/login');
      })
      .catch(() => {
        this.$toast.error(`중복된 아이디 입니다.`, { position:"top",duration:2000 });
      })
    },
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
  margin-left: 17%;
  font-weight: bold;
  color: rgb(124, 122, 122);
}
.foot {
  margin-top: 53%;
  background-color: white;
  display: flex;
}
.kakao {
  height: 55px;
  margin-top: 2%;
  margin-left: 16%;
  border-radius: 13px;
}
.or {
  font-weight:600;
  color: darkgrey;
  position: absolute;
  left: 44%;
  top: 62.4%;
  background-color: white;
  width: 50px;
  text-align: center;
}
.line {
  margin-top: 9%;
  margin-left: 5%;
}
.find-pw {
  font-weight: bolder;
  color: #8974fc;
  margin-top: 6%;
  margin-left: 53%;
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
  margin-top: 40%;
  margin-left: 22%;
  display: block;
  height: 70px;
}
</style>