<template>
    <div id="registration">
        <navbar-log-in-and-sing-up/>
        <div id="worksheet">
            <router-view/>
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

<style  lang="scss">
    #registration{font-size: 1.5rem !important;}
    #worksheet{
        border: 1px solid #bdc0c2 !important;
        background: #f7f9fc;
        padding: 5% 4%;
        max-width: 750px;
        margin: 0 auto;
    }
    #worksheet{box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.8);}
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