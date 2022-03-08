<template>
    <div id="wishlists">
        <h2>My wishlists</h2>
        <b-table :fields="fields">
        </b-table>
        <div v-for="wishlist in Wishlists" :key="index" class="wishlist">
            <b-row>
                <b-col cols="7" class="text">
                    {{wishlist.title}}
                </b-col>
                <b-col>
                    <b-button type="submit" variant="outline-primary">Show</b-button>
                    <b-button type="submit" variant="outline-danger">Delete</b-button>
                </b-col>
            </b-row>
        </div>
        <h2>Other wishlists</h2>
        <b-table :fields="fields">
        </b-table>
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
                items: [
                   {name: ''},
                ]
            }
        },
        computed:{
            Wishlists:function () {
                return this.$store.getters['wishlists/Wishlists']
            },
        },
    }
</script>

<style scoped lang="scss">

</style>