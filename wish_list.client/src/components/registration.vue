<template>
    <div id="registration">
        <navbar-log-in-and-sing-up/>
        <div id="worksheet">
            <label class="text">Nickname:</label>
            <input>
            <label class="text">Password:</label>
            <input>
            <b-button class="save" variant="outline-success">Log In</b-button>
        </div>
    </div>
</template>

<script>
    import NavbarLogInAndSingUp from "@/components/navbarLogInAndSingUp";
    export default {
        name: "registration",
        components: {NavbarLogInAndSingUp}
    }
</script>

<style scoped lang="scss">
    #registration{font-size: 1.5rem !important;}
    #worksheet{
        border: 1px solid #bdc0c2 !important;
        background: #f7f9fc;
        padding: 5% 4%;
        max-width: 750px;
        margin: 0 auto;
    }
    h2{
        text-align: center;
    }
    #worksheet,button{box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.8);}
    input{
        width: 100%;
        margin-bottom: 3%;
    }
    .row{padding-bottom: 3%;}
    .add,.save,.exit{
        font-size: 1.5rem !important;
        font-family: 'Ubuntu Condensed', sans-serif;
    }
    .registration,h2{font-family: 'Roboto Serif', sans-serif;}
    .save{
        display: block;
        width: 50%;
        margin: 0 auto;
    }
    .exit,.add{
        width: 100%;
    }
    .exit{
        margin-top: 6%;
    }
    input,button{height: 45px;}
    input,.circle{border: 1px solid #bdc0c2 !important;}
    .circle{
        background: white !important;
        margin: 0 auto 6% !important;
    }
</style>