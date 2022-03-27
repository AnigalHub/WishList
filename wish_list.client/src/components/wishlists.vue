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
            <div v-for="(wishItem, index) in selectedWishlist.wishItems" :key="index">
                <WishItem  v-model="selectedWishlist.wishItems[index]" @delete="deleteProduct(index)" />
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
                wishesToDelete: [],
            }
        },
        async created() {
            const result = await axios.get('allWishlists')
            this.$store.commit("wishlists/setSavedWishlists", result.data)
        },
        computed:{
            wishlists:function () {
                return this.$store.getters['wishlists/wishlists']
            },
            selectedWishlist:function () {
                return this.$store.getters['wishlists/selectedWishlist']
            },
        },
        methods:{
            showModal(index){
                this.$store.dispatch('wishlists/copyOfWishesInWishlists',this.wishlists[index])
                this.$refs['modalWishlist'].show()
            },
           async deleteWishlist(index){
                await this.$store.dispatch('wishlists/deleteWishlist',this.wishlists[index])
                const result = await axios.get('allWishlists')
                this.$store.commit("wishlists/setSavedWishlists", result.data)
            },
           async deleteProduct(index){
                if(this.selectedWishlist.wishItems[index].id){
                    this.wishesToDelete.push(this.selectedWishlist.wishItems[index].id)
                    this.selectedWishlist.wishItems.splice(index, 1)
                }
            },
            addProduct(){
                this.$store.dispatch('wishlists/addWishItem',{text:"", img:null})
            },
           async saveWishlist(){
                await axios.post("deleteWishItem", {wishesToDelete: this.wishesToDelete})
                const indexWishlist = this.wishlists.findIndex(x => x.id == this.selectedWishlist.id)
                console.log(indexWishlist )
                this.wishlists[indexWishlist] = this.selectedWishlist
                this.$refs['modalWishlist'].hide()
                this.wishesToDelete = []

            }
        }
    }
</script>

<style scoped lang="scss">

</style>