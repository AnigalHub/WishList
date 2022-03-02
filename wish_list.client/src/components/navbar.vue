<template>
    <div class="nav">
        <b-container>
            <ul class="menu-main">
                <router-link :to="{name: 'CreateWishList'}" tag="a">Create a wishlist</router-link>
                <span>|</span>
                <router-link :to="{name: 'Wishlists'}" tag="a">Your wishlists</router-link>
                <span>|</span>
                <router-link :to="{name: 'Account'}" tag="a">My account</router-link>
            </ul>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped lang="scss">
    .nav {
        width: 100%;
        height: 56px;
        margin: 0 auto;
        box-shadow: 0 8px 5px -5px rgba(99, 101, 102, 0.6);
        border-radius: 0 0 8px 8px;
    }
    .menu-main {
        text-align: center;
        background: white;
    }
    .menu-main a {
        text-decoration: none;
        font-family: 'Ubuntu Condensed', sans-serif;
        letter-spacing: 2px;
        position: relative;
        padding-bottom: 16px;
        margin: 0 34px 0 30px;
        font-size: 1.5rem;
        text-transform: uppercase;
        display: inline-block;
        transition: color .2s;
    }
    .menu-main a, .menu-main a:visited {color: #9d999d;}
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