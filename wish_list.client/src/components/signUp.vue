<template>
    <div id="signUp">
        <h2>Sign Up</h2>
        <label class="text" for="nickname" v-model="FormSignUp.nickname">Nickname</label>
        <input id="nickname" required type="text">
        <label class="text" for="password-1" v-model="FormSignUp.password1">Password</label>
        <input id="password-1" required type="password">
        <label class="text" for="password-2" v-model="FormSignUp.password2">Password again</label>
        <input id="password-2" required type="password">
        <b-button class="send" variant="outline-success"  @click.prevent="sendForm" :disabled="buttonDisabled">Sign Up</b-button>
    </div>
</template>

<script>
    export default {
        name: "signUp",
        data(){
            return{
                FormSignUp:{
                    nickname:'',
                    password1:'',
                    password2:''
                }
            }
        },
        computed:{
            buttonDisabled(){
                if(this.FormSignUp.nickname && this.FormSignUp.password1 && this.FormSignUp.password2){
                    return false
                }
                else {
                   return true
                }
            }
        },
        methods:{
            sendForm:function () {
                if(this.FormSignUp.nickname && this.FormSignUp.password1 && this.FormSignUp.password2){

                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>