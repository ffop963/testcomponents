<template>
  <div id="app">
<!--    <router-link to="/demo1">1111111111</router-link>-->
<!--    <router-link to="/map">地图</router-link>-->
<!--    <router-view/>-->
    <Login></Login>
  </div>
</template>
<script>
import Login from "@/components/login/Login";
  export default {
    name:'app',
    components:{
      Login
    }
  }
</script>
<style>

</style>
