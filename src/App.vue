<template>
  <router-view/>
  <Navbar/>
</template>

<script>
import Navbar from './components/common/Navbar.vue'

export default {
  name: 'App',
  components : {
    Navbar
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
  /* border-right: 1px solid #eee; */
  /* border-left: 1px solid #eee; */
}
</style>
