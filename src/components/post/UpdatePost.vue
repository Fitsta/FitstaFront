<template>
  <Header />
  <!-- 필터 선택 페이지 -->
  <div :class="updatePost.filterName + ' upload-image'" :style="{ backgroundImage : `url(${updatePost.img})` }"></div>
  <div class="filters">
  <div @click="fire(filter)" :class="filter + ' filter-item'" :style="`background-image:url(${updatePost.img})`" v-for="filter in filterList" :key="filter">
    <div class="filter-name">
      <p>{{ filter }}</p>
    </div>
  </div>
  </div>
  <div class="container mt-2 comment">
    <div class="publish">
      <h4>Comment</h4>
      <input @change="upload" type="file" id="my-input" class="inputfile" />
      <button class="btn btn-sm btn-outline-light publish-btn first" @click="onClickUpload">사진 수정</button>
      <button class="btn btn-sm btn-outline-info publish-btn second" @click="publish">수정 완료</button>
    </div>
    <textarea class="form-control" rows="10" v-model="updatePost.postComment">
    </textarea>
  </div>
  <br>
  <br>
  <br>
  <Navbar/>
</template>

<script>
import axios from 'axios'
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
  methods: {
    onClickUpload() {
      let myInput = document.getElementById("my-input");
      myInput.click();
    },
    upload(e) {
      let file = e.target.files[0];
      try {
        this.url = URL.createObjectURL(file); 
      } catch (error) {
        console.log(error)
      }
      this.updatePost.img = this.url;
      this.$store.commit("setPostImageFile", file);
      this.$store.commit("setImgURL", this.url);
    },
    async publish() {
      let form = new FormData();
      const photoFile = this.$store.state.postImageFile;
      form.append("images", photoFile);
      form.append("userId", this.$store.state.loginUser.id);
      form.append("postId", this.$route.params.id);
      form.append("postComment", this.updatePost.postComment);
      form.append("filterName", this.updatePost.filterName);
      
      const url = process.env.VUE_APP_API_URL + "upload/update";
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      await axios.post(url, form, config)
      .then((response) => {
        response
        // console.log(response)
      })
      this.$toast.success(`포스팅이 수정되었습니다.`, { position:"top",duration:2000 });
      this.$router.push('/detail/' + this.$store.state.loginUser.id);
    },
    fire(event) {
      this.updatePost.filterName = event
    }
  },
  computed: {
    ...mapState(['updatePost'])
  },
  unmounted() {
    this.$router.go(0);
  },
  created() {
    this.$store.dispatch('getUpdatePost', this.$route.params.id);
  }
};
</script>

<style scoped>
.first {
  margin-left: 32.5%;
}
.second {
  margin-left: 2%;
}
.icon-select {
  padding: 1px;
  width : 35px;
  margin-right: 5.5%;
  margin-left: 5.5%;
}

.inputfile {
  display: none;
  /* visibility: hidden; */
}

.publish-btn {
  /* margin-left: 58.5%; */
  /* margin: auto; */
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
  height: 400px;
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