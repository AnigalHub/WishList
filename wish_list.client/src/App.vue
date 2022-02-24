<template>
  <div id="app">
    <navbar/>
    <b-container>

      <h1>My WishList</h1>
    </b-container>

  </div>
</template>

<script>


import Navbar from "@/components/navbar";
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style lang="scss">
  #app{
    height: 100%;
    min-height: 100vh;
  }
  body{
    margin: 0 !important;
    padding: 0 !important;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
