<template>
    <div class="account">
        <div id="worksheet">
            <h2>My account</h2>
            <input class="circle">
           <b-row>
                <b-col class="headlines" cols="3">Nickname:</b-col>
                <b-col><input v-model="name"></b-col>
           </b-row>
           <b-row>
               <b-col class="headlines" cols="3">Password:</b-col>
               <b-col><input v-model="password"></b-col>
           </b-row>
           <b-row>
                <b-col class="headlines" cols="9">Wishlists available from other users</b-col>
                <b-col>
                    <input v-model="wishlists">
                </b-col>
                <b-col>
                    <b-button class="show" variant="outline-secondary">Show</b-button>
                </b-col>
           </b-row>
            <b-button class="save" variant="outline-success">Save</b-button>
           <b-button class="exit" variant="secondary">Exit</b-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "account",
        data(){
            return{
                name:'',
                password:'',
                wishlists:0
            }
        }

    }
</script>

<style scoped lang="scss">
    #worksheet{
        background: #f7f9fc;
        padding: 7% 4% 5%;
        margin: 2% auto 0 ;
        max-width: 750px;
    }
    input{
        width: 100%;
    }
    .row{
        padding-bottom: 3%;
    }
    .show{
        font-size: 1.5rem !important;
        font-family: 'Roboto Serif', sans-serif;
    }
    .save{
        display: block;
        width: 50%;
        margin: 0 auto;
        font-size: 1.5rem !important;
        font-family: 'Roboto Serif', sans-serif;
    }
    .exit{
        margin-top: 6%;
        width: 100%;
        font-size: 1.5rem !important;
        font-family: 'Roboto Serif', sans-serif;
        margin-bottom: 2%;
    }
    .account{
        padding: 3%;
        min-height: 75vh;
        height: 100%;
        background: white;
        box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.35);
        font-size: 1.5rem !important;
        font-family: 'Roboto Serif', sans-serif;
    }
    h2{
        font-size: 2rem !important;
        font-family: 'Roboto Serif', sans-serif;
        font-weight: 500;
        text-align: center;
    }
    button{
        box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    }
    input,button{

        height: 45px;
    }
    input,.circle{
        border: 1px solid #bdc0c2 !important;
    }
    .circle{
        background: white;
        width: 250px;
        height: 250px;
        display: block;
        margin: 0 auto 6%;
        border-radius: 50%;
    }
</style>