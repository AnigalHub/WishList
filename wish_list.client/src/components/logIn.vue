<template>
    <div id="logIn">
        <h2>Log In</h2>
        <label class="text" for="nickname" v-model="formLogIn.nickname">Nickname</label>
        <input id="nickname" required type="text">
        <label class="text" for="password" v-model="formLogIn.password">Password</label>
        <input id="password" required type="password">
        <b-button class="send" variant="outline-success" @click.prevent="sendForm" :disabled="buttonDisabled" >Log In</b-button>
    </div>
</template>

<script>
    export default {
        name: "logIn",
        data(){
            return{
                formLogIn:{
                    nickname:'',
                    password:''
                }
            }
        },
        computed:{
            buttonDisabled(){
                if(this.formLogIn.nickname && this.formLogIn.password){
                    return false
                }
                else {
                    return true
                }
            }
        },
        methods:{
            sendForm:function () {
                if(this.formLogIn.nickname && this.formLogIn.password){

                }
            }
        }

    }
</script>

<style scoped lang="scss">

</style>