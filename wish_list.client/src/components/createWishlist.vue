<template>
    <div id="createWishlist">
        <b-input-group class="w-100" prepend="Wishlist Title" ><b-form-input></b-form-input></b-input-group>
        <b-table :fields="fields"></b-table>
        <div v-for="(wishItem, index) in wishItems" :key="index">
            <WishItem />
        </div>
        <b-button class="add" @click="addProduct()" variant="outline-secondary">Add Product</b-button>
        <b-row>
            <b-col>
                <b-button class="save" variant="outline-success">Save WishList</b-button>
            </b-col>
            <b-col>
                <b-row>
                    <b-col cols="4" class="who">Who can see:</b-col>
                    <b-col class="whois">
                        <input type="checkbox" class="custom-checkbox" id="all" name="all" value="yes">
                        <label for="all">All</label>
                        <input type="checkbox" class="custom-checkbox" id="me" name="me" value="yes">
                        <label for="me">Me</label>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import WishItem from "@/components/WishItem";
    import ImageToUpload from "@/components/ImageToUpload";

    export default {
        name: "createWishlist",
        components: {WishItem, ImageToUpload},
        data(){
            return{
                /**Столбцы таблицы */
                fields:[
                    { key: "name", label: "Product name" },
                    { key: "description", label: "Description" },
                    { key: "edit", label: "Edit | Delete" },
                ],
                wishItems:[],
                file: [],
            }
        },
        methods:{
            onFileChange(id, image){
                console.log("Мы должны сохранить вот это", id, image)
            },
            addProduct(){
                this.wishItems.push({})
            }
        },
        created() {
            this.wishItems = [
                {id: "1"},
            ]
        }
    }
</script>


<style scoped lang="scss">
    .input-group-text{
        font-size: 1.25rem !important;
        font-family: 'Roboto Serif', sans-serif;
        font-weight: 500;
    }
    .input-group{margin-bottom: 3%;}
    .add,.save{
        width: 100%;
        font-size: 1.5rem !important;
        font-family: 'Ubuntu Condensed', sans-serif;
        margin-bottom: 2%;
    }
    .who{padding-top: 2%;}
    .whois,.who{
        font-size: 1.5rem !important;
        font-family: 'Roboto Serif', sans-serif;
    }
    table{
        font-size: 1.25rem !important;
        font-family: 'Roboto Serif', sans-serif;
        margin-bottom: 0 !important;
    }
    button{height: 45px;}
    button,.input-group,table{box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.8);}
    .custom-checkbox:checked+label::before {
        border-color: #198754;
        background-color: #198754;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-checkbox+label {
        width: 100%;
        display: block;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    @media screen and (min-width: 500px) and (max-width: 768px) {
        table,.input-group-text{
            font-size: 1.05rem !important;
        }
        .whois,.who{
            font-size: 1.05rem !important;
        }
        .add,.save,button{
            font-size: 1.2rem !important;
        }
        button{height: 38px;}
        .col-4 {
            width: 60% !important;
        }
    }
</style>