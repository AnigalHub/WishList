<template>
  <div id="app">
    <img src="https://i.gifer.com/6nr.gif" id="heart">
    <h1>My WishList</h1>
    <navbar/>
    <div id="content">
    <b-container>
        <router-view></router-view>
    </b-container>
    </div>

  </div>
</template>

<script>


import Navbar from "@/components/navbar";
import CreateWishlist from "@/components/createWishlist";
import Account from "@/components/account";
import Wishlists from "@/components/wishlists";
export default {
  name: 'App',
  components: {Wishlists, Account, CreateWishlist, Navbar}
}
</script>

<style lang="scss">
  #app{
    height: 100%;
    min-height: 90vh;
    padding-top: 1%;
  }
  h2{
      font-size: 2rem !important;
      font-weight: 500;
  }
  #createWishlist, #wishlists, #account{
    padding: 3%;
    min-height: 75vh;
    height: 100%;
    background: white;
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.35);
  }
  #content{
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
  #heart{
    height: 40px;
    width: 40px;
    display: block;
    margin: 0 auto;
  }
</style>
