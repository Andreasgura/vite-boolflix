<template>
  <HeaderComponent @findmovies="printMoviesAndSeries" />
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
      this.store.flagMovies = false
      axios.get(this.store.baseUrl + this.store.endpoints.movies, this.store.options).then((response) => {
        console.log(response.data);
        this.store.movies = response.data.results
        console.log(this.store.movies);
        this.store.flagMovies = true
      })
    },
    searchSeries() {
      this.store.flagSeries = false
      axios.get(this.store.baseUrl + this.store.endpoints.series, this.store.options).then((response) => {
        this.store.series = response.data.results
        this.store.flagSeries = true
      })
    },
    printMoviesAndSeries() {
      this.searchMovies()
      this.searchSeries()
    },

  },
  created() {
    // this.searchMovies()
  }
}
</script>

<style lang="scss" scoped></style>