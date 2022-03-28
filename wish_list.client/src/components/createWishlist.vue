<template>
    <div id="createWishlist">
        <b-input-group class="w-100" prepend="Wishlist Title" ><b-form-input v-model="title"></b-form-input></b-input-group>
        <div class="text error" v-if="title == ''">{{errorMessage}}</div>
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
                        Wishlist is visible to all users:
                        <input class="custom-checkbox" type="checkbox" id="all" v-model="all" >
                        <label for="all"></label>
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
           async saveProduct(title,wishItems){
               if(this.title == ''){
                   this.errorMessage = 'Table name is not specified. You can\'t find it on your wishlist'
                   return
               }
               await this.$store.dispatch('wishlists/addWishlist',{title,wishItems})
               await this.$store.dispatch('newWishlist/cleanWishItems')
               this.title = ''
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