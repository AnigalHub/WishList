<template>
  <div id="app">
    <img src="https://i.gifer.com/6nr.gif">
    <h1>My WishList</h1>
    <navbar/>
    <div class="content">
    <b-container>
      <!-- <create-wishlist/> -->
       <account/>
    </b-container>
    </div>

  </div>
</template>

<script>


import Navbar from "@/components/navbar";
import CreateWishlist from "@/components/createWishlist";
import Account from "@/components/account";
export default {
  name: 'App',
  components: {Account, CreateWishlist, Navbar}
}
</script>

<style lang="scss">
  #app{
    height: 100%;
    min-height: 90vh;
    padding-top: 1%;
  }
  .content{
    margin-top: .1%;
    padding-top: 1.5%;
    background: rgba(252, 214, 181, 0.3);
    height: 100%;
    min-height: 84vh;
  }
  h1{
    text-align: center;
    font-size: 3rem !important;
    font-family: 'Roboto Serif', sans-serif;
  }
  img{
    height: 40px;
    width: 40px;
    display: block;
    margin: 0 auto;
  }
</style>
