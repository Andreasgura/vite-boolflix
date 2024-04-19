<template>
  <!-- <div>
    <video src="/images/NetflixIntro.mp4" autoplay muted></video>
  </div> -->
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
      store,
      autoplay: true
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
    trendingMoviesDay() {
      axios.get(this.store.baseUrl + this.store.endpoints.trendingMoviesDay, this.store.options).then((response) => {
        this.store.trendingMoviesDay = response.data.results
        
      })
    },
    trendingSeriesDay() {
      axios.get(this.store.baseUrl + this.store.endpoints.trendingSeriesDay, this.store.options).then((response) => {
        this.store.trendingSeriesDay = response.data.results
        
      })
    }

  },
  computed: {
        showDefoult() {
            if (!this.store.options.params.query) {
                this.store.movies = [];
                this.store.series = [];
        } else {
            this.store.flag = false
        }
    }
    },
  created() {
    this.trendingMoviesDay();
    this.trendingSeriesDay();
    this.showDefoult
  }
}
</script>

<style lang="scss" scoped></style>