<template>
    <div v-if="this.store.movies.length > 0">
        <CardList listTitle="Film" :list="store.movies" />
        <CardList listTitle="Serie Tv" :list="store.series" />
    </div>
    <div v-if="store.flag">
        <CardList listTitle="Film di tendenza oggi" :list="store.trendingMoviesDay" />
        <CardList listTitle="Serie Tv di tendenza oggi" :list="store.trendingSeriesDay" />
    </div>    
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
    },
    
}
</script>

<style lang="scss" scoped></style>