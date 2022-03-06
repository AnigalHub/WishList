<template>
    <div id="wishlists">
        <h2>My wishlists</h2>
        <b-table :fields="fields" v-for="item in Wishlists">
            <template #cell(name)='{item}'>
                <input v-model="item.name" class="circle">
            </template>
            <template #cell(edit)='{item}'>
                <b-button type="submit" variant="outline-primary">Show</b-button>
                <b-button type="submit" variant="outline-danger">Delete</b-button>
            </template>
        </b-table>
        <h2>Other wishlists</h2>
        <b-table :fields="fields" :items="items">
            <template #cell(name)='{item}'>
                <input v-model="item.name" class="circle">
            </template>
            <template #cell(edit)='{item}'>
                <b-button type="submit" variant="outline-primary">Show</b-button>
                <b-button type="submit" variant="outline-danger">Delete</b-button>
            </template>
        </b-table>
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
                return this.$store.getters['wishlists/Wishlist']
            },
        },
    }
</script>

<style scoped lang="scss">

</style>