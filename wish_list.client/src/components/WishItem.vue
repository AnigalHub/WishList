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
    /*пункт из списка желаний*/
    #wishItem{
        display: flex;
        box-shadow: 4px 4px 5px -5px rgba(34, 60, 80, 0.8);
        flex-wrap: wrap;
            /*элементы (картинка, текст, кнопки)*/
            & > div {
                width: 33%;
                margin-bottom: 2%;
                /*последний элемент*/
                &:last-child{padding-left: 10%;}
            }
    }
    /*область, куда можно ввести текст с множеством строк*/
    textarea{
        border: 1px solid #bdc0c2 !important;
        resize: none;
        background: #f7f9fc;
        width: 130%;
        height: 125px !important;
        display: block;
        margin: 20% 0 auto -10%;
    }
    /*кнопки*/
    button{
        font-size: 1.5rem !important;
        width: 40%;
        margin: 40% 2% 0;
    }
    /*подпись к элементу*/
    label{
        padding-left: 45%;
        padding-top: 33%;
        font-weight: 400 !important;
        font-size: 3rem;
    }
    /*подпись к элементу, кнопки*/
    label,button{font-family: 'Ubuntu Condensed', sans-serif;}
    @media screen and (min-width: 768px) and (max-width: 992px) {
        /*область, куда можно ввести текст с множеством строк*/
        textarea{
            margin: 10% 0 auto -6%;
        }
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        /*область, куда можно ввести текст с множеством строк*/
        textarea{
            margin: 5% 0 auto -2%;
        }
    }
</style>