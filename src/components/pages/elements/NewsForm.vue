<!-- Компонент Форма добавления и редактирования новости -->
<template>
    <form role="form" v-on:submit.prevent="onSubmitNews">
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-6 col-md-4">{{ lang.newsName }}</div>
                <div class="col-6  col-md-8">
                    <input type="text" class="form-control" v-model="item.title"
                           :placeholder="lang.newsName" required>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-6 col-md-4">{{ lang.publishDate }}</div>
                <div class="col-6 col-md-8 ">
                    <date-picker v-model="date" lang="ru" format="dd.MM.yyyy"
                                 :placeholder="(item.date) ? item.date : lang.date"
                                 :first-day-of-week="1"></date-picker>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-2">{{ lang.description }}</div>
                <div class="col-12 col-md-10">
                    <textarea class="form-control" rows="3" placeholder="текст" v-model="item.text"
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
                           v-model="item.youtube">
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
                                <input type="text" class="form-control" v-model="item.seo.url"
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
                                <input type="text" class="form-control" v-model="item.seo.title"
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
                                <input type="text" class="form-control" v-model="item.seo.keywords"
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
                                <textarea class="form-control" rows="3" v-model="item.seo.description"
                                          placeholder="Description"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-group btn-submit">
                        <button type="submit" class="btn btn-default">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapGetters} from 'vuex';
    import FileUploader from './FileUploader';
    import DatePicker from 'vue2-datepicker'

    export default {
        props: ['lang', 'newsItem'],
        name: "news-form",
        data() {
            return {
                date: '',
                item: {
                    id: '',
                    title: '',
                    text: '',
                    img: '',
                    date: '',
                    status: '',
                    posters: [],
                    youtube: '',
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
                'news'
            ])
        },
        methods: {
            //Генерация тела запроса для формы
            onSubmitNews(event) {

                this.item.status = this.catchCheckbox();
                this.item.date = this.date.toLocaleString("ru",
                    {day: 'numeric', month: 'numeric', year: 'numeric'});
                let data = this.item;

                let newsObj = JSON.parse(this.news);
                //Копируем глобальный массив из хранилища
                if (this.item.id) {
                    //Редактирование текущей новости
                    newsObj.splice(this.item.id, 1, data);
                } else {
                    //Добавление новой новости
                    newsObj.push(data);
                }
                //Преобразуем в JSON и перезаписываем ключ в localStorage
                let localNews = JSON.stringify(newsObj);
                localStorage.removeItem("news");
                localStorage.setItem('news', localNews);

                this.sendNewsAjax(localNews);
                event.target.reset();
            },
            sendNewsAjax(data) {
                //Отправка формы ajax-запросом на сервер или перезапись локального хранилища
                this.$http.post('/api', data).then(function (response) {
                    console.log('Фильм добавлен:', response.message);
                }, function (response) {
                    console.log('Соединение не удалось', response.data);
                    this.$store.commit('createNewsStorage', data);
                });
            },
            catchCheckbox() {
                return this.newsItem.checked === 'ВКЛ';
            }
        },
        created() {
            //Заполнение полей формы при инициализации системы реактивности для редактирования новости
            if (this.newsItem) {
                (this.newsItem.id == 0) ? this.item.id = 'zero' : this.item.id = this.newsItem.id;
                this.item.title = this.newsItem.data.title;
                this.item.text = this.newsItem.data.text;
                this.item.date = this.newsItem.data.date;
                this.item.img = this.newsItem.data.img;
                this.item.youtube = this.newsItem.data.youtube;
                this.item.status = this.newsItem.data.status;
                this.item.seo.url = this.newsItem.data.seo.url;
                this.item.seo.title = this.newsItem.data.seo.title;
            }
        },
        components: {
            FileUploader,
            DatePicker
        }
    }
</script>

<style scoped>

    div {
        margin: 0.4rem 0;
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
        justify-content: center;
        margin: 2rem;
    }

    .movies-btn_group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>