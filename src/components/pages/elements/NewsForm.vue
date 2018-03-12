<template>
    <form role="form" v-on:submit.prevent="onSubmit">
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-6 col-md-4">{{lang.newsName}}</div>
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
                    <textarea class="form-control" rows="3" placeholder="текст" v-model="item.description"
                              required></textarea>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-2">{{ lang.mainPic }}</div>
                <div class="col-12 col-md-3" v-if="!item.src">
                    <img class="news-img no-image" src="src/assets/no-image-icon.png" alt="no-image">
                </div>
                <div class="col-12" v-else>
                    <img class="news-img" :src="item.src"/>
                </div>
                <div class="col-8 col-md-6 movies-btn_group">
                    <label for="file" class="btn btn-primary">загрузить фото</label>
                    <input type="file" id="file" style="visibility:hidden;" @change="onFileChange">
                    <button class="btn btn-default" @click="removeImage">Удалить</button>
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
                        <label>URL</label>
                        <input type="text" class="form-control" v-model="item.seo.url"
                               placeholder="URL">
                    </div>
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="item.seo.title"
                               placeholder="Title">
                    </div>
                    <div class="form-group">
                        <label>Keywords</label>
                        <input type="text" class="form-control" v-model="item.seo.keywords"
                               placeholder="Title">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" rows="3" v-model="item.seo.description"
                                  placeholder="Description"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-default">Сохранить</button>
                        <button type="button" class="btn btn-primary">Вернуть базовую версию</button>
                    </div>
                </div>
            </div>
        </div>

    </form>
</template>

<script>
    import FileUploader from './FileUploader';
    import {mapGetters} from 'vuex';

    export default {
        props: ['lang'],
        name: "news-form",
        data() {
            return {
                item: {
                    title: '',
                    description: '',
                    src: '',
                    posters: [],
                    youtube: '',
                    format: [],
                    seo: {
                        url: '',
                        title: '',
                        keywords: '',
                        description: ''
                    }
                },
                computed: {
                    ...mapGetters([
                        'news'
                    ]),
                }
            }
        },
        methods: {
            onSubmit() {
                alert(1);
                console.log(this.news);
                let data = JSON.stringify(this.item);
                this.news.push(data);
                console.log(this.news);
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

    .movies-btn_group {
        display: flex;
    }
</style>