<template>
    <div id="wishlists">
        <h2>My wishlists</h2>
        <b-table :fields="fields">
        </b-table>
        <div v-if="Wishlists.length == 0" class="wishlist emptyTable">
            The table is empty. No wishlists have been created and saved.
        </div>
        <div v-else v-for="(wishlist,index) in Wishlists" :key="index" class="wishlist">
            <b-row>
                <b-col cols="7" class="text">
                      <input v-model="wishlist.title">
                </b-col>
                <b-col>
                    <b-button type="submit" variant="outline-primary" @click="showModal(index)">Show</b-button>
                    <b-button type="submit" variant="outline-danger" @click="deleteWishlist(index)">Delete</b-button>
                </b-col>
            </b-row>
        </div>
        <h2>Other wishlists</h2>
        <b-table :fields="fields">
        </b-table>
        <div class="wishlist emptyTable">
            The table is empty. No wishlists have been created and saved.
        </div>
        <b-modal ref="modalWishlist">
            <b-table :fields="fieldsWishlists">
            </b-table>
            <div v-for="(wishItem, index) in Wishlist" :key="index">
                <WishItem  v-model="Wishlist[index]" @delete="deleteProduct(index)" />
            </div>
            <b-row class="buttons">
                <b-col>
                    <b-button class="add" @click="addProduct()" variant="outline-secondary">Add</b-button>
                </b-col>
                <b-col>
                    <b-button class="save" variant="outline-success" @click="saveWishlist()">Save</b-button>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>

<script>
    import WishItem from "@/components/WishItem";

    import axios from 'axios'

    export default {
        name: "wishlists",
        components: {WishItem},
        data(){
            return{
                /**Столбцы таблицы */
                fields:[
                    { key: "title", label: "Wishlist Title" },
                    { key: "edit", label: "Control buttons" },
                ],
                /**Столбцы таблицы */
                fieldsWishlists:[
                    { key: "name", label: "Product name" },
                    { key: "description", label: "Description" },
                    { key: "edit", label: "Edit | Delete" },
                ],
                selectedWishlist: {WishItems: null},
            }
        },
        async created() {
            const result = await axios.get('wishlist')
            this.$store.commit("wishlists/setSavedWishlists", result.data)
        },
        computed:{
            Wishlists:function () {
                return this.$store.getters['wishlists/Wishlists']
            },
            Wishlist:function () {
                return this.$store.getters['wishlists/Wishlist']
            },
        },
        methods:{
            showModal(index){
                this.selectedWishlist = this.Wishlists[index]
                this.$store.dispatch('wishlists/copyOfWishesInWishlists',this.selectedWishlist.WishItems)
                this.$refs['modalWishlist'].show()
            },
            deleteWishlist(index){
                this.$store.dispatch('wishlists/deleteWishlist',index)
            },
            deleteProduct(index){
                this.$store.dispatch('wishlists/deleteWishItem',index)
            },
            addProduct(){
                this.$store.dispatch('wishlists/addWishItem',{text:"", img:null})
            },
            saveWishlist(){
                this.selectedWishlist.wishes = this.Wishlist
                this.$refs['modalWishlist'].hide()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>