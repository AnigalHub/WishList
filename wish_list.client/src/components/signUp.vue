<template>
    <div id="signUp">
        <h2>Sign Up</h2>
        <label class="text" for="nickname">Nickname</label>
        <input id="nickname" required type="text" v-model="formSignUp.nickname">
        <label class="text" for="password-1">Password</label>
        <input id="password-1" required type="password" v-model="formSignUp.password1">
        <label class="text" for="password-2">Password again</label>
        <input id="password-2" required type="password" v-model="formSignUp.password2">
        <b-button class="send" variant="outline-success" type="submit" @click="sendForm()" :disabled="buttonDisabled">Sign Up</b-button>
        <br>
        <div class="text">{{errorMessage}}</div>
    </div>
</template>

<script>
    export default {
        name: "signUp",
        data(){
            return{
                formSignUp:{
                    nickname:'',
                    password1:'',
                    password2:''
                },
                errorMessage:''
            }
        },
        computed:{
            buttonDisabled(){
               if(this.formSignUp.nickname && this.formSignUp.password1 && this.formSignUp.password2){
                   if(this.formSignUp.password1 != this.formSignUp.password2){
                       this.errorMessage = 'Password mismatch'
                   }
                 return false
               }
               return true
            }
        },
        methods:{
            sendForm:function () {
                if(this.formSignUp.nickname && this.formSignUp.password1 && this.formSignUp.password2){

                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>