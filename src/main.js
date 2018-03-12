import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import 'bootstrap'

import {store} from './store/'

Vue.use(VueRouter)
Vue.use(VueResource)

import Movies from './components/pages/Movies'
import MoviePage from './components/pages/MoviePage'
import News from './components/pages/News'
import NewsPage from './components/pages/NewsPage'
import Statistic from './components/pages/Statistic'

let router = new VueRouter({
    routes: [
        { path: '/', component: Statistic },
        { path: '/movies', component: Movies },
        { path: '/movies/movie-page', component: MoviePage },
        { path: '/news', component: News },
        { path: '/news/news-page', component: NewsPage },
    ]
})
new Vue({
  el: '#app',
  render: h => h(App),
    store,
    router
})
