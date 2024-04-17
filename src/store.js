import {reactive} from 'vue' ;

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    
    endpoints: {
        movies: 'discover/movie',
        series: 'discover/tv'
    },
    options : {
        params: {
            api_key: 'ff672fdd78ae5bfe27354b922fce104b',
            query: 'a'
        }
    },
        
    movies: [],
    series: [],
})