<template>
    <div id="imageToUpload">
        <div class="circle">
            <img v-if="file" :src="url"/>
            <label  :for="'upload-file-'+id">+</label>
            <input class="upload-photo" type="file" :id="'upload-file-'+id" @change="onFileChange">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ImageToUpload',
        data() {
            return {
                id: 0,
                file: this.img,
            }
        },
        props:{
            img: File,
            fileChanged: Function,
        },
        methods: {
            onFileChange(e){
                if(e.target.files.length <= 0)
                    return
                this.file = e.target.files[0];
                this.$emit("fileChanged", this.file)
            },
        },
        computed:{
            url(){
                if(!this.file)
                    return
                return URL.createObjectURL(this.file)
            }
        },
        created() {
            this.id = this._uid
        }
    }
</script>

<style scoped lang="scss">

</style>