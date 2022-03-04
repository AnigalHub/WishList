<template>
    <div id="wishlists">
        <h2>My wishlists</h2>
        <b-table :fields="fields" :items="items">
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
                    {name: '', description: '' },
                ]
            }
        }
    }
</script>
<style lang="scss">
    #wishlists{
        thead th:first-child{
            width: 60%;
        }
    }

</style>
<style scoped lang="scss">
    /*таблица*/
    table{
        margin-top: 2%;
        font-size: 1.25rem ;
        font-family: 'Roboto Serif', sans-serif;
    }
    /*кнопки в таблице*/
    table button{
        font-size: 1.5rem ;
        font-family: 'Ubuntu Condensed', sans-serif;
        width: 46%;
        margin-right: 3%;
    }
    /*кнопки, таблица*/
    button,table{box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.8);}
</style>