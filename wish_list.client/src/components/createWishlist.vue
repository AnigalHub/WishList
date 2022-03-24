<template>
    <div id="createWishlist">
        <b-input-group class="w-100" prepend="Wishlist Title" ><b-form-input v-model="title"></b-form-input></b-input-group>
        <div class="text error">{{errorMessage}}</div>
        <b-table :fields="fields"></b-table>
        <div v-for="(wishItem, index) in wishItems" :key="index">
            <WishItem v-model="wishItems[index]" @delete="deleteProduct(index)"/>
        </div>
        <b-button class="add" @click="addProduct()" variant="outline-secondary">Add Product</b-button>
        <b-row>
            <b-col>
                <b-button class="save" variant="outline-success" @click="saveProduct(title,wishItems)">Save WishList</b-button>
            </b-col>
            <b-col>
                <b-row>
                    <b-col class="text">
                        Who can see this wishlist:
                        <input class="custom-radio" type="radio" id="all" name="color" value="indigo" v-model="all">
                        <label for="all">All</label>
                        <input class="custom-radio" type="radio" id="me" name="color" value="indigo" v-model="me">
                        <label for="me">Me</label>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import WishItem from "@/components/wishItem";
    import ImageToUpload from "@/components/imageToUpload";

    export default {
        name: "createWishlist",
        components: {WishItem, ImageToUpload},
        data(){
            return{
                all:false,
                me:false,
                errorMessage:'',
                /**Столбцы таблицы */
                fields:[
                    { key: "name", label: "Product name" },
                    { key: "description", label: "Description" },
                    { key: "edit", label: " Delete" },
                ],
            }
        },
        methods:{
            addProduct(){
                this.$store.dispatch('newWishlist/addProduct',{text:"", img:null})
            },
            saveProduct(title,wishItems){
               if(this.title != ''){
                   this.errorMessage = ''
                   this.$store.dispatch('wishlists/addWishlist',{title,wishItems})
                   this.me = true
               }
               else{
                   this.errorMessage = 'Table name is not specified. You can\'t find it on your wishlist'
               }
                this.title = ''
                this.$store.dispatch('newWishlist/cleanWishItems')
            },
            deleteProduct(index){
                this.$store.dispatch('newWishlist/deleteProduct',index)
            }
        },
        computed:{
            wishItems:function () {
                return this.$store.getters['newWishlist/wishItems']
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