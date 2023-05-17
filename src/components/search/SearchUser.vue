<template>
  <div class="content">
    <div class="input-group mb-4 mt-2">
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

<style scope>
.follow {
  height: 40px;
  margin-left: 40%;
}
.name {
  font-weight: bolder;  
  color: rgb(122, 121, 121);
}

.container {
  display: flex;
}

.id {
  font-weight: bolder;
}

.content {
  margin-left: 10px;
  margin-right: 10px;
}

.user-image {
  width: 50px;
  height: 50px;
  min-width:32px;
  border-radius: 50%;
  overflow:hidden;
  margin-right: 10px;
}
</style>