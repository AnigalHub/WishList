<template>
    <div id="registration">
        <navbar-log-in-and-sign-up/>
        <div id="worksheet">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import NavbarLogInAndSignUp from "@/components/navbarLogInAndSignUp";
    export default {
        name: "registration",
        components: {NavbarLogInAndSignUp}
    }
</script>

<style scoped lang="scss">

</style>