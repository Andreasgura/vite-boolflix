<template>
    <div v-if="store.flag" v-for="(movie) in store.movies">
        <CardComponent :title="movie.title" :original_title="movie.original_title" :lenguage="movie.original_language"
            :vote_average="movie.vote_average" />
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