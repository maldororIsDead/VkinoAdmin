import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        movies : require('./movies.json'),
        news: require('./news.json'),
    },
    getters: {
        movies(state) {
            return state.movies;
        },
        news(state) {
            return state.news;
        }
    },
    mutations: {

    },
    actions: {

    },

});