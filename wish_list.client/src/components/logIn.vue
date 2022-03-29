<template>
    <div id="logIn">
        <h2>Log In</h2>
        <label class="text" for="loginUser">loginUser</label>
        <input id="loginUser" required type="text"  v-model="user.loginUser">
        <label class="text" for="password">passwordUser</label>
        <input id="password" required type="password"  v-model="user.passwordUser">
        <b-button class="send" variant="outline-success" @click.prevent="sendForm()" :disabled="buttonDisabled" type="submit">Log In</b-button>
    </div>
</template>

<script>
    export default {
        name: "logIn",
        data(){
            return{
                user:{
                    loginUser:'',
                    passwordUser:''
                }
            }
        },
        computed:{
            buttonDisabled(){
                if(this.user.loginUser && this.user.passwordUser){
                    return false
                }
                else {
                    return true
                }
            }
        },
        methods:{
            sendForm:function () {
                if(this.user.loginUser && this.user.passwordUser){

                }
            }
        }

    }
</script>

<style scoped lang="scss">

</style>