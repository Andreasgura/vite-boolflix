<template>
  <HeaderComponent @findmovies="searchMovies"/>
  <MainComponent />
</template>

<script>
import HeaderComponent from './assets/components/HeaderComponent.vue'
import MainComponent from './assets/components/MainComponent.vue'
import { store } from './store.js'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchMovies() {
      this.store.flag = false
      axios.get(this.store.baseUrl + this.store.endpoints.movies, this.store.options).then((response) => {
        console.log(response.data);
        this.store.movies = response.data.results
        console.log(this.store.movies);
        this.store.flag = true
      })
    }
  },
  created() {
    // this.searchMovies()
  }
}
</script>

<style lang="scss" scoped></style>