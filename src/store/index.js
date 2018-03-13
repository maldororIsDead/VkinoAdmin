import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        movies: [],
        news: [],
   /*     movies : require('./movies.json'),
        news: require('./news.json'),*/
        arr : "store"
    },
    getters: {
        movies(state) {
            return state.movies;
        },
        news(state) {
            return state.news;
        },
        arr(state) {
            return state.arr;
        }
    },
    mutations: {
        createMovieStorage(state, payload) {
            state.movies = payload;
        },
        createNewsStorage(state, payload) {
            state.news = payload;
        }
    },
    actions: {

    },

});