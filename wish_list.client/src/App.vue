<template>
  <div id="app">
    <img src="https://i.gifer.com/6nr.gif" id="heart">
    <h1>My WishList</h1>
    <navbar/>
    <div id="content">
      <b-container>
        <router-view></router-view>
        <div id="screenRotation">
          <h2>Flip the screen</h2>
          <img src="../src/telephone.png" height="110%" width="82%"/>
        </div>
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
  @media (min-width: 1100px){
    /*модальное окно*/
    .modal-dialog {max-width: 1100px !important;}
  }
  @media screen and (min-width: 600px) and (max-width: 1100px){
    /*модальное окно*/
    .modal-dialog {max-width: 850px !important;}
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
  /*заголовки у компонентов - Регистрация (signUp), Учетная запись (account)*/
  #signUp h2,#logIn h2,#account h2{text-align: center;}
  /*текст, текст когда в таблице ничего нет, многострочный ввод текста*/
  .text,.emptyTable,#wishItem textarea{
    font-size: 1.4rem ;
    display: block;
    font-family: 'Roboto Serif', sans-serif;
  }
  /*текст, где выводится сообщение об ошибке*/
  .error{
    margin-bottom: 2%;
    color: red;
  }
  /*текст когда в таблице ничего нет*/
  .emptyTable{text-align: center;}
  /*текст в компоненте Учетная запись (account)*/
  #account .text{padding-top: 1.5%;}
  /*текст в компонентах Авторизация (logIn), Регистрация (signUp)*/
  #logIn .text,#signUp .text{text-align: center;}
  /*Компоненты - СозданиеСпискаЖеланий(createWishlist); СпискиЖеланий(wishlists);
   УчетнаяЗапись(account); Регистрация(registration); ПереворотЭкрана(screenRotation)*/
  #createWishlist, #wishlists, #account, #registration, #screenRotation{
    padding: 3%;
    min-height: 75vh;
    height: 100%;
    background: white;
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.35);
  }
  /*Компонент - ПереворотЭкрана(screenRotation)*/
  #screenRotation{
    display: none;
    /*заголовок*/
    h2{
      padding-top: 5%;
      text-align: center;
    }
    /*картинка*/
    img{
      display: block;
      margin: 5% auto 0;
    }
  }
  /*Компонент навигации - верхнее меню*/
  #nav{
    margin: 0 auto;
    box-shadow: 0 8px 5px -5px rgba(99, 101, 102, 0.6);
  }
  /*Компонент навигации - верхнее меню, Компонент навигации - меню на Авторизацию и Регистрацию*/
  #nav,#navbarLogInAndSignUp{
    width: 100%;
    height: 48px;
  }
  /*Компонент навигации - меню на Авторизацию и Регистрацию*/
  #navbarLogInAndSignUp {margin: 1% auto;}
  /*список в навигации*/
  .menu-main {
    text-align: center;
    background: white;
    /*ссылки*/
    a{
      text-decoration: none;
      font-family: 'Ubuntu Condensed', sans-serif;
      letter-spacing: 2px;
      position: relative;
      color: #9d999d;
      padding-bottom: 10px;
      margin: 0 10px;
      font-size: 1.5rem;
      text-transform: uppercase;
      display: inline-block;
      transition: color .2s;
    }
  }
  /*строчный элемент - под разделитель "/"*/
  span{font-size: 1.4rem;}
  /*ссылки в навигации при наведении*/
  .menu-main a.current,.menu-main a:hover{color: #e06565;}
  /*полосочка при наведении на ссылки в навигации*/
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
  /*с чего начинаем и заканчиваем рисовать полосочки при наведении на ссылки в навигации*/
  .menu-main a:hover:before,.menu-main .current:before {left: 0;}
  .menu-main a:hover:after,.menu-main .current:after {right: 0;}
  /*название в input - куда вбиваем название таблицы */
  .input-group-text{
    font-size: 1.25rem !important;
    font-family: 'Roboto Serif', sans-serif;
    font-weight: 600;
    height: 50px;
  }
  /*input - куда вбиваем название таблицы*/
  .input-group{margin-bottom: 3%;}
  /* для элемента input c type="checkbox" */
  .custom-checkbox {
    display: contents;
    z-index: -1;
    opacity: 0;
  }
  /* для элемента label, связанного с .custom-checkbox */
  .custom-checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  /* создание в label псевдоэлемента before со следующими стилями */
  .custom-checkbox+label::before {
    content: '';
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  /* стили для активного чекбокса (при нажатии на него) */
  .custom-checkbox:not(:disabled):active+label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
  .custom-checkbox:focus:not(:checked)+label::before {
    border-color: #80bdff;
  }
  /* стили для чекбокса, находящегося в состоянии checked */
  .custom-checkbox:checked+label::before {
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
  /*кнопки, таблица, input - куда вбиваем название таблицы, место под Авторизацию/Регистрацию/Учетную запись*/
  button, table,.input-group, #worksheet{box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.8);}
  /*место под Авторизацию/Регистрацию/Учетную запись*/
  #worksheet{
    border: 1px solid #bdc0c2 !important;
    background: #f7f9fc;
    padding: 4% 4% 5%;
    max-width: 780px;
    margin: 0 auto;
  }
  /*подпись к элементу(метка) в компонентах - Авторизация, Регистрация, Учетная запись*/
  #logIn label, #signUp label,#account label{padding-top: 1%;}
  /*input - элемент формы*/
  input{
    width: 100%;
    height: auto;
    font-size: 1.5rem !important;
  }
  /*input - элемент формы в компонентах Авторизация/Регистрация*/
  #logIn input, #signUp input{height: 35px;}
  /*кнопки в компонентах - СозданиеСпискаЖеланий(createWishlist), Авторизация (logIn), Регистрация (SignIn)
  УчетнаяЗапись(account), СпискиЖеланий (wishlists), ПунктВСпискеЖеланий(WishItem), кнопки Добавить (add) и Сохранить(save)
  которые в классе buttons, ссылка в УчетнойЗаписи(account)*/
  #createWishlist button,
  #logIn button, #signUp button,
  #account button, #wishlists button,
  #wishItem button,.buttons .add,.buttons .save, #account a{
    font-size: 1.5rem;
    font-family: 'Ubuntu Condensed', sans-serif;
  }
  /*отключенные кнопки в компонентах - Авторизация (logIn), Регистрация (signUp*/
  #logIn button[disabled],#signUp button[disabled]{
    background: #5c5c5c;
    border: 1px solid black;
  }
  /*кнопки в компонентах - Авторизация (logIn), Регистрация (signUp)*/
  #logIn button,#signUp button{
    background: #198754;
    color: white;
    border: 1px solid #0f653d;
  }
  /*кнопка Выход(exit) в компоненте УчетнаяЗапись(account)*/
  #account .exit{margin-top: 3%;}
  /*кнопка Сохранить (save) и Добавить (add) в компоненте СозданиеСпискаЖеланий(createWishlist)
  кнопки Добавить (add), Выход (exit) и Сохранить (save) в компоненте УчетнаяЗапись(account)
  кнопки в компонентах Авторизация/Регистрация*/
  #createWishlist .save, #createWishlist .add,
  #account .add, #account .exit{width: 100%;}
  #account .save, #logIn .send, #signUp .send{
    display: block;
    width: 50%;
    margin: 0 auto;
  }
  /*Кнопки в компонентах Авторизация(logIn)/Регистрация(signIn)*/
  #logIn .send, #signUp .send{margin-top: 3%;}
  /*Компонент - УчетнаяЗапись(account)*/
  #account{
    /*параметр сетки бутстрап*/
    .row{padding-bottom: 3%;}
    /*Круг, где картинка (input) и подпись к элементу*/
   .circle{
     background: white !important;
     margin: 0 auto 4% !important;
   }
 }
 /*СозданиеСпискаЖеланий(createWishlist) - параметр сетки бутстрап*/
  #createWishlist .row{padding-top: 1.5%;}
  /*пункт в таблице - один списокЖеланий*/
  .wishlist{
    box-shadow: 4px 4px 5px -5px rgba(34, 60, 80, 0.8);
    padding: 1%;
    /*кнопки*/
    button{
      width: 48%;
      margin: 0 1%;
    }
  }
  /*класс кнопок*/
  .buttons{
    /*кнопки Добавить(add) и Сохранить (save)*/
    .add,.save{width: 100%;}
    /*параметр сетки бутстрап*/
    .col:first-child{padding-right: 5px !important;}
    .col:last-child{padding-left: 5px !important;}
  }
  /*Компонент -ПунктИзСпискаЖеланий*/
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
    /*кнопки*/
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
  /*Компонент - ЗагрузкаИзображения(imageToUpload)*/
  #imageToUpload{
    /*подпись к элементу(метка) в форме*/
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
  /* Компонент - ЗагрузкаИзображения(imageToUpload) - Круг, где картинка (input) и подпись к элементу
  Компонент -ПунктИзСпискаЖеланий - область, куда можно ввести текст с множеством строк,
  место под Авторизацию/Регистрацию/Учетную запись - input*/
  #imageToUpload .circle,#wishItem textarea,#worksheet input{border: 1px solid #bdc0c2 !important;}
  /*Компонент - СпискиЖеланий (wishlists)*/
  #wishlists input{border: none !important;}

  /*Адаптивность*/
  @media (max-width: 500px) {
    /*Компоненты - СозданиеСпискаЖеланий(createWishlist); СпискиЖеланий(wishlists);
   УчетнаяЗапись(account); Регистрация(registration);*/
    #createWishlist, #wishlists, #account, #registration,#nav{display: none;}
    /*Компонент - ПереворотЭкрана(screenRotation)*/
    #screenRotation{display: block;}
    /*с чего начинаем и заканчиваем рисовать полосочки при наведении на ссылки в навигации*/
    .menu-main a:before, .menu-main a:after {display: none;}
  }
  @media (max-width: 768px) {
    /*заголовок*/
    h1{margin-bottom: 0 !important;}
    /*список в навигации*/
    .menu-main {padding-top: 0;}
    /*элемнты в списке навигации*/
    .menu-main li {display: block;}
    .menu-main li:after {content: none;}
    /*ссылки в списке навигации*/
    .menu-main a {
      font-size: 1.25rem;
      letter-spacing: .5px;
      padding: 4px 0 10px;
      margin: 0 6px;
    }
    /*строчный элемент - под разделитель "/"*/
    span{font-size: 1rem;}
    /*список*/
    ul{padding-left: 0 !important;}
    /*Компонент навигации - меню на Авторизацию и Регистрацию - ссылки и строчный элемент (/)*/
    .navbarLogInAndSignUp a,.navbarLogInAndSignUp span  {font-size: 1.3rem;}
  }
  @media (max-width: 992px) {
    /*таблица,название в input - куда вбиваем название таблицы */
    table,.input-group-text{font-size: 1rem !important;}
    /*заголовки*/
    h1{font-size: 2.2rem !important;}
    h2{font-size: 1.5rem !important;}
  }
  @media screen and (min-width: 500px) and (max-width: 768px) {
    /*input - элемент формы*/
    input{height: auto;}
    /*текст*/
    .text{font-size: 1rem ;}
    /*кнопки*/
    button{
      font-size: 1.1rem !important;
      height: auto;
    }
    /*Компонент -ПунктИзСпискаЖеланий*/
    #wishItem{
      /*область, куда можно ввести текст с множеством строк*/
      textarea{
        width: 125%;
        margin: 10% 0 auto 2%;
      }
      /*кнопки*/
      button {margin: 45% 2% 0;}
    }
    /*таблица,название в input - куда вбиваем название таблицы */
    table,.input-group-text{font-size: 1.05rem !important;}
    /*Компонент - ЗагрузкаИзображения(imageToUpload)*/
    #imageToUpload{
      /*Круг, где картинка (input) и подпись к элементу; картинка, которую загрузили*/
      .circle, img {
        width: 135px;
        height: 135px;
      }
      /*подпись к элементу (метка)*/
      label{
        left: 42%;
        top: 25%;
        font-size: 2.5rem;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    /*Компонент -ПунктИзСпискаЖеланий - область, куда можно ввести текст с множеством строк*/
    #wishItem textarea{margin: 10% 0 auto -6%;}
    /*Компонент - ЗагрузкаИзображения(imageToUpload)*/
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
    /*Компонент - ЗагрузкаИзображения(imageToUpload)*/
    #imageToUpload{
      /*Круг, где картинка (input) и подпись к элементу; картинка, которую загрузили*/
      .circle, img {
        width: 200px;
        height: 200px;
      }
    }
  }
</style>
