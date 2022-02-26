<template>
    <div id="wishItem">
        <div><ImageToUpload/></div>
        <div><textarea class="descr"/></div>
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
    #wishItem,#wishItem2{
        display: flex;
        box-shadow: 4px 4px 5px -5px rgba(34, 60, 80, 0.8);
        flex-wrap: wrap;
            & > div {
                width: 33%;
                margin-bottom: 2%;
                &:last-child{padding-left: 10%;}
            }
    }
    .descr{
        background: #f7f9fc;
        width: 130%;
        height: 120px !important;
        display: block;
        margin: 20% 0 auto -10%;
    }
    textarea{border: 1px solid #bdc0c2 !important;}
    button{
        font-size: 1.5rem !important;
        font-family: 'Ubuntu Condensed', sans-serif;
        width: 40%;
        margin: 40% 2% 0;
    }
    label{
        padding-left: 45%;
        padding-top: 33%;
        font-weight: 400 !important;
        font-size: 3rem;
        font-family: 'Ubuntu Condensed', sans-serif;
    }
</style>