<template>
    <div id="wishlists">
        <h2>My wishlists</h2>
        <b-table :fields="fields">
        </b-table>
        <div v-if="Wishlists.length == 0" class="wishlist emptyTable">
            The table is empty. No wishlists have been created and saved.
        </div>
        <div v-else v-for="wishlist in Wishlists"  class="wishlist">
            <b-row>
                <b-col cols="7" class="text">
                        {{wishlist.title}}
                </b-col>
                <b-col>
                    <b-button type="submit" variant="outline-primary" @click="showModal()" >Show</b-button>
                    <b-button type="submit" variant="outline-danger">Delete</b-button>
                </b-col>
            </b-row>
        </div>
        <h2>Other wishlists</h2>
        <b-table :fields="fields">
        </b-table>
        <div class="wishlist emptyTable">
            The table is empty. No wishlists have been created and saved.
        </div>
        <!--
        <div class="wishlist">
            <b-row>
                <b-col cols="7" class="text">
                </b-col>
                <b-col>
                    <b-button type="submit" variant="outline-primary">Show</b-button>
                    <b-button type="submit" variant="outline-danger">Delete</b-button>
                </b-col>
            </b-row>
        </div>
        -->
        <b-modal ref="modalWishlist">
            <b-table :fields="fieldsWishlists">
            </b-table>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "wishlists",
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
                items: [
                   {name: ''},
                ]
            }
        },
        computed:{
            Wishlists:function () {
                let array = this.$store.getters['wishlists/Wishlists']
                console.log(array)
                console.log(array.length)
                console.log(array.title)
                return this.$store.getters['wishlists/Wishlists']
            },
        },
        methods:{
            showModal(){
                this.$refs['modalWishlist'].show()
            },
        }
    }
</script>

<style scoped lang="scss">

</style>