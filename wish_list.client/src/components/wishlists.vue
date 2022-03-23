<template>
    <div id="wishlists">
        <h2>My wishlists</h2>
        <b-table :fields="fields">
        </b-table>
        <div v-if="wishlists.length == 0" class="wishlist emptyTable">
            The table is empty. No wishlists have been created and saved.
        </div>
        <div v-else v-for="(wishlist,index) in wishlists" :key="index" class="wishlist">
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
            <div v-for="(wishItem, index) in wishlist" :key="index">
                <WishItem  v-model="wishlist[index]" @delete="deleteProduct(index)" />
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
    import WishItem from "@/components/wishItem";
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
                selectedWishlist: {wishItems: null},
            }
        },
        async created() {
            const result = await axios.get('wishlist')
            this.$store.commit("wishlists/setSavedWishlists", result.data)
        },
        computed:{
            wishlists:function () {
                return this.$store.getters['wishlists/wishlists']
            },
            wishlist:function () {
                return this.$store.getters['wishlists/wishlist']
            },
        },
        methods:{
            showModal(index){
                this.selectedWishlist = this.wishlists[index]
                this.$store.dispatch('wishlists/copyOfWishesInWishlists',this.selectedWishlist.wishItems)
                this.$refs['modalWishlist'].show()
            },
            deleteWishlist(index){
                this.$store.dispatch('wishlists/deleteWishlist',this.wishlists[index])
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