<!-- Родительский компонент -->
<template>
    <div id="app">
        <!-- Main Header -->
        <div class="wrapper">
            <app-header></app-header>
            <app-sidebar></app-sidebar>
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <section class="content">
                    <router-view></router-view>
                </section>
            </div>
            <!-- /.content-wrapper -->
            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
                </div>
                <strong>Copyright &copy; 2018 <a href="https://github.com/maldororIsDead/VkinoAdmin">
                    Dmitry Kartamyshev</a>.</strong> All rights reserved.
            </footer>
            <control-sidebar></control-sidebar>
            <div class="control-sidebar-bg"></div>
        </div>
    </div>
</template>

<script>
    import AppHeader from './components/Header';
    import AppSidebar from './components/Sidebar';
    import ControlSidebar from './components/pages/elements/ControlSidebar';

    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex';

    export default {
        name: 'app',
        data() {
            return {
                movies: '',
                news: ''
            }
        },
        methods: {
            getMoviesJSON: function () {
                //получение данных о фильмах и запись в локальное хранилище данных
                this.$http.get('http://kino-teatr.ua:8081/services/api/film/48519?apiKey=').then(response => {
                    let serverMovies = response.body;
                    if (localStorage.getItem('movies') === null) {
                        localStorage.setItem('movies', JSON.stringify(serverMovies));
                    } else {
                        localStorage.removeItem('movies');
                        localStorage.setItem('movies', JSON.stringify(serverMovies));
                    }
                    let localMovies = localStorage.getItem('movies');
                    this.movies = JSON.parse(localMovies);
                }, function (error) {
                    console.log(error);
                    let localMovies = localStorage.getItem('movies');
                    this.movies = JSON.parse(localMovies);
                    this.$store.commit('createMovieStorage', this.movies);

                    let initialMovies = localStorage.getItem('library');
                    this.$store.commit('createMovieLib', initialMovies);
                })
            },
            getNewsJSON: function () {
                //получение данных с новостями
                this.$http.get('http://kino-teatr.ua:8081/services/api/film/48519?apiKey=').then(response => {
                    let serverNews = response.body;
                    if (localStorage.getItem('news') === null) {
                        localStorage.setItem('news', JSON.stringify(serverNews));
                    } else {
                        localStorage.removeItem('news');
                        localStorage.setItem('news', JSON.stringify(serverNews));
                    }
                    this.news = localStorage.getItem('news');
                }, function (error) {
                    console.log(error);
                    this.news = localStorage.getItem('news');
                    this.$store.commit('createNewsStorage', this.news);
                })
            },
            getLocalAdminData() {
                //Заглушка для симуляции первого подключения к серверу с получением первичных данных
                let serverMovies = require('./store/movies.json');
                let serverNews = require('./store/news.json');
                if (localStorage.getItem('library') === null) {
                    localStorage.setItem('library', JSON.stringify(serverMovies));
                }
                if (localStorage.getItem('movies') === null) {
                    localStorage.setItem('movies', JSON.stringify(serverMovies));
                }
                if (localStorage.getItem('news') === null) {
                    localStorage.setItem('news', JSON.stringify(serverNews));
                }
            }
        },
        created() {
            //Имитация загрузки с сервера
            this.getLocalAdminData();
            this.getMoviesJSON();
            this.getNewsJSON();
        },
        components: {
            AppHeader,
            AppSidebar,
            ControlSidebar
        }
    }
</script>

<style>

</style>
