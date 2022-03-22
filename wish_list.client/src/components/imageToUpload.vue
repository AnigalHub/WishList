<template>
    <div id="imageToUpload">
        <div class="circle">
            <img v-if="file" :src="url"/>
            <label :for="'upload-file-'+id">+</label>
            <input ref="fileupload" class="upload-photo" type="file" :id="'upload-file-'+id" @change="onFileChange" accept=".jpg, .jpeg, .png" >
        </div>
    </div>
</template>
<script>
    import base64Сonverter from "../base64Converter";
    export default {
        name: 'imageToUpload',
        data() {
            return {
                id: 0,
                file: this.img,
            }
        },
        props:{
            img: String,
        },
        methods: {
            async onFileChange(e){
                if(e.target.files.length <= 0)
                    return
                let b64 = await base64Сonverter.toBase64(e.target.files[0])
                this.file = await base64Сonverter.fromBase64(b64)
                this.$emit("fileChanged", b64)
            },
            dataURLToBlob(dataurl) {
                let arr = dataurl.split(',');
                let mime = arr[0].match(/:(.*?);/)[1];
                let bstr = atob(arr[1]);
                let n = bstr.length;
                let u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], { type: mime });
            }
        },
        watch: {
            async img(newVal){
                this.$refs.fileupload.value=null;
                this.file = await base64Сonverter.fromBase64(newVal)
            }
        },
        computed:{
             url(){
                if(!this.file)
                    this.img = ''
                    return this.img
                return URL.createObjectURL(this.dataURLToBlob(this.img))
            }
        },
        async created() {
            this.id = this._uid
        },
        async mounted() {
            this.file = await base64Сonverter.fromBase64(this.img)
        }
    }
</script>

<style scoped lang="scss">

</style>