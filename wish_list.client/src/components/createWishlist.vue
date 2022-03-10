<template>
    <div id="createWishlist">
        <b-input-group class="w-100" prepend="Wishlist Title" ><b-form-input v-model="title"></b-form-input></b-input-group>
        <b-table :fields="fields"></b-table>
        <div v-for="(wishItem, index) in WishItems" :key="index">
            {{index}}
            <WishItem v-model="WishItems[index]"/>
        </div>
        <b-button class="add" @click="addProduct(WishItems.index)" variant="outline-secondary">Add Product</b-button>
        <b-row>
            <b-col >
                <b-button class="save" variant="outline-success" @click="saveProduct(title,WishItems)">Save WishList</b-button>
            </b-col>
            <b-col>
                <b-row>
                    <b-col class="text">
                        Who can see this wishlist:
                        <input class="custom-radio" type="radio" id="all" name="color" value="indigo">
                        <label for="all">All</label>
                        <input class="custom-radio" type="radio" id="me" name="color" value="indigo">
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
                    { key: "edit", label: " Delete" },
                ],
            }
        },
        methods:{
            onFileChange(id, image){
                console.log("Мы должны сохранить вот это", id, image)
            },
            addProduct(index){
                this.$store.dispatch('newWishlist/addProduct',{ id: index+1, text:"", img:null})
            },
            saveProduct(title,array){
                this.$store.dispatch('wishlists/addWishlist',{title,array})
                this.title = ''
            }
        },
        computed:{
            WishItems:function () {
                return this.$store.getters['newWishlist/WishItems']
            },
            title: {
                get(){
                    return this.$store.getters['newWishlist/title']
                },
                set(value){
                    return this.$store.dispatch('newWishlist/setTitle',value)
                }
            }
        }
    }
</script>


<style scoped lang="scss">

</style>