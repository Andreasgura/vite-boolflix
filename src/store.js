import {reactive} from 'vue' ;

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/', 
    endpoints: {
        movies: 'search/movie',
        series: 'search/tv',
        trendingMoviesDay: 'trending/movie/day',
        trendingSeriesDay: 'trending/tv/day'
    },
    options : {
        params: {
            api_key: 'ff672fdd78ae5bfe27354b922fce104b',
            query: '',
            language: 'it-IT'
        }
    },
    flagMovies: false, 
    flagSeries: false,
    flag: true,
    movies: [],
    series: [],
    trendingMoviesDay: [],
    trendingSeriesDay: [],
    baseImg: 'https://image.tmdb.org/t/p/w342',
    
})