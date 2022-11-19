let re = {
    sign: [],
    songs: [],
    articles: [],
    kinds: [],
    lists: [],
    backimg:[{img:"",color:""}]
};
$.ajax({
    url: "./api/homepage.json", dataType: 'json', success: function (result) {
        re = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
window.onload = function () {
    var img_num = rnd(new Date().getTime())%re.backimg.length;
    $("#title").css("background-image","url("+re.backimg[img_num].img+")").css("color",re.backimg[img_num].color);
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
        data() {
            let rand = rnd(new Date().getTime());
            rand %= re.sign.length;
            return {sign: re.sign[rand]};
        },
    });
    const vm_musicCard = new Vue({
        el: "#musicCard",
        data() {
            d = new Date();
            seed = d.getFullYear()*10000+d.getMonth()*100+d.getDay();
            let rand = rnd(seed);
            rand %= re.songs.length;
            return re.songs[rand+1];
        }
    });
    const vm_articleContainer = new Vue({
        el: "#articleContainer",
        data() {
            return {articles: re.articles};
        }
    });
    const vm_kinds = new Vue({
        el: "#kinds",
        data() {
            return {kinds: re.kinds};
        }
    });
    const vm_list = new Vue({
        el: "#list",
        data() {
            return {lists: re.lists};
        }
    });
    $("#list div>h4").click(function () {
        $(this).parent().find("div:visible").slideUp(200);
        $(this).parent().find("div:hidden").slideDown(200);
        $(this).parent().siblings().find("div").slideUp(200);
    });
}

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

function rnd(seed) {
    seed = (seed * 9301 + 49297) % 233283;
    return seed;
}