<template>
  <nav class="navbar bg-body-tertiary header">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../icon/title_logo.png" alt="Logo" height="40" class="d-inline-block align-text-top logo-title">
        <img class="icon left" src="../../icon/no_up.png">
        <img class="icon" src="../../icon/dm.png">
      </a>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

.header {
  z-index: 99;
  width: 100%;
  height: 60px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky !important;
  top: 0;
}
.left {
  margin-left: 88%;
}
.icon {
  padding: 3px;
  width : 35px;
  margin-right: 6%;
}
</style>