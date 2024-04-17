<template>
    <div>
        Main
        
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