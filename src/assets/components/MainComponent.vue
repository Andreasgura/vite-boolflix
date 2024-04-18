<template>
    <CardList listTitle="Film" :list="store.movies"/>
    <CardList listTitle="Serie" :list="store.series"/>
</template>

<script>
import { store } from '../../store.js';
import CardList from './CardList.vue';

export default {
    name: 'MainComponent',
    components: {
        CardList,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped></style>