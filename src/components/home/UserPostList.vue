<template>
  <Header />
  <div v-for="(post, index) in postList" :key="index">
    <Post :post="post" :index="index" :type="`user`"/>
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
    // ...mapState(['userPostList'])
    ...mapState(['postList'])
  },
  created() {
    const id = this.$route.params.id;
    // this.$store.dispatch('getUserPostList', id);
    this.$store.dispatch('getUserPostList', id);
  },
}
</script>

<style>

</style>