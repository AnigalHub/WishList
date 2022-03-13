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

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const fromBase64 = async(base64) => {
        const blob = await (await fetch(base64)).blob()
        return new File([blob], "test")
    }

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
            async onFileChange(e){
                if(e.target.files.length <= 0)
                    return
                let b64 = await toBase64(e.target.files[0])
                this.file = await fromBase64(b64)
                //this.file = e.target.files[0];
                this.$emit("fileChanged", this.file)
                console.log(this.file)
            },
        },
        watch: {
            img(newVal){
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