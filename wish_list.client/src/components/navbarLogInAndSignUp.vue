<template>
    <div id="navbarLogInAndSignUp">
        <b-container>
            <ul class="menu-main">
                <router-link :to="{name: 'LogIn'}" tag="a">Log In</router-link>
                <span>/</span>
                <router-link :to="{name: 'SignUp'}" tag="a">Sign up</router-link>
            </ul>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "navbarLogInAndSignUp"
    }
</script>

<style scoped lang="scss">

</style>