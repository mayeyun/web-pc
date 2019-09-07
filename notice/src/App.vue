<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from  './components/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
@import "./assets/reset.css";
.container{
     margin-top: 10px;
     padding: 20px;
}
</style>
