<!-- Компонент отображения фильмов -->
<template>
    <section class="content poster-movies">
        <h3 class="box-title">Cписок фильмов текущих</h3>
        <div class="row poster-movies_list">
            <div v-for="(movie, index) in moviesActual" class="movie-actual col-lg-3 col-xs-6">
                <div class="movie-img">
                    <img :src="movie.src" :alt="movie.title">
                </div>
                <div class="movie-title">
                    <router-link :to="{name: 'movie', params: {id: movie.id}}">
                        {{ movie.title }}
                    </router-link>
                </div>
            </div>
        </div>
        <h3 class="box-title">Cписок фильмов которые покажут скоро</h3>
        <div class="row poster-movies_list">
            <div v-for="(movie, index) in moviesPremiere" class="movie-actual col-lg-3 col-xs-6">
                <div class="movie-img">
                    <img :src="movie.src" :alt="movie.title">
                </div>
                <div class="movie-title">
                    <router-link :to="{name: 'movie', params: {id: movie.id}}">
                        {{ movie.title }}
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "movies",
        computed: {
            ...mapGetters([
                'movies',
                'moviesView'
            ]),
            moviesActual() {
                //Сортировка массива по наличию фильма в прокате
                return this.movies.filter(function (movie) {
                    if (movie.rentalStatus === true)
                        return movie
                })
            },
            moviesPremiere() {
                //Сортировка массива по предстоящим премьерам
                return this.movies.filter(function (movie) {
                    if (movie.rentalStatus === false)
                        return movie
                })
            }
        }
    }
</script>

<style scoped>
    .box-title {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .movie-img img {
        width: 100%;
    }

    .movie-title {
        margin: 1rem;
    }

    .movie-title a {
        color: #000;
        font-size: 1.6rem;
    }

    @media only screen and (min-width: 480px) {
        .movie-img img {
            width: auto;
            max-height: 325px;
        }
    }
</style>