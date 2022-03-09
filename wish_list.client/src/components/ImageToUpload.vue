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
                file: null,
                url: null,
            }
        },
        props:{
            fileChanged: Function,
        },
        methods: {
            onFileChange(e){
                if(e.target.files.length <= 0)
                    return
                this.file = e.target.files[0];
                this.url = URL.createObjectURL(this.file);
                //this.fileChanged(this.id, this.file)
                this.$emit("fileChanged", this.file)
            },
        },
        created() {
            this.id = this._uid
        }
    }
</script>

<style scoped lang="scss">

</style>