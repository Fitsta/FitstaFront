<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  async created() {
    const loginUser = await JSON.parse(sessionStorage.getItem("loginUser"))
    this.$store.commit('setLoginUser', loginUser)
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  box-sizing: border-box;
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
}
</style>
