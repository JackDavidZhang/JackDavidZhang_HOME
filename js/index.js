let resultIndex;
let resultArticles;
let resultKinds;
$.ajax({
    url: api_address + "/index.json", dataType: 'json', success: function (result) {
        resultIndex = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
$.ajax({
    url: api_address + "/article/articles.json", dataType: 'json', success: function (result) {
        resultArticles = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
$.ajax({
    url: "./api/kind/kinds.json", dataType: 'json', success: function (result) {
        resultKinds = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
window.onload = function () {
    const img_num = rand() % resultIndex.backimg.length;
    $("#title").css("background-image", "url(" + resultIndex.backimg[img_num].img + ")").css("color", resultIndex.backimg[img_num].color);
    Vue.createApp(
        {
            data() {
                let song = resultIndex.songs[rand_day() % resultIndex.songs.length];
                let lists = resultIndex.lists;
                for (list in lists) {
                    for (listContent in lists[list].content) {
                        lists[list].content[listContent].url = "./article.html?id=" + lists[list].content[listContent].id;
                    }
                }
                let sign = resultIndex.sign[rand() % resultIndex.sign.length];
                let articles = [];
                let i = 0;
                for (article in resultArticles.articles) {
                    if (resultArticles.articles[article].recommend) {
                        articles[i] = resultArticles.articles[article];
                        articles[i++].url = "./article.html?id=" + resultArticles.articles[article].id;
                    }
                }
                let kinds = resultKinds.kinds;
                for (kind in kinds) {
                    kinds[kind].url = "./kind.html?id=" + kinds[kind].id;
                }
                return {
                    sign: sign,
                    song: song,
                    lists: lists,
                    articles: articles,
                    kinds: kinds,
                    date: {y: "1970", m: "1", d: "1", h: "0", min: "0", s: "0", x: "周四"}
                };
            },
            mounted: function () {
                changeDate(this);
                this.timer = setInterval(changeDate, 1000, this);
            },
            onBeforeUnmount: function () {
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
        }
    ).mount("#vm");
    $("#list div>h4").click(function () {
        $(this).parent().find("div:visible").slideUp(200);
        $(this).parent().find("div:hidden").slideDown(200);
        $(this).parent().siblings().find("div").slideUp(200);
    });
    nav_scroll($("#title").height());
    fade_down($("#loading"));
};

function changeDate(vm) {
    const d = new Date();
    const i = [];
    i[0] = "周日";
    i[1] = "周一";
    i[2] = "周二";
    i[3] = "周三";
    i[4] = "周四";
    i[5] = "周五";
    i[6] = "周六";
    vm.date.y = d.getFullYear();
    vm.date.m = d.getMonth();
    vm.date.d = d.getDate();
    vm.date.h = d.getHours();
    vm.date.min = d.getMinutes();
    vm.date.x = i[d.getDay()];
    if (vm.date.h < 10) vm.date.h = '0' + vm.date.h.toString();
    if (vm.date.min < 10) vm.date.min = '0' + vm.date.min.toString();
}

