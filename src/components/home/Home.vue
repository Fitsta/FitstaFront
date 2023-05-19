<template>
  <Header />
  <div v-for="(post, index) in postList" :key="index">
    <Post :post="post"/>
  </div>
  <br><br>
</template>

<script>
import Post from '../home/Post.vue'
import Header from '../common/Header.vue'
import { mapState } from 'vuex';


export default {
  components: {
    Header,
    Post,
  },
  computed: {
    ...mapState(['postList'])
  },
  created() {
    this.$store.dispatch("getPostList")
  },

}
</script>

<style>

</style>