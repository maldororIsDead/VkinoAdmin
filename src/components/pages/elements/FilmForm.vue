<template>
    <form role="form" v-on:submit.prevent="onSubmit">
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-6 col-md-4">{{lang.movieName}}</div>
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
                <div class="col-12 col-md-3" v-if="!movie.src">
                    <img class="news-img no-image" src="src/assets/no-image-icon.png" alt="no-image">
                </div>
                <div class="col-12" v-else>
                    <img class="news-img" :src="movie.src"/>
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
                           v-model="movie.youtube">
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-12 col-md-3">Тип кино</div>
                <div class="col-6 col-md-3">
                    <label>
                        <input type="checkbox" class="minimal-red">
                        3D
                    </label>
                </div>
                <div class="col-6 col-md-3">
                    <label>
                        <input type="checkbox" class="minimal-red" checked>
                        2D
                    </label>
                </div>
                <div class="col-6 col-md-3">
                    <label>
                        <input type="checkbox" class="minimal-red">
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
                <button type="button" class="btn btn-primary">Вернуть базовую версию</button>
            </div>
        </div>
    </form>
</template>

<script>
    import FileUploader from './FileUploader';
    import {mapGetters} from 'vuex';

    export default {
        props: ['lang'],
        name: "film-form",
        data() {
            return {
                image: '',
                mainImage: null,
                movie: {
                    title: '',
                    description: '',
                    src: '',
                    posters: ['', '', '', '', '', ''],
                    youtube: '',
                    format: [],
                    seo: {
                        url: '',
                        title: '',
                        keywords: '',
                        description: ''
                    }
                }
            }
        },
        methods: {
            onSubmit() {
                alert(1);
                let data = JSON.stringify(this.movie);
                console.log(data);
            },
            addMainPic(event) {
                console.log(event);
                this.info.src = event;
                console.log(this.info.src);
            },
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            onPosterFilesChange(e, index) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0], index);
            },
            createImage(file, index) {
                console.log(file);
                alert(index);
                let image = new Image();
                let reader = new FileReader();
                let vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                    //   vm.image = e.target.result;
                    // console.log(vm.info.posters);
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.info.src = '';
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