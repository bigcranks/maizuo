
/*
轮播图
参数：
    _t=1524816182875
*/
const IMG_HOST = '/v4/api/billboard/home';

/*
首页热映电影
参数：
    __t=1524829449481
    page=1
    count=5
*/
const HOME_MOVIES = '/v4/api/film/now-playing'

/*
首页即将上映
参数：
    __t=1524880622617
    page=1
    count=3
*/
const HOME_CINEMA = '/v4/api/film/coming-soon'

/*
正在热映
参数：
    page=1
    count=7
*/
const NOW_MOVIES = 'v4/api/film/now-playing'

export default {
    IMG_HOST,
    HOME_MOVIES,
    HOME_CINEMA,
    NOW_MOVIES 
}