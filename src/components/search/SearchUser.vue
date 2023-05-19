<template>
  <Header />
  <div class="content">
    <div class="input-group mb-4 mt-2 input-search">
      <input type="text" class="form-control" placeholder="🔍 검색">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
    <div class="userList">
      <div v-for="(user, index) in userList" :key="index">
        <SearchUserComp :user="user"/>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import SearchUserComp from './SearchUserComp.vue';
import Header from '../common/Header.vue'
import { mapState } from 'vuex';

export default {
  components: {
    Header,
    SearchUserComp,
  },
  computed: {
    ...mapState(['userList'])
  },
  created() {
    this.$store.dispatch("getUserList")
  }
}
</script>

<style scoped>
.content {
  margin-left: 10px;
  margin-right: 10px;
}

</style>