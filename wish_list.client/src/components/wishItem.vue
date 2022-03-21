<template>
    <div id="wishItem">
        <div><ImageToUpload ref="imgToUpload" :img="value.img" @fileChanged="onFileChanged"/></div>
        <div><textarea v-model="value.text"/></div>
        <div>
            <b-button type="submit" variant="outline-danger" @click="deleteProduct()">X</b-button>
        </div>
    </div>
</template>


<script>
    import ImageToUpload from "@/components/ImageToUpload";
    export default {
        name: "wishItem",
        props: {
          value: Object,
        },
        components: {ImageToUpload},
        methods:{
            onFileChanged(file){
                this.value.img = file
            },
            deleteProduct(){
                this.$refs['imgToUpload'].file = null
                this.$emit("delete")
            }
        }
    }
</script>

<style scoped lang="scss">

</style>