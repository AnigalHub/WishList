<template>
  <div id="app">
    <img src="https://i.gifer.com/6nr.gif">
    <h1>My WishList</h1>
    <navbar/>
    <b-container>


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
    padding-top: 1%;
  }
  h1{
    text-align: center;
    font-size: 3.5rem !important;
    font-family: 'Roboto Serif', sans-serif;
  }
  img{
    height: 50px;
    width: 50px;
    display: block;
    margin: 0 auto;
  }
</style>
