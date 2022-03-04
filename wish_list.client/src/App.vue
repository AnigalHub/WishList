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
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style lang="scss">
  th{
    background: #e9ecef !important;
    text-align: center !important;
  }
  .table > :not(:first-child) {border-top: none !important;}
</style>
<style lang="scss">
  /*Компонент в котором вызываются все другие компоненты*/
  #app{
    height: 100%;
    min-height: 90vh;
    padding-top: 1%;
  }
  /*заголовоки*/
  h1{
    text-align: center;
    font-size: 3rem !important;
    font-family: 'Roboto Serif', sans-serif;
  }
  h2{
      font-size: 2rem !important;
      font-weight: 500;
  }
  /*создание списка желаний; списки желаний; аккаунт; регистрация*/
  #createWishlist, #wishlists, #account,#registration{
    padding: 3%;
    min-height: 75vh;
    height: 100%;
    background: white;
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.35);
  }
  /*контент - место где меняются компоненты*/
  #content{
    margin-top: .1%;
    padding-top: 1.5%;
    background: rgba(252, 214, 181, 0.3);
    height: 100%;
    min-height: 84vh;
  }
  /*gif-картинка в меню - шапке*/
  #heart{
    height: 40px;
    width: 40px;
    display: block;
    margin: 0 auto;
  }
  @media screen and (min-width: 500px) and (max-width: 768px) {
    table,.input-group-text{
      font-size: 1rem !important;
    }
    h1{
      font-size: 2rem !important;
    }
    h2{
      font-size: 1.5rem !important;
    }
    input{
      height: auto;
    }
    .add,.save,button{
      font-size: 1.1rem !important;
    }
  }
</style>
