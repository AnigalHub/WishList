<template>
    <div id="nav">
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


</style>