<template>
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="box box-primary">
                    <form role="form" v-on:submit.prevent="onSubmit">
                        <div class="box-body">
                            <div class="form-group">
                                <label>Название фильма</label>
                                <input type="text" class="form-control" v-model="info.title"
                                       placeholder="Название фильма" required>
                            </div>
                            <div class="form-group">
                                <label>Описание</label>
                                <textarea class="form-control" rows="3" placeholder="текст" v-model="info.description"
                                          required></textarea>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-md-2">Главная картинка</div>
                                    <div class="col-12 col-md-3">
                                        <file-uploader :image="info.src"></file-uploader>
                                    </div>
                                <!--    <div class="col-12 col-md-3" v-if="!info.src">
                                        <img class="no-image" src="src/assets/no-image-icon.png" alt="no-image">
                                    </div>
                                    <div class="col-12" v-else>
                                        <img :src="info.src"/>
                                    </div>
                                    <div class="col-12 col-md-6 movies-btn_group">
                                        <label for="file" class="btn btn-primary">загрузить фото</label>
                                        <input type="file" id="file" style="visibility:hidden;" @change="onFileChange">
                                        <button class="btn btn-default" @click="removeImage">Удалить</button>
                                    </div>-->
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-md-12">Галерея картинок</div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-6 col-md-2">Размер 1000x190</div>
                                    <div class="col-6 col-md-4 col-lg-2">
                                        <file-uploader @update="addMainPic"></file-uploader>
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
                            <div class="form-group">
                                <label>Ссылка на трейлер</label>
                                <input type="text" class="form-control" placeholder="Ссылка на видео в youtube"
                                       v-model="info.youtube" required>
                            </div>
                            <div class="form-group">
                                <label>Тип кино</label>
                                <label>
                                    <input type="checkbox" class="minimal-red">
                                    3D
                                </label>
                                <label>
                                    <input type="checkbox" class="minimal-red" checked>
                                    2D
                                </label>
                                <label>
                                    <input type="checkbox" class="minimal-red">
                                    IMAX
                                </label>
                            </div>
                            <div class="form-group">
                                <label>SEO блок</label>
                                <div class="form-group">
                                    <label>URL</label>
                                    <input type="text" class="form-control" placeholder="URL">
                                </div>
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" placeholder="Title">
                                </div>
                                <div class="form-group">
                                    <label>Keywords</label>
                                    <input type="text" class="form-control" placeholder="Title">
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea class="form-control" rows="3" placeholder="Description"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-default">Сохранить</button>
                                <button type="button" class="btn btn-primary">Вернуть базовую версию</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FileUploader from './elements/FileUploader';

    export default {
        name: "movie-page",
        data() {
            return {
                image: '',
                mainImage: null,
                info: {
                    title: '',
                    description: '',
                    src: '',
                    posters: ['', '', '', '', '', ''],
                    youtube: '',
                    format: [],
                    SEO: {
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
                let data = JSON.stringify(this.info);
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