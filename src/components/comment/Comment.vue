<template>
  <Header />
  {{ this.$route.params.id }}번 post 댓글 상세 보기 페이지
  
  <Navbar />
</template>

<script>
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'

export default {
  components: {
    Header,
    Navbar,
  },
}
</script>

<style>

</style>