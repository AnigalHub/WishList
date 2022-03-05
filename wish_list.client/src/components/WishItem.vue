<template>
    <div id="wishItem">
        <div><ImageToUpload/></div>
        <div><textarea/></div>
        <div>
            <b-button type="submit" variant="outline-success">✓</b-button>
            <b-button type="submit" variant="outline-danger">X</b-button>
        </div>
    </div>
</template>


<script>
    import ImageToUpload from "@/components/ImageToUpload";
    export default {
        name: "WishItem",
        components: {ImageToUpload}
    }
</script>

<style scoped lang="scss">

</style>