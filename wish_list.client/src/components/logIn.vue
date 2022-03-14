<template>
    <div id="logIn">
        <h2>Log In</h2>
        <label class="text" for="nickname" v-model="FormLogIn.nickname">Nickname</label>
        <input id="nickname" required type="text">
        <label class="text" for="password" v-model="FormLogIn.password">Password</label>
        <input id="password" required type="password">
        <b-button class="send" variant="outline-success" @click.prevent="sendForm" :disabled="buttonDisabled" >Log In</b-button>
    </div>
</template>

<script>
    export default {
        name: "logIn",
        data(){
            return{
                FormLogIn:{
                    nickname:'',
                    password:''
                }
            }
        },
        computed:{
            buttonDisabled(){
                if(this.FormLogIn.nickname && this.FormLogIn.password){
                    return false
                }
                else {
                    return true
                }
            }
        },
        methods:{
            sendForm:function () {
                if(this.FormLogIn.nickname && this.FormLogIn.password){

                }
            }
        }

    }
</script>

<style scoped lang="scss">

</style>