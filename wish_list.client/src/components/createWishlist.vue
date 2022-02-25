<template>
    <div class="createWishlist">
        <b-input-group class="w-100" prepend="Wishlist Title" ><b-form-input></b-form-input></b-input-group>
        <b-table :fields="fields" :items="items">
            <template #cell(name)='{item}'>
                <input v-model="item.name" class="circle">
            </template>
            <template #cell(description)='{item}' >
                <textarea v-model="item.description" class="descr"/>
            </template>
            <template #cell(edit)='{item}'>
                <b-button type="submit" variant="outline-success">✓</b-button>
                <b-button type="submit" variant="outline-danger">X</b-button>
            </template>
        </b-table>
        <b-button class="add" variant="outline-secondary">Add Product</b-button>
        <b-row>
            <b-col>
                <b-button class="save" variant="outline-success">Save WishList</b-button>
            </b-col>
            <b-col>
                <b-row>
                    <b-col cols="4" class="who">Who can see:</b-col>
                    <b-col class="whois">
                        <input type="checkbox" class="custom-checkbox" id="all" name="all" value="yes">
                        <label for="all">All</label>
                        <input type="checkbox" class="custom-checkbox" id="me" name="me" value="yes">
                        <label for="me">Me</label>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "createWishlist",
        data(){
            return{
                /**Столбцы таблицы */
                fields:[
                    { key: "name", label: "Product name" },
                    { key: "description", label: "Description" },
                    { key: "edit", label: "Edit | Delete" },
                ],
                items: [
                    {name: '', description: '' },
                    {name: '', description: '' },
                    {name: '', description: '' },
                ]
            }
        }
    }
</script>

<style lang="scss">
    th{
        background: #e9ecef !important;
        text-align: center !important;
    }
    .table > :not(:first-child) {
        border-top: none !important;
    }
</style>
<style scoped lang="scss">
    .custom-checkbox:checked+label::before {
        border-color: #198754;
        background-color: #198754;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-checkbox+label {
        width: 100%;
        display: block;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
     .createWishlist{
         padding: 3%;
         min-height: 75vh;
         height: 100%;
         background: white;
         box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.35);
     }
     .input-group-text{
         font-size: 1.25rem !important;
         font-family: 'Roboto Serif', sans-serif;
         font-weight: 500;
     }
     .circle{
         background: #f7f9fc;
         width: 160px;
         height: 150px;
         display: block;
         margin: 0 auto;
         border-radius: 50%;
     }
     .descr{
         background: #f7f9fc;
         width: 100%;
         height: 125px !important;
         display: block;
         margin: 2% -5% auto;
     }
     .add,.save{
         width: 100%;
         font-size: 1.25rem !important;
         font-family: 'Roboto Serif', sans-serif;
         margin-bottom: 2%;
     }
     .who{
         padding-top: 2%;
         font-size: 1.5rem !important;
         font-family: 'Roboto Serif', sans-serif;
     }
     .whois{
         font-size: 1.5rem !important;
         font-family: 'Roboto Serif', sans-serif;
     }
     table input, table textarea{
         border: 1px solid #bdc0c2 !important;
     }
     table{
         box-shadow: 4px 3px 3px -3px rgba(34, 60, 80, .9);
         margin-top: 3%;
         font-size: 1.25rem !important;
         font-family: 'Roboto Serif', sans-serif;
     }
     table button{
         font-size: 1.5rem !important;
         font-family: 'Ubuntu Condensed', sans-serif;
         width: 40%;
         margin-top: 15%;
         margin-right: 8%;
     }
     button{
         height: 45px;
         box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.7);
     }
     .input-group{
         box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.7);
     }
</style>