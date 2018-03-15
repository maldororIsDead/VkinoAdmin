<!-- Компонент отображения новостей -->
<template>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Cписок новостей</h3>
                        <router-link to="/news/news-page">
                            <button type="button" class="btn btn-default pull-right"><i class="fa fa-plus"></i> Создать
                                Новость
                            </button>
                        </router-link>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <table id="example1" class="table table-bordered table-striped table-responsive">
                                    <thead>
                                    <tr>
                                        <th class="col-xs-6">Название</th>
                                        <th class="col-xs-3">Дата создания</th>
                                        <th class="col-xs-1">Статус</th>
                                        <th class="col-xs-1"></th>
                                        <th class="col-xs-1"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, index) in JSON.parse(news)">
                                        <td>{{ item.title }}</td>
                                        <td>{{ item.date }}</td>
                                        <td>{{ (item.status === true) ? 'ВКЛ' : 'ВЫКЛ' }}</td>
                                        <td>
                                            <router-link :to="{name: 'news', params: {id: index}}"><i
                                                    class="fa fa fa-pencil"></i></router-link>
                                        </td>
                                        <td @click="deleteItem(index)"><i class="fa fa-trash-o"></i></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "news",
        data() {
            return {
                newsView: ""
            }
        },
        computed: {
            ...mapGetters([
                'news'
            ]),
        },
        methods: {
            deleteItem(index) {
                //Удаление новости
                this.newsView = JSON.parse(this.news);
                this.newsView.splice(index, 1);
                let localNews = JSON.stringify(this.newsView);
                localStorage.removeItem("news");
                localStorage.setItem('news', localNews);
                this.$store.commit('createNewsStorage', localNews);
            }
        },
    }
</script>

<style scoped>
    .box-header > .fa, .box-header > .glyphicon, .box-header > .ion, .box-header .box-title {
        display: flex;
        justify-content: center;
    }
</style>