<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center ">
            <div>
                <img class="logo" src="/public/netflix_logo.png" alt="logo">
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                v-model="store.options.params.query">
                <button class="btn btn-outline-success" type="submit"
                @click.prevent="$emit('findmovies')"
                @keyup.enter.prevent="$emit('findmovies')">
                Search
            </button>
            </form>
        </div>
    </header>
</template>

<script>
import { store } from '../../store.js';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
        }
    },

}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.logo {
    width: 150px
}
header {
    background-color: $headerbg;
    color: white
}
</style>