<template>
    <ul>
        <li><img :src="image" alt=""></li>
        <li> Titolo: {{ title }}</li>
        <li>Titolo Originale: {{ original_title }}</li>
        <li>Lingua: {{ lenguage.toUpperCase() }}</li>
        <li>
            <span>voto: </span>

            <i class="fa-solid fa-star" v-for="n in vote_average"></i>

        </li>
        
    </ul>
</template>

<script>
import { store } from '../../store.js';
export default {
    name: 'CardComponent',
    data() {
        return {
            store,
        }
    },
    props: {
        image: String,
        title: String,
        original_title: String,
        lenguage: String,
        vote_average: Number
    }
}
</script>

<style lang="scss" scoped>
.fa-star {
    color: yellow;
}
</style>