<template>
    <div v-if="store.flag">
        <div v-for="(movie) in store.movies">
            {{movie.title}}
        </div>
    </div>

<div>  
     <CardWrapper/>
    </div>
</template>

<script>
import CardWrapper from './CardWrapper.vue';
import { store } from '../../store.js';

    export default {
        name: 'MainComponent',
        components: {
            CardWrapper
        },
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>