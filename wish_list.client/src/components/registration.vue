<template>
    <div id="registration">
        <div id="worksheet">
            <h2>Log In / Registration</h2>
            <b-row>
                <b-col class="headlines" cols="3">Nickname:</b-col>
                <b-col><input v-model="name"></b-col>
            </b-row>
            <b-row>
                <b-col class="headlines" cols="3">Password:</b-col>
                <b-col><input v-model="password"></b-col>
            </b-row>
            <b-button class="save" variant="outline-success">Log In</b-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "registration"
    }
</script>

<style scoped lang="scss">
    #registration{font-size: 1.5rem !important;}
    #worksheet{
        border: 1px solid #bdc0c2 !important;
        background: #f7f9fc;
        padding: 5% 4%;
        margin: 16% auto;
        max-width: 750px;
    }
    h2{
        text-align: center;
    }
    #worksheet,button{box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.8);}
    input{width: 100%;}
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