<template>
    <div id="imageToUpload">
        <div class="circle">
            <img v-if="file" :src="url"/>
            <label :for="'upload-file-'+id">+</label>
            <input ref="fileupload" class="upload-photo" type="file" :id="'upload-file-'+id" @change="onFileChange">
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
        },
        methods: {
            onFileChange(e){
                if(e.target.files.length <= 0)
                    return
                this.file = e.target.files[0];
                this.$emit("fileChanged", this.file)
            },
        },
        watch: {
            img(newVal, oldVal){
                this.$refs.fileupload.value=null;
                this.file = newVal
            }
        },
        computed:{
            url(){
                if(!this.file)
                    return null
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