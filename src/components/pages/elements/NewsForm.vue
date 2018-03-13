<template>
    <form role="form" v-on:submit.prevent="onSubmitNews">
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-6 col-md-4">{{ lang.newsName }}</div>
                <div class="col-6  col-md-8">
                    <input type="text" class="form-control" v-model="item.title"
                           placeholder="Название новости" required>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-6 col-md-4">{{ lang.publishDate }}</div>
                <div class="col-6 col-md-8 ">
                    <div class="input-group date">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <input type="text" class="form-control pull-right" id="datepicker">
                    </div>
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
                <!--    <div class="col-12 col-md-3" v-if="!item.img">
                        <img class="news-img no-image" src="src/assets/no-image-icon.png" alt="no-image">
                    </div>
                    <div class="col-12" v-else>
                        <img class="news-img" :src="item.img"/>
                    </div>
                    <div class="col-8 col-md-6 movies-btn_group">
                        <label for="file" class="btn btn-primary">загрузить фото</label>
                        <input type="file" id="file" style="visibility:hidden;" @change="onFileChange">
                        <button class="btn btn-default" @click="removeImage">Удалить</button>
                    </div>-->
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


    export default {
        props: ['lang', 'newsItem'],
        name: "news-form",
        data() {
            return {
                item: {
                    title: '',
                    text: '',
                    img: '',
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
            onSubmitNews() {
                console.log(this.news);
                let data = this.item;
                let newsObj = JSON.parse(this.news);
                newsObj.push(data);
                let localNews = JSON.stringify(newsObj);
                localStorage.removeItem("news");
                localStorage.setItem('news', localNews);
                let newJSONnews = localStorage.getItem('news');

                this.$http.post('/api', newJSONnews).then(function (response) {
                    console.log('Фильм добавлен:', response.message);
                }, function (response) {
                    console.log('Соединение не удалось', response.data);
                    this.$store.commit('createNewsStorage', newJSONnews);
                });
            }
        },
        created() {
            if (this.newsItem) {
                this.item.title = this.newsItem.title;
                this.item.text = this.newsItem.text;
                this.item.img = this.newsItem.img;
                this.item.youtube = this.newsItem.youtube;
                this.item.status = this.newsItem.status;
                this.item.seo.url = this.newsItem.seo.url;
                this.item.seo.title = this.newsItem.seo.title;
            }
        },
        components: {
            FileUploader
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