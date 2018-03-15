import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import {store} from './store/'

//Скрипт входа в приложение

Vue.use(VueRouter)
Vue.use(VueResource)

//Подключение компонентов для роутинга
import Movies from './components/pages/Movies'
import MoviePage from './components/pages/MoviePage'
import News from './components/pages/News'
import NewsPage from './components/pages/NewsPage'
import Statistic from './components/pages/Statistic'

//Роутинг
let router = new VueRouter({
    routes: [
        {path: '/', component: Statistic},
        {path: '/movies', component: Movies},
        {path: '/movies/movie-page', component: MoviePage},
        {path: '/movies/movie-page/:id', name: 'movie', component: MoviePage},
        {path: '/news', component: News},
        {path: '/news/news-page', component: NewsPage},
        {path: '/news/news-page/:id', name: 'news', component: NewsPage}
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})
