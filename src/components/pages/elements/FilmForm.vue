<!-- Компонент Форма добавления и редактирования фильма -->
<template>
    <form role="form" v-on:submit.prevent="onSubmit">
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-6 col-md-4">{{ lang.movieName }}</div>
                <div class="col-6  col-md-8">
                    <input type="text" class="form-control" v-model="movie.title"
                           :placeholder="lang.movieName" required>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-2">{{ lang.description }}</div>
                <div class="col-12 col-md-10">
                    <textarea class="form-control" rows="3" placeholder="текст" v-model="movie.description"
                              required></textarea>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-2">{{ lang.mainPic }}</div>
                <div class="col-6 col-md-10 col-lg-2">
                    <file-uploader></file-uploader>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-12">{{ lang.galleryPic }}</div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-6 col-md-2"></div>
                <div class="col-6 col-md-4 col-lg-2">
                    <file-uploader></file-uploader>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                    <file-uploader></file-uploader>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                    <file-uploader></file-uploader>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                    <file-uploader></file-uploader>
                </div>
                <div class="col-6 col-md-4 col-lg-2">
                    <file-uploader></file-uploader>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-2">{{ lang.videoLink }}</div>
                <div class="col-12 col-md-10">
                    <input type="text" class="form-control" placeholder="Ссылка на видео в youtube"
                           v-model="movie.youtube">
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-12 col-md-3">Тип кино</div>
                <div class="col-6 col-md-3">
                    <label>
                        <input type="checkbox" v-model="movie.format" value="3D" class="minimal-red">
                        3D
                    </label>
                </div>
                <div class="col-6 col-md-3">
                    <label>
                        <input type="checkbox" v-model="movie.format" value="2D" class="minimal-red" checked>
                        2D
                    </label>
                </div>
                <div class="col-6 col-md-3">
                    <label>
                        <input type="checkbox" v-model="movie.format" value="IMAX" class="minimal-red">
                        IMAX
                    </label>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-2">SEO блок</div>
                <div class="col-12 col-md-10">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-2 col-md-1">
                                <div>URL</div>
                            </div>
                            <div class="col-10 col-md-11">
                                <input type="text" class="form-control" v-model="movie.seo.url"
                                       placeholder="URL">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-2 col-md-1">
                                <div>Title</div>
                            </div>
                            <div class="col-10 col-md-11">
                                <input type="text" class="form-control" v-model="movie.seo.title"
                                       placeholder="Title">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-2 col-md-1">
                                <div>Keywords</div>
                            </div>
                            <div class="col-10 col-md-11">
                                <input type="text" class="form-control" v-model="movie.seo.keywords"
                                       placeholder="Title">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-2 col-md-1">
                                <div>Description</div>
                            </div>
                            <div class="col-10 col-md-11">
                                <textarea class="form-control" rows="3" v-model="movie.seo.description"
                                          placeholder="Description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="form-group btn-submit">
                <button type="submit" class="btn btn-default">Сохранить</button>
                <button type="button" @click="getDataFromLib" class="btn btn-primary">Вернуть базовую версию</button>
            </div>
        </div>
    </form>
</template>

<script>
    import FileUploader from './FileUploader';
    import {mapGetters} from 'vuex';

    export default {
        props: ['lang', 'movieData'],
        name: "film-form",
        data() {
            return {
                movie: {
                    id: '',
                    title: '',
                    description: '',
                    src: 'src/assets/no-film.png',
                    posters: ['', '', '', '', '', ''],
                    youtube: '',
                    format: [],
                    rentalStatus: true,
                    seo: {
                        url: '',
                        title: '',
                        keywords: '',
                        description: ''
                    }
                }
            }
        },
        computed: {
            ...mapGetters([
                'news',
                'movies',
                'moviesLib'
            ])
        },
        created() {
            //Заполнение полей формы при инициализации системы реактивности для редактирования фильма
            if (this.movieData) {
                (this.movieData.id === 0) ? this.movie.id = 'zero' : this.movie.id = this.movieData.id;
                this.movie.title = this.movieData.info.title;
                this.movie.description = this.movieData.info.description;
                this.movie.src = this.movieData.info.src;
                this.movie.youtube = this.movieData.info.youtube;
                this.movie.format = this.movieData.info.format;
            }
        },
        methods: {
            //Генерация тела запроса для формы
            onSubmit(event) {
                //сериализация данных формы
                let moviesObj = this.movies;
                let data = this.movie;

                //Получение индекса элемента в массиве с заданным id для возможности его редактирования
                if (this.movieData.id) {
                    let index = '';
                    for (let i = 0; i < moviesObj.length; i++) {
                        if (moviesObj[i].id === this.movieData.id) {
                            index = i;
                        }
                    }
                    moviesObj.splice(index, 1, data);
                } else {
                    //Добавление нового фильма
                    this.movie.id = this.randomInteger(1, 1000);
                    this.movie.src = 'src/assets/no-film.png';
                    let data = this.movie;
                    moviesObj.push(data);
                }
                //Преобразуем в JSON и перезаписываем ключ в localStorage

                let localMovies = JSON.stringify(moviesObj);
                localStorage.removeItem("movies");
                localStorage.setItem('movies', localMovies);
                this.sendMoviesAjax(localMovies);
                event.target.reset();
            },
            sendMoviesAjax(data) {
                //Отправка формы ajax-запросом на сервер или перезапись локального хранилища фильмов
                this.$http.post('/api', data).then(function (response) {
                    console.log('Фильм добавлен:', response.message);
                }, function (response) {
                    console.log('Соединение  не удалось', response.data);
                    this.$store.commit('createMoviesStorage', data);
                });
            },
            getDataFromLib() {
                //Обращение к исходной локальной библиотеке для восстановления базовой версии фильма
                let initialMovies = JSON.parse(this.moviesLib);

                for (let i = 0; i < initialMovies.length; i++) {
                    if (initialMovies[i].id === this.movie.id) {
                        this.movie.title = initialMovies[i].title;
                        this.movie.description = initialMovies[i].description;
                        this.movie.src = initialMovies[i].src;
                        this.movie.youtube = initialMovies[i].youtube;
                        this.movie.format = initialMovies[i].format;
                    }
                }
            },
            randomInteger(min, max) {
                let rand = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
            }
        },
        components: {
            FileUploader
        }
    }
</script>

<style scoped>
    div {
        margin-bottom: 0.8rem;
    }

    .news-img {
        max-height: 100px;
        width: auto;
    }

    .form-group img {
        width: 30%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
    }

    .btn-submit {
        display: flex;
        justify-content: space-around;
        margin: 2rem;
    }

    .movies-btn_group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>