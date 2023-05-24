<template>
  <nav class="navbar bg-body-tertiary header">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../icon/title_logo.png" alt="Logo" height="40" class="d-inline-block align-text-top logo-title">
        <img class="icon left" src="../../icon/up.png" @click="likePostList">
        <img class="icon" src="../../icon/menu.png" @click="logout">
      </a>
    </div>
  </nav>
</template>

<script>
import swal from 'sweetalert';

export default {
  methods: {
    logout() {
      swal({
        text: "로그아웃 하시겠습니까?",
        buttons: ["취소", "확인"]
      })
      .then((result) => {
        // 로그아웃
        if (result) {
          sessionStorage.removeItem("loginUser")
          this.$router.push('/enter')
          this.$toast.success(`로그아웃 되었습니다.`, { position:"top",duration:2000 });
        } 
      });
    },
    likePostList() {
      console.log(123)
    }
  }
}
</script>

<style scoped>

.header {
  z-index: 99;
  width: 100%;
  height: 60px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky !important;
  top: 0;
}
.left {
  margin-left: 88%;
}
.icon {
  padding: 3px;
  width : 35px;
  margin-right: 6%;
}
</style>