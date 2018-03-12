<template>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Cписок новостей</h3>
                        <button type="button" class="btn btn-default pull-right"><i class="fa fa-plus"></i> Создать Новость
                        </button>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <table id="example1" class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>Название</th>
                                <th>Дата создания</th>
                                <th>Статус</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in news">
                                <td>{{ item.title }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ (item.status === true) ? 'ВКЛ' : 'ВЫКЛ' }}</td>
                                <td><i class="fa fa fa-pencil"></i></td>
                                <td><i class="fa fa-trash-o"></i></td>
                            </tr>
                            </tbody>
                        </table>
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
        computed: {
            ...mapGetters([
                'news'
            ])
        }
    }
</script>

<style scoped>
    .box-header>.fa, .box-header>.glyphicon, .box-header>.ion, .box-header .box-title {
        display: flex;
        justify-content: center;
    }
</style>