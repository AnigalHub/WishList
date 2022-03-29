<template>
    <div id="signUp">
        <h2>Sign Up</h2>
        <label class="text" for="nickname">Nickname</label>
        <input id="nickname" required type="text" v-model="user.loginUser">
        <label class="text" for="password-1">Password</label>
        <input id="password-1" required type="password" v-model="user.passwordUser">
        <label class="text" for="password-2">Password again</label>
        <input id="password-2" required type="password" v-model="user.passwordUserCopy">
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
                user:{
                    loginUser:'',
                    passwordUser:'',
                    passwordUserCopy:''
                },
                errorMessage:''
            }
        },
        computed:{
            buttonDisabled(){
               if(this.user.loginUser && this.user.passwordUser && this.user.passwordUserCopy){
                   if(this.user.passwordUser != this.user.passwordUserCopy){
                       this.errorMessage = 'Password mismatch'
                   }
                 return false
               }
               return true
            }
        },
        methods:{
           async sendForm() {
                if(this.user.loginUser && this.user.passwordUser && this.user.passwordUserCopy){
                    await axios.post("addUser", this.user)
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>