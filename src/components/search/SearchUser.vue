<template>
  <div class="content">
    <div class="input-group mb-4 mt-2 input-search">
      <input type="text" class="form-control" placeholder="🔍 검색">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
    <SearchUserComp/>
  </div>
</template>

<script>
import SearchUserComp from './SearchUserComp.vue';
export default {
  components: {
    SearchUserComp,
  },
}
</script>

<style scoped>
.input-search{
  z-index: -1;
}
.content {
  margin-left: 10px;
  margin-right: 10px;
}

</style>