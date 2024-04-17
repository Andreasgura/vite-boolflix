<template>
    <div>
        CardWrapper
        <CardComponent/>
    </div>
</template>

<script>
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardWrapper',
        components: {
            CardComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>