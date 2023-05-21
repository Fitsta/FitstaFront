<template>
  <img src="../../icon/title_logo.png" class="d-inline-block align-text-top logo-title">
  <div class="input-item box">
    <div class="mb-3 mt-4 login">
      <input type="text" class="form-control login-comp" placeholder="전화번호, 사용자 이름 또는 이메일">
    </div>
    <div class="mb-3 mt-4 login">
      <input type="password" class="form-control login-comp" placeholder="비밀번호">
    </div>
    <p class="find-pw">비밀번호를 잊으셨나요?</p>
    <button class="btn btn-primary login-btn" type="button">로그인</button>  
  </div>
  <hr class="box line">
  <div class="or">
    또는
  </div>
  <img class="kakao" src="../../icon/kakao.jpg" height="55px">
  <div class="foot">
    <div class="up">계정이 없으신가요?</div>
    <div class="down">가입하기</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.down {
  margin-left: 10px;
  font-weight: bold;
  color: #8974fc;
}
.up {
  margin-left: 22.2%;
  font-weight: bold;
  color: rgb(124, 122, 122);
}
.foot {
  margin-top: 60%;
  background-color: white;
  display: flex;
}
.kakao {
  margin-top: 2%;
  margin-left: 16%;
  border-radius: 13px;
}
.or {
  font-weight:600;
  color: darkgrey;
  position: absolute;
  left: 44%;
  top: 59.2%;
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