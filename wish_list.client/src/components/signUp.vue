<template>
    <div id="signUp">
        <h2>Sign Up</h2>
        <label class="text" for="nickname" v-model="formSignUp.nickname">Nickname</label>
        <input id="nickname" required type="text">
        <label class="text" for="password-1" v-model="formSignUp.password1">Password</label>
        <input id="password-1" required type="password">
        <label class="text" for="password-2" v-model="formSignUp.password2">Password again</label>
        <input id="password-2" required type="password">
        <b-button class="send" variant="outline-success" type="submit" @click.prevent="sendForm()" :disabled="buttonDisabled">Sign Up</b-button>
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
                 // return false
                }
              // return true
            }
        },
        methods:{
            sendForm:function () {
                if(this.formSignUp.nickname && this.formSignUp.password1 && this.formSignUp.password2){
                    if(this.formSignUp.password1 != this.formSignUp.password2){
                        this.errorMessage = 'Password mismatch'
                    }
                    else {
                        this.errorMessage = ''
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>