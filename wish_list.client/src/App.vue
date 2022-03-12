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
  components: {Navbar},
  created:function(){
    this.$store.dispatch('wishlists/refreshSavedState')
  }
}
</script>

<style lang="scss">
  /*картинка (input), которую загрузили*/
  .upload-photo {
    opacity: 0;
    z-index: -1;
  }
  /*заголовки таблиц*/
  th{
    background: #e9ecef !important;
    text-align: center !important;
  }
  /*компонент - СпискиЖеланий(wishlists)*/
  #wishlists{
    /*заголовок*/
    h2{padding-top: 1%;}
    /*заголовок таблицы (первый)*/
    thead th:first-child{width: 58.3333%;}
    /*таблица*/
    table{margin-bottom: 0 !important;}
  }
  /*таблица - заголовки (без подчеркивания)*/
  .table > :not(:first-child) {border-top: none !important;}
</style>
<style lang="scss">
  /*"крестик в модальном окне" (размер)*/
  .close {
    border: none !important;
    background: none !important;
    box-shadow: none !important;
    font-size: 32px;
  }
  /*модальное окно*/
  .modal-dialog:first-child{margin-top: 5% !important;}
  /*заголовок модального окна*/
  .modal-header{
    border: none !important;
    padding: 10px !important;
  }
  /*тело модального окна*/
  .modal-body {
    padding: 10px !important;
    min-height: 100px;
    text-align: center;
    font-size: 30px;
    font-family: 'Poiret One', cursive;
    font-weight: 800 !important;
  }
  /*footer-модального окна*/
  .modal-footer{display: none !important;}

  /*Адаптивность по модальному окну*/
  @media (min-width: 1300px){
    /*модальное окно*/
    .modal-dialog {max-width: 1300px !important;}
  }
  /*Компонент в котором вызываются все другие компоненты*/
  #app{
    height: 100%;
    min-height: 90vh;
    padding-top: 1%;
  }
  /*gif-картинка в меню - шапке*/
  #heart{
    height: 40px;
    width: 40px;
    display: block;
    margin: 0 auto;
  }
  /*заголовоки*/
  h1{
    text-align: center;
    font-size: 3rem !important;
    font-family: 'Roboto Serif', sans-serif;
  }
  h2{
    font-size: 1.7rem !important;
    font-family: 'Roboto Serif', sans-serif;
    font-weight: 500;
  }
  /*контент - место где меняются компоненты*/
  #content{
    margin-top: .1%;
    padding-top: 1.5%;
    background: rgba(250, 182, 125, 0.3);
    height: 100%;
    min-height: 84vh;
  }
  /*заголовки у компонентов - */
  #signUp h2,#logIn h2,#account h2{text-align: center;}
  .text,.emptyTable,#wishItem textarea{
    font-size: 1.4rem ;
    display: block;
    font-family: 'Roboto Serif', sans-serif;
  }
  .emptyTable{text-align: center;}
  #account .text{padding-top: 1.5%;}
  #logIn .text,#signUp .text{text-align: center;}
  /*создание списка желаний; списки желаний; аккаунт; регистрация*/
  #createWishlist, #wishlists, #account,#registration{
    padding: 3%;
    min-height: 75vh;
    height: 100%;
    background: white;
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.35);
  }
  #nav {
    margin: 0 auto;
    box-shadow: 0 8px 5px -5px rgba(99, 101, 102, 0.6);
  }
  #nav,#navbarLogInAndSignUp{
    width: 100%;
    height: 48px;
  }
  #navbarLogInAndSignUp {margin: 1% auto;}
  .menu-main {
    text-align: center;
    background: white;
    a{
      text-decoration: none;
      font-family: 'Ubuntu Condensed', sans-serif;
      letter-spacing: 2px;
      position: relative;
      padding-bottom: 10px;
      margin: 0 10px;
      font-size: 1.5rem;
      text-transform: uppercase;
      display: inline-block;
      transition: color .2s;
    }
  }
  span{font-size: 1.4rem;}
  .menu-main a, .menu-main a:visited {color: #9d999d;}
  .menu-main a.current,.menu-main a:hover{color: #e06565;}
  .menu-main a:before, .menu-main a:after {
    content: "";
    position: absolute;
    height: 4px;
    top: auto;
    right: 50%;
    bottom: -4px;
    left: 50%;
    background: #e06565;
    transition: .8s;
  }
  .menu-main a:hover:before,.menu-main .current:before {left: 0;}
  .menu-main a:hover:after,.menu-main .current:after {right: 0;}
  .input-group-text{
    font-size: 1.25rem !important;
    font-family: 'Roboto Serif', sans-serif;
    font-weight: 600;
    height: 50px;
  }
  .input-group{margin-bottom: 3%;}
  /* для элемента input c type="radio" */
  .custom-radio {
    display: contents;
    z-index: -1;
    opacity: 0;
  }
  /* для элемента label связанного с .custom-radio */
  .custom-radio+label {
    display: inline-flex;
    align-items: center;
    margin-right: 5%;
  }
  /* создание в label псевдоэлемента  before со следующими стилями */
  .custom-radio+label::before {
    content: '';
    display: inline-block;
    width: 1.4em;
    height: 1.4em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #bdc0c2;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  /* стили для радиокнопки, находящейся в состоянии checked */
  .custom-radio:checked+label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  /*таблица*/
  table{
    font-size: 1.25rem ;
    font-family: 'Roboto Serif', sans-serif;
    /*кнопки в таблице*/
    button{
      width: 46%;
      margin-right: 3%;
    }
  }
  /*кнопки, таблица*/
  button, table,.input-group, #worksheet{box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.8);}
  #worksheet{
    border: 1px solid #bdc0c2 !important;
    background: #f7f9fc;
    padding: 4% 4% 5%;
    max-width: 780px;
    margin: 0 auto;
  }
  #logIn label, #signUp label,#account label{padding-top: 1%;}
  input{
    width: 100%;
    height: auto;
    font-size: 1.5rem !important;
  }
  #logIn input, #signUp input{height: 35px;}
  #createWishlist button,
  #logIn button, #signUp button,
  #account button, #wishlists button,
  #wishItem button,.buttons
    .add,.buttons .save{
    font-size: 1.5rem;
    font-family: 'Ubuntu Condensed', sans-serif;
  }
  #account .exit{margin-top: 3%;}
  #createWishlist .save, #createWishlist .add,
  #account .add, #account .exit{width: 100%;}
  #account .save, #logIn .send, #signUp .send{
    display: block;
    width: 50%;
    margin: 0 auto;
  }
  #logIn .send, #signUp .send{margin-top: 3%;}
  #account{
    .row{padding-bottom: 3%;}
    .circle{
      background: white !important;
      margin: 0 auto 4% !important;
    }
  }
  #createWishlist .row{padding-top: 1.5%;}
  .wishlist{
    box-shadow: 4px 4px 5px -5px rgba(34, 60, 80, 0.8);
    padding: 1%;
    button{
      width: 48%;
      margin: 0 1%;
    }

  }
  .buttons{
    .add,.save{width: 100%;}
    .col:first-child{padding-right: 5px !important;}
    .col:last-child{padding-left: 5px !important;}
  }
  /*пункт из списка желаний*/
  #wishItem{
    display: flex;
    box-shadow: 4px 4px 5px -5px rgba(34, 60, 80, 0.8);
    flex-wrap: wrap;
    /*элементы (картинка, текст, кнопки)*/
    & > div {
      width: 33%;
      margin-bottom: 1%;
      /*последний элемент*/
      &:last-child{padding-left: 10%;}
    }
    button{
      width: 40%;
      margin: 30% 0 0 50%;
    }
    /*область, куда можно ввести текст с множеством строк*/
    textarea{
      resize: none;
      background: #f7f9fc;
      width: 165%;
      height: 125px !important;
      display: block;
      margin: 15% 0 auto -10%;
    }
  }
  #imageToUpload{
    label{
      left: 45%;
      position: absolute;
      top: 30%;
      font-weight: 400 !important;
      font-size: 3rem;
      font-family: 'Ubuntu Condensed', sans-serif;
    }
    /*Круг, где картинка (input) и подпись к элементу; картинка, которую загрузили*/
    .circle, img {
      position: relative;
      border: 1px solid #bdc0c2 !important;
      background: #f7f9fc;
      background-size: cover;
      width: 200px;
      height: 200px;
      display: block;
      border-radius: 50%;
    }
    /*Круг, где картинка (input) и подпись к элементу*/
    .circle{margin: 4% auto 4%;}
  }
  #imageToUpload .circle,#wishItem textarea,#worksheet input{border: 1px solid #bdc0c2 !important;}
  #wishlists input{border: none !important;}
  @media (max-width: 500px) {
    .menu-main a:before, .menu-main a:after {
      display: none;
    }
  }
  @media (max-width: 768px) {
    h1{margin-bottom: 0 !important;}
    .menu-main {padding-top: 0;}
    .menu-main li {display: block;}
    .menu-main li:after {content: none;}
    .menu-main a {
      font-size: 1.25rem;
      letter-spacing: .5px;
      padding: 4px 0 10px;
      margin: 0 6px;
    }
    span{font-size: 1rem;}
    ul{padding-left: 0 !important;}
    .navbarLogInAndSignUp a,.navbarLogInAndSignUp span  {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 992px) {
    table,.input-group-text{font-size: 1rem !important;}
    h1{font-size: 2.2rem !important;}
    h2{font-size: 1.5rem !important;}
  }
  @media screen and (min-width: 500px) and (max-width: 768px) {
    input{height: auto;}
    .text{font-size: 1rem ;}
    button{
      font-size: 1.1rem !important;
      height: auto;
    }
    #wishItem{
      textarea{
        width: 125%;
        margin: 10% 0 auto 2%;
      }
      button {margin: 45% 2% 0;}
    }
    table,.input-group-text{font-size: 1.05rem !important;}
    #imageToUpload{
      /*Круг, где картинка (input) и подпись к элементу; картинка, которую загрузили*/
      .circle, img {
        width: 135px;
        height: 135px;
      }
      /*подпись к элементу*/
      label{
        left: 42%;
        top: 25%;
        font-size: 2.5rem;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    /*область, куда можно ввести текст с множеством строк*/
    #wishItem textarea{margin: 10% 0 auto -6%;}
    #imageToUpload{
      /*Круг, где картинка (input) и подпись к элементу; картинка, которую загрузили*/
      .circle, img {
        width: 150px;
        height: 150px;
      }
      /*подпись к элементу*/
      label{
        left: 45%;
        top: 30%;
        font-size: 2.5rem;
      }
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    #imageToUpload{
      /*Круг, где картинка (input) и подпись к элементу; картинка, которую загрузили*/
      .circle, img {
        width: 200px;
        height: 200px;
      }
    }
  }
</style>
