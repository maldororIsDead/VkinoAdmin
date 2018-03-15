<!-- Компонент отображения мультязычной страницы фильма -->
<template>
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs pull-right">
                        <li class=""><a href="#tab_1-1" data-toggle="tab" aria-expanded="false">Русский</a></li>
                        <li class="active"><a href="#tab_2-2" data-toggle="tab" aria-expanded="true">Украинский</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane" id="tab_1-1">
                            <film-form :lang=lang[0] :movieData="movie"></film-form>
                        </div>
                        <!-- /.tab-pane -->
                        <div class="tab-pane active" id="tab_2-2">
                            <film-form :lang=lang[1] :movieData="movie"></film-form>
                        </div>
                    </div>
                    <!-- /.tab-content -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
    import FileUploader from './elements/FileUploader';
    import FilmForm from './elements/FilmForm';

    export default {
        name: "movie-page",
        data() {
            return {
                movie: {
                    id: '',
                    info: ''
                },
                mark: '',
                lang: [
                    {
                        movieName: "Название фильма",
                        description: "Описание",
                        mainPic: "Главная картинка",
                        galleryPic: "Галерея картинок",
                        picSize: "Размер 1000x190",
                        videoLink: "Ссылка на трейлер"
                    },
                    {
                        movieName: "Назва фільму",
                        description: "Опис",
                        mainPic: "Головне зображення",
                        galleryPic: "Галерея зображень",
                        picSize: "Розмір 1000х190",
                        videoLink: "Посилання на трейлер"
                    },
                ]
            }
        },
        created() {
            //Получение данных из id фильма и их реактивная отправка в поля формы
            this.movie.id = this.$route.params.id;
            for (let i = 0; i < this.movies.length; i++) {
                if (this.movies[i].id === this.movie.id) {
                    this.movie.info = this.movies[i];
                }
            }
        },
        computed: {
            ...mapGetters([
                'movies'
            ])
        },
        components: {
            FileUploader,
            FilmForm
        }
    }
</script>

<style scoped>
    .tab-content {
        min-height: 1100px;
    }

    .form-group img {
        width: 30%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
    }

    .movies-btn_group {
        display: flex;
    }
</style>