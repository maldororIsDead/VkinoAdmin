<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header"></li>
                <li class="active treeview">
                    <a href="index.html">
                        <i class="fa fa-pie-chart"></i>
                        <span>Статистика</span>
                        <span class="pull-right-container"></span>
                    </a>
                </li>
                <li class="treeview">
                    <a href="№">
                        <i class="fa fa-chevron-circle-left"></i>
                        <span>Баннера/Слайдеры</span>
                        <span class="pull-right-container"></span>
                    </a>
                </li>
                <li class="treeview">
                    <router-link to="/movies">
                        <i class="fa fa-film"></i>
                        <span>Фильмы</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </router-link>
                    <ul class="treeview-menu">
                        <li class="active">
                            <router-link to="/movies/movie-page"><i class="fa fa-circle-o"></i>Страница фильма
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-file-video-o"></i>
                        <span>Кинотеатры</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i>Карточка кинотеатра</a>
                        </li>
                        <li><a href="#"><i class="fa fa-circle-o"></i>Карточка зала</a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <router-link to="/news">
                        <i class="fa fa-newspaper-o"></i>
                        <span>Новости</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </router-link>
                    <ul class="treeview-menu">
                        <li>
                            <router-link to="/news/news-page"><i class="fa fa-circle-o"></i>Страница новости
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-pie-chart"></i>
                        <span>Акции</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i>Страница акции</a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-files-o"></i>
                        <span>Страницы</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Главная страница</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> О кинотеатре</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Кафе-Бар</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Vip-зал</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Реклама</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Детская комната</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Контакты</a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-users"></i>
                        <span>Пользователи</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i>Редактирование
                            пользователя</a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-laptop"></i>
                        <span>Рассылка</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#tml"><i class="fa fa-circle-o"></i>Выбор пользователей</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
    export default {
        name: "sidebar",
        components: {}
    }
</script>

<style scoped>

</style>