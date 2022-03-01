<template>
    <div class="navbarLogInAndSingUp">
        <b-container>
            <ul class="menu-main">
                <router-link :to="{name: 'CreateWishList'}" tag="a">Log In</router-link>
                <span>/</span>
                <router-link :to="{name: 'Wishlists'}" tag="a">Sign up</router-link>
            </ul>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "navbarLogInAndSingUp"
    }
</script>

<style scoped lang="scss">
    .navbarLogInAndSingUp {
        width: 100%;
        margin: 14% auto 1%;
        height: 56px;
        border-radius: 0 0 8px 8px;
    }
    .menu-main {
        text-align: center;
    }
    .menu-main a,span {
        text-decoration: none;
        font-family: 'Ubuntu Condensed', sans-serif;
        letter-spacing: 2px;
        position: relative;
        padding-bottom: 16px;
        margin: 0 10px;
        font-size: 1.8rem;
        text-transform: uppercase;
        display: inline-block;
        transition: color .2s;
    }
    .menu-main a, .menu-main a:visited,span {color: #9d999d;}
    .menu-main a.current, .menu-main a:hover{color: #e06565;}
    .menu-main a:before, .menu-main a:after {
        content: "";
        position: absolute;
        height: 4px;
        top: auto;
        right: 50%;
        bottom: -5px;
        left: 50%;
        background: #e06565;
        transition: .8s;
    }
    .menu-main a:hover:before, .menu-main .current:before {left: 0;}
    .menu-main a:hover:after, .menu-main .current:after {right: 0;}
    @media (max-width: 550px) {
        .menu-main {padding-top: 0;}
        .menu-main li {display: block;}
        .menu-main li:after {content: none;}
        .menu-main a {
            padding: 25px 0 20px;
            margin: 0 30px;
        }
    }
</style>