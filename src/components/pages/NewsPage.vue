<template>
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs pull-right">
                        <li class=""><a href="#tab_1-1" data-toggle="tab" aria-expanded="false">Русский</a></li>
                        <li class="active"><a href="#tab_2-2" data-toggle="tab" aria-expanded="true">Украинский</a></li>
                        <li class="pull-right header">
                            <input type="checkbox" class="checkbox" id="checkbox"/>
                            <label class="chech-label" for="checkbox">вкл</label>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane" id="tab_1-1">
                            <news-form :lang = lang[0]></news-form>
                        </div>
                        <!-- /.tab-pane -->
                        <div class="tab-pane active" id="tab_2-2">
                            <news-form :lang = lang[1]></news-form>
                        </div>
                    </div>
                    <!-- /.tab-content -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import NewsForm from './elements/NewsForm';
    import News from "./News";
    export default {
        name: "news-page",
        data() {
            return {
                lang: [
                    {
                        newsName: "Название новости",
                        publishDate: "Дата публикации",
                        description: "Описание",
                        mainPic: "Главная картинка",
                        galleryPic: "Галерея картинок",
                        picSize: "Размер 1000x190",
                        videoLink: "Ссылка на видео"
                    },
                    {
                        newsName: "Назва новини",
                        publishDate: "Дата публікації",
                        description: "Опис",
                        mainPic: "Головне зображення",
                        galleryPic: "Галерея зображень",
                        picSize: "Розмір 1000х190",
                        videoLink: "Посилання на відео"
                    },
                ]

            }
        },
        methods: {
            onSubmit() {
                alert(1);
                let data = JSON.stringify(this.item);
                console.log(data);
            }
        },
        components: {
            News,
            NewsForm
        }
    }
</script>

<style scoped>
    .tab-content {
        min-height: 1100px;
    }
    .checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin: 10px 0 0 20px;
    }
    .checkbox + label {
        position: relative;
        padding: 0 0 0 60px;
        cursor: pointer;
        font-weight: normal;
    }
    .checkbox + label:before {
        content: '';
        position: absolute;
        top: 6px;
        left: 0;
        width: 50px;
        height: 26px;
        border-radius: 13px;
        background: #CDD1DA;
        transition: .2s;
    }

    .checkbox + label:after {
        content: '';
        position: absolute;
        top: 8px;
        left: 2px;
        width: 22px;
        height: 22px;
        border-radius: 10px;
        background: #FFF;
        transition: .2s;
    }

    .checkbox:checked + label:before {
        background: #9FD468;
    }

    .checkbox:checked + label:after {
        left: 26px;
    }

</style>