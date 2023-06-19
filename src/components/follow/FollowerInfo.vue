<template>
  <Header />
    <div class="title-container">
      <img class="icon-cross" src="../../icon/back.png" @click="back">
      <p class="username">{{ this.name }} 님의 팔로워</p>
    </div>
    <div v-for="(user, index) in followInfo" :key="index">
      <FollowUserComp :user="user" :index="index"/>
    </div>
  <Navbar/>
  <br>
  <br>
  
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'
import FollowUserComp from './FollowUserComp.vue';

export default {
  data() {
    return{
      name:""
    }
  },
  components: {
    Header,
    FollowUserComp,
    Navbar,
  },
  computed: {
    ...mapState(['loginUser']),
    ...mapState(['followInfo']),
    ...mapState(['targetUserName'])
  },
  created() {
    this.$store.dispatch('getFollowingList', this.$route.params.id)
    const url = process.env.VUE_APP_API_URL + 'api/enter/' + this.$route.params.id;
    axios.get(url)
    .then((result) =>{
      this.name = result.data;
    })
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.title-container{
  display: flex;
  margin-bottom: 3%;
}
.icon-cross {
  margin-top: 0%;
  margin-left: 2%;
  padding: 5px;
  width : 35px;
  height: 35px;
}

.username{
  margin-left: 2%;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0px;
}
</style>