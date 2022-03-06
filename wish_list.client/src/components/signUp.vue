<template>
    <div id="signUp">
        <h2>Sign Up</h2>
        <label class="text" for="nickname">Nickname</label>
        <input id="nickname">
        <label class="text" for="password-1">Password</label>
        <input id="password-1">
        <label class="text" for="password-2">Password again</label>
        <input id="password-2">
        <b-button class="send" variant="outline-success">Sign Up</b-button>
    </div>
</template>

<script>
    export default {
        name: "signUp"
    }
</script>

<style scoped lang="scss">

</style>