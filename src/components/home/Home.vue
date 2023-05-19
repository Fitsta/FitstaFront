<template>
  <Post/>
  <Post/>
  {{postList}}
  <br><br>
</template>

<script>
import Post from '../home/Post.vue'
import { mapState } from 'vuex';

export default {
  components: {
    Post
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