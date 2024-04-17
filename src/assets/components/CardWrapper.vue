<template>
    <div v-if="store.flagMovies" v-for="(movie) in store.movies">
        <CardComponent :image="store.baseImg + movie.poster_path" :title="movie.title" :original_title="movie.original_title" :lenguage="movie.original_language"
            :vote_average="movie.vote_average" />
    </div>
    <div v-if="store.flagSeries" v-for="(serie) in store.series"
    style="background-color: aquamarine;">
        <CardComponent :image="store.baseImg + serie.poster_path" :title="serie.name" :original_title="serie.original_name" :lenguage="serie.original_language"
            :vote_average="serie.vote_average" />
    </div>


</template>

<script>
    import { store } from '../../store.js';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardWrapper',
        components: {
            CardComponent
        },
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped></style>