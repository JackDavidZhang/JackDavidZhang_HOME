Vue.filter("number", function (value) {
    return value < 10 ? "0" + value : value;
});
Vue.filter("articleUrl", function (value) {
    return "./article.html?id=" + value;
});
Vue.filter("kindUrl", function (value) {
    return "./kind.html?id=" + value;
});
const vm_content = new Vue({
    el: "#dailyCard",
    data: {
        date: {y: "1970", m: "1", d: "1", h: "0", min: "0", s: "0", x: "yi"},
    },
    mounted: function () {
        changeDate(this);
        this.timer = setInterval(changeDate, 1000, this);
    },
    beforeDestroy: function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
});
const vm_title = new Vue({
    el: "#title",
    data: {
        sign: "已知花意，未闻花名，再遇花时，泪已千行...",
    },
});
const vm_musicCard = new Vue({
    el: "#musicCard",
    data: {
        song: "渚~坂の下の別れ",
        artist: "麻枝准",
        album: "CLANNAD ORIGINAL SOUNDTRACK",
        wUrl: "https://music.163.com/song?id=22707014",
        qUrl: "https://y.qq.com/n/ryqq/songDetail/000inPRx46ydkD",
    }
});
const vm_articleContainer = new Vue({
    el: "#articleContainer",
    data: {
        articles: [
            {
                title: "随感其一",
                introduction: "金樽清酒斗十千，玉盘珍羞直万钱。停杯投箸不能食，拔剑四顾心茫然。欲渡黄河冰塞川，将登太行雪满山。行路难，行路难，多歧路，今安在。长风破浪会有时，直挂云帆济沧海。",
                hasPicture: true,
                picture: "./img/1.jpg",
                time: "2022.4.17 13:20",
                id: 0
            },
            {
                title: "STL中的集合",
                introduction: "STL中的集合分为Set(有序集)和Map(无序集)，他们均为STL中的容器类，可以使用迭代器。不支持数组表示，Set支持查找前驱和后驱，Map不支持。",
                hasPicture: true,
                picture: "./img/1.jpg",
                time: "2022.4.17 13:20",
                url: "#",
                id:1
            },
            {title: "随感其三", introduction: "test", hasPicture: false, picture: "", time: "2022.4.13 13:20", id: 0},
            {title: "随感其四", introduction: "test", hasPicture: false, picture: "", time: "2022.5.16 13:20", id: 0},
            {title: "随感其五", introduction: "test", hasPicture: false, picture: "", time: "2022.7.17 13:20", id: 0}
        ]
    }
});
const vm_kinds = new Vue({
    el: "#kinds",
    data: {
        kinds: [
            {name: "随感", id: 0, num: 1},
            {name: "技术", id: 0, num: 2},
            {name: "发布", id: 0, num: 3},
            {name: "文艺", id: 0, num: 999},
        ]
    }
});
const vm_list = new Vue({
    el: "#list",
    data: {
        lists: [
            {
                name: "list1",
                content: [{title: "t1", id: 0}, {title: "t1", id: 0}, {title: "t1", id: 0}]
            }, {name: "list1", content: [{title: "t1", id: 0}, {title: "t1", id: 0}, {title: "t1", id: 0}]}
        ]
    }
})


function changeDate(v) {
    const d = new Date();
    const i = [];
    i[0] = "周日";
    i[1] = "周一";
    i[2] = "周二";
    i[3] = "周三";
    i[4] = "周四";
    i[5] = "周五";
    i[6] = "周六";
    v.date.y = d.getFullYear();
    v.date.m = d.getMonth();
    v.date.d = d.getDate();
    v.date.h = d.getHours();
    v.date.min = d.getMinutes();
    v.date.x = i[d.getDay()];
}

window.onload=function(){
    $("#list div>h4").click(function () {
        $(this).parent().find("div:visible").slideUp(200);
        $(this).parent().find("div:hidden").slideDown(200);
        $(this).parent().siblings().find("div").slideUp(200);
    });
}