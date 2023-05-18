<template>
  <!-- 필터 선택 페이지 -->
  <div :class="curr + ' upload-image'" :style="{ backgroundImage : `url(${imgURL})` }"></div>
  <div class="filters">
    <div @click="fire" :class="filter + ' filter-item'" :style="`background-image:url(${imgURL})`"  v-for="filter in 필터들" :key="filter">
    {{filter}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      curr:"",
      필터들: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
              "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
              "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  props: {
    게시물: Array,
    step: Number,
    url: String,
  },
  computed: {
    ...mapState(['imgURL'])
  },
  methods: {
    fire() {
      console.log()
    }
  }
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
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
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>