<template>
  <Header />
  <div v-for="(post, index) in userPostList" :key="index">
    <Post :post="post"/>
  </div>
  <Navbar/>
  <br><br>
</template>

<script>
import Post from '../home/Post.vue'
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import { mapState } from 'vuex';

export default {
  components: {
    Header,
    Post,
    Navbar,
  },
  computed: {
    ...mapState(['userPostList'])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('getUserPostList', id);
  },
}
</script>

<style>

</style>