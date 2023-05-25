<template>
  <Header />
  <div class="content">
    <div class="input-group mb-4 mt-2 input-search">
      <input @change="search" type="text" class="form-control" placeholder="🔍 검색" v-model="this.keyword">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search">Search</button>
    </div>
    <div class="userList">
      <div v-for="(user, index) in userList" :key="index">
        <SearchUserComp :user="user" :index="index"/>
      </div>
    </div>
    <br>
    <br>
  </div>
  <Navbar/>

</template>

<script>
import SearchUserComp from './SearchUserComp.vue';
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import { mapState } from 'vuex';

export default {
  data() {
    return {
      keyword:"" 
    }
  },
  watch: {
    keyword: function() {
      if (this.keyword !== "") {
        this.$store.dispatch("getSearchUserList", this.keyword)
      } else {
        this.$store.dispatch("getUserList")
      }
    }
  },
  components: {
    Header,
    SearchUserComp,
    Navbar,
  },
  computed: {
    ...mapState(['userList'])
  },
  created() {
    this.$store.commit("setNavState", 1)
    this.$store.dispatch("getUserList")
  },
  methods: {
    search() {
      this.$store.dispatch("getSearchUserList", this.keyword)
    },
  },
}
</script>

<style scoped>
.content {
  margin-left: 10px;
  margin-right: 10px;
}

</style>