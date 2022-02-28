<template>
    <div class="circle">
        <img v-if="file" :src="url"/>
        <label  :for="'upload-file-'+id">+</label>
        <input class="upload-photo" type="file" :id="'upload-file-'+id" @change="onFileChange">
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
                this.$emit("fileChanged", this.id, this.file)
            },
        },
        created() {
            this.id = this._uid
        }
    }
</script>
<style lang="scss">
    /*картинка (input), которую загрузили*/
    .upload-photo {
        opacity: 0;
        position: absolute;
        z-index: -1;
    }
</style>
<style scoped lang="scss">
    /*подпись к элементу*/
    label{
        padding-left: 45%;
        padding-top: 33%;
        font-weight: 400 !important;
        font-size: 3rem;
        font-family: 'Ubuntu Condensed', sans-serif;
    }
    /*Круг, где картинка (input) и подпись к элементу; картинка, которую загрузили*/
    .circle, img {
        border: 1px solid #bdc0c2 !important;
        background: #f7f9fc;
        background-size: cover;
        width: 250px;
        height: 250px;
        display: block;
        border-radius: 50%;
    }
    /*Круг, где картинка (input) и подпись к элементу*/
    .circle{margin: 4% auto 4%;}
</style>