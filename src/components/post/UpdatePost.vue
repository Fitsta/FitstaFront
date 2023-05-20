<template>
  <Header />
  <!-- 필터 선택 페이지 -->
  <div :class="updatePost.filter + ' upload-image'" :style="{ backgroundImage : `url(${updatePost.imgName})` }"></div>
  <div class="filters">

  <div @click="fire(filter)" :class="filter + ' filter-item'" :style="`background-image:url(${updatePost.imgName})`" v-for="filter in filterList" :key="filter">
    <div class="filter-name">
      <p>{{ filter }}</p>
    </div>
  </div>
  </div>
  <div class="container mt-2 comment">
    <div class="publish">
      <h4>Comment</h4>
      <button type="button" class="btn btn-sm btn-outline-info publish-btn"
        @click="publish">글 수정</button>
    </div>
    <textarea class="form-control" rows="10" v-model="this.updatePost.comment">
    </textarea>
  </div>
  <!-- {{updatePost}}
  <br> -->
  <br>
  <br>
  <br>
  <Navbar/>
</template>

<script>
import { mapState } from 'vuex';
import Header from '../common/Header.vue'
import Navbar from '../common/Navbar.vue'

export default {
  components: {
    Header,
    Navbar,
  },
  data() {
    return {
      filterList: ["","inkwell", "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
               "lark", "lofi", "mayfair", "moon", "nashville",
              "reyes", "rise", "slumber", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  computed: {
    ...mapState(['updatePost'])
  },
  methods: {
    publish() {
      console.log(this.comment)
      this.$router.push('/')
    },
    fire(event) {
      this.updatePost.filter = event
    }
  },
  unmounted() {
    this.$router.go(0);
  },
};
</script>

<style scoped>
.publish-btn {
  margin-left: 58.5%;
  margin-bottom: 10px;
  color: #8974fc;
  border-color: #8974fc;
  font-weight: bolder;
}

.publish {
  display: flex;
}

.comment {
  margin-bottom: 17% !important;
}

.filter-name {
  color: black;
  position:fixed;
  bottom: -15%;
  margin-bottom: 100% !important;
}

.upload-image {
  z-index: -1;
  width: 100%;
  height: 300px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
.filter-item {
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
  margin: 33px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>