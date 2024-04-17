<template>
   <ul>
     <li> Titolo: {{title}}</li>
     <li>Titolo Originale: {{ original_title }}</li>
     <li>Lingua: {{ lenguage.toUpperCase() }}</li>
     <li>Voto: {{ vote_average }}</li>
   </ul>
</template>

<script>
    import {store} from '../../store.js';
    export default {
        name: 'CardComponent',
        data() {
            return {
                store,
            }
        },
        props: {
            title: String,
            original_title: String,
            lenguage: String,
            vote_average: Number
        }
    }
</script>

<style lang="scss" scoped>

</style>