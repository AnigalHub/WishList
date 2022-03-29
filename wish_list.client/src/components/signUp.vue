<template>
    <div id="signUp">
        <h2>Sign Up</h2>
        <label class="text" for="nickname">Nickname</label>
        <input id="nickname" required type="text" v-model="formSignUp.loginUser">
        <label class="text" for="password-1">Password</label>
        <input id="password-1" required type="password" v-model="formSignUp.passwordUser">
        <label class="text" for="password-2">Password again</label>
        <input id="password-2" required type="password" v-model="formSignUp.passwordUserCopy">
        <b-button class="send" variant="outline-success" type="submit" @click="sendForm()" :disabled="buttonDisabled">Sign Up</b-button>
        <br>
        <div class="text">{{errorMessage}}</div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "signUp",
        data(){
            return{
                formSignUp:{
                    loginUser:'',
                    passwordUser:'',
                    passwordUserCopy:''
                },
                errorMessage:''
            }
        },
        computed:{
            buttonDisabled(){
               if(this.formSignUp.loginUser && this.formSignUp.passwordUser && this.formSignUp.passwordUserCopy){
                   if(this.formSignUp.passwordUser != this.formSignUp.passwordUserCopy){
                       this.errorMessage = 'Password mismatch'
                   }
                 return false
               }
               return true
            }
        },
        methods:{
           async sendForm() {
                if(this.formSignUp.loginUser && this.formSignUp.passwordUser && this.formSignUp.passwordUserCopy){
                    console.log(this.formSignUp)
                    await axios.post("addUser", this.formSignUp)
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>