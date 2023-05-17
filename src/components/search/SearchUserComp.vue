<template>
  <div class="container mb-4">
    <img class="user-image" src="../../icon/dummyprofile.jpg" alt="프로필사진">
    <div>
      <div class="id">CheeseRoll</div>
      <div class="name">Cake</div>
    </div>
    <button type="button" class="btn btn-primary follow mt-1">follow</button>
  </div>
</template>

<script>

export default {
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
</style>