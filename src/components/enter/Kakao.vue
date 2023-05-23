<template>
  {{ this.$route.params.id }}
</template>

<script>
import axios from 'axios';

export default {
  created() {
    const url = process.env.VUE_APP_API_URL + 'kakao/' +  this.$route.params.id;
    console.log(url)
    axios.get(url)
    .then((result) => {
      const loginData = JSON.stringify(result.data);
      sessionStorage.setItem("loginUser", loginData);
      this.$router.push('/main');
    })
  }
}
</script>

<style>

</style>