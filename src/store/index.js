import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//Локальное хранилище данных
export const store = new Vuex.Store({
    state: {
        movies: [],
        news: [],
        moviesLib: []
    },
    getters: {
        //Получение текущих фильмов
        movies(state) {
            return state.movies;
        },
        //Получение текущих новостей
        news(state) {
            return state.news;
        },
        //Получение фильмов из исходного набора данных
        moviesLib(state) {
            return state.moviesLib;
        }
    },
    mutations: {
        //Заполнение локального массива Фильмов
        createMovieStorage(state, payload) {
            state.movies = payload;
        },
        //Заполнение локального массива Новостей
        createNewsStorage(state, payload) {
            state.news = payload;
        },
        //Заполнение локального массива исходных Фильмов (однократное)
        createMovieLib(state, payload) {
            state.moviesLib = payload;
        }
    },
    actions: {

    },

});