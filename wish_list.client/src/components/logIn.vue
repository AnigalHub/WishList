<template>
    <div id="logIn">
        <h2>Log In</h2>
        <label class="text" for="nickname">Nickname</label>
        <input id="nickname">
        <label class="text" for="password">Password</label>
        <input id="password">
        <b-button class="send" variant="outline-success">Log In</b-button>
    </div>
</template>

<script>
    export default {
        name: "logIn"
    }
</script>

<style scoped lang="scss">

</style>