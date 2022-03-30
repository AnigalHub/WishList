<template>
    <div id="account">
        <div id="worksheet">
            <h2>My account</h2>
            <ImageToUpload/>
           <b-row>
                <b-col class="text" cols="3">Nickname:</b-col>
                <b-col><input v-model="name"></b-col>
               <b-col cols="2"><b-button class="save" variant="outline-success">✓</b-button></b-col>
           </b-row>
           <b-row>
               <b-col class="text" cols="3">Password:</b-col>
               <b-col><input v-model="password"></b-col>
               <b-col cols="2"><b-button class="save" variant="outline-success">✓</b-button></b-col>
           </b-row>
           <b-row>
                <b-col class="text" cols="6">Wishlists from other users: {{wishlists}}</b-col>
                <b-col>
                    <b-button class="add" variant="outline-primary">Add to Wishlists</b-button>
                </b-col>
           </b-row>
            <b-button class="save" variant="outline-success">Save</b-button>
            <b-button class="exit" variant="secondary" href="/logIn">Exit</b-button>
        </div>
    </div>
</template>

<script>
    import ImageToUpload from "@/components/imageToUpload";
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

<style lang="scss">

</style>