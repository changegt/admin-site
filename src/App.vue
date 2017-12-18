<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app,.el-container{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.com_bg{
  background: rgb(84, 92, 100);
}
.el-container{
  height: 100vh;
}
.el-aside{
  width: 200px!important;
}
.el-main{
  position: relative;
  z-index: 1;
  padding-left: 65px;
}
</style>
