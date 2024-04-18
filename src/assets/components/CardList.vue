<template>
    <div class="container">
        <h2>{{listTitle}}</h2>
        <div class="row">
            
                <div class="col-4 g-2 " v-for="(card) in list">

                    <CardComponent :item="card" />

                </div>
           
        </div>
    </div>
    
    


</template>

<script>
import { store } from '../../store.js';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    data() {
        return {
            store,
        }
    },
    props: {
        listTitle: String,
        list: Array
    }
}
</script>

<style lang="scss" scoped></style>