<template>
    <div id="account">
        <div id="worksheet">
            <h2>My account</h2>
            <ImageToUpload/>
           <b-row>
                <b-col class="headlines" cols="3">Nickname:</b-col>
                <b-col><input v-model="name"></b-col>
           </b-row>
           <b-row>
               <b-col class="headlines" cols="3">Password:</b-col>
               <b-col><input v-model="password"></b-col>
           </b-row>
           <b-row>
                <b-col class="headlines" cols="6">Wishlists from other users</b-col>
                <b-col>
                    <input v-model="wishlists">
                </b-col>
                <b-col cols="5">
                    <b-button class="add" variant="outline-primary">Add to Wishlists</b-button>
                </b-col>
           </b-row>
            <b-button class="save" variant="outline-success">Save</b-button>
           <b-button class="exit" variant="secondary">Exit</b-button>
        </div>

    </div>
</template>

<script>
    import ImageToUpload from "@/components/ImageToUpload";
    export default {
        name: "account",
        components: {ImageToUpload},
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
    #account{font-size: 1.5rem !important;}
    #worksheet{
        border: 1px solid #bdc0c2 !important;
        background: #f7f9fc;
        padding: 5% 4%;
        margin: 2% auto;
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
    .account,h2{font-family: 'Roboto Serif', sans-serif;}
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