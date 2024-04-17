<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center ">
            <div>
                netflix
            </div>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
header {
    background-color: $headerbg;
    color: white
}
</style>