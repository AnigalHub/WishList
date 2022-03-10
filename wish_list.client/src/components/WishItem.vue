<template>
    <div id="wishItem">
        <div><ImageToUpload :img="value.img" @fileChanged="onFileChanged"/></div>
        <div><textarea v-model="value.text"/></div>
        <div>
            <b-button type="submit" variant="outline-danger">X</b-button>
        </div>
    </div>
</template>


<script>
    import ImageToUpload from "@/components/ImageToUpload";
    export default {
        name: "WishItem",
        props: {
          value: Object,
        },
        components: {ImageToUpload},
        methods:{
            onFileChanged(file){
                console .log(file)
                this.value.img = file
            }
        }
    }
</script>

<style scoped lang="scss">

</style>