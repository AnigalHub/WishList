<template>
    <div>
        <h2>Sing Up</h2>
        <label class="text">Nickname:</label>
        <input>
        <label class="text">Password:</label>
        <input>
        <label class="text">Password again:</label>
        <input>
        <b-button class="save" variant="outline-success">Sing Up</b-button>
    </div>
</template>

<script>
    export default {
        name: "singUp"
    }
</script>

<style scoped lang="scss">
    button{box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.8);}
    input{
        width: 100%;
        margin-bottom: 3%;
    }
    .row{padding-bottom: 3%;}
    h2{
        font-family: 'Roboto Serif', sans-serif;
        text-align: center;
    }
    .save{
        display: block;
        width: 50%;
        margin: 0 auto;
        font-size: 1.5rem !important;
        font-family: 'Ubuntu Condensed', sans-serif;
    }
    input,button{height: 45px;}
    input{border: 1px solid #bdc0c2 !important;}
</style>