<template>
    <div class="container">
        <h2>{{ listTitle }}</h2>
        <div class="dflex">
            <div class="mycol" v-for="(card) in list">
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

<style lang="scss" scoped>

.dflex {
    display: flex; 
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
    display: none;
}
}
</style>