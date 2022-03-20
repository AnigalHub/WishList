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

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const fromBase64 = async(base64) => {
        if(!base64)
            return null
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
            img: String,
        },
        methods: {
            async onFileChange(e){
                if(e.target.files.length <= 0)
                    return
                let b64 = await toBase64(e.target.files[0])
                this.file = await fromBase64(b64)
                this.$emit("fileChanged", b64)
            },
        },
        watch: {
            async img(newVal, oldval){
                this.$refs.fileupload.value=null;
                console.log("newval", newVal)
                this.file = await fromBase64(newVal)
            }
        },
        computed:{
             url(){
                if(!this.file)
                    return null
                console.log("URL", this.file)
                return URL.createObjectURL(this.file)
            }
        },
        async created() {
            this.id = this._uid
        },
        async mounted() {
            this.file = await fromBase64(this.img)
        }
    }
</script>

<style scoped lang="scss">

</style>