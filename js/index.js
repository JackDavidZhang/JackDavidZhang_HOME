let re = {
    sign: [],
    songs: [],
    articles: [],
    kinds: [],
    lists: [],
    backimg: [{img: "", color: ""}]
};
$.ajax({
    url: "./api/homepage.json", dataType: 'json', success: function (result) {
        re = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        //location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
window.onload = function () {
    var img_num = rnd(new Date().getTime()) % re.backimg.length;
    $("#title").css("background-image", "url(" + re.backimg[img_num].img + ")").css("color", re.backimg[img_num].color);
    const vm_content = Vue.createApp({
        el: "#dailyCard",
        data() {return {
            date: {y: "1970", m: "1", d: "1", h: "0", min: "0", s: "0", x: "yi"},
        }},
        mounted: function () {
            changeDate(this);
            this.timer = setInterval(changeDate, 1000, this);
        },
        onBeforeUnmount: function () {
            if (this.timer) {
                clearInterval(this.timer);
            }
        },
    });
    vm_content.mount("#dailyCard");
    const vm_title = Vue.createApp({
        el: "#title",
        data() {
            let rand = rnd(new Date().getTime());
            rand %= re.sign.length;
            return {sign: re.sign[rand]};
        },
    });
    vm_title.mount("#title");
    const vm_musicCard = Vue.createApp({
        el: "#musicCard",
        data() {
            d = new Date();
            seed = d.getFullYear() * 10000 + d.getMonth() * 100 + d.getDay();
            let rand = rnd(seed);
            rand %= re.songs.length;
            return re.songs[rand + 1];
        }
    });
    vm_musicCard.mount("#musicCard");
    const vm_articleContainer = Vue.createApp({
        el: "#articleContainer",
        data() {
            for(artice in re.articles)
            {
                re.articles[artice].url = "./article.html?id="+re.articles[artice].id.toString();
            }
            return {articles: re.articles};
        }
    });
    vm_articleContainer.mount("#articleContainer");
    const vm_kinds = Vue.createApp({
        el: "#kinds",
        data() {
            for(kind in re.kinds)
            {
                re.kinds[kind].url = "./kind.html?id="+re.kinds[kind].id.toString();
            }
            return {kinds: re.kinds};
        }
    });
    vm_kinds.mount("#kinds");
    const vm_navbar_kinds = Vue.createApp({
        el: "#navbar_kinds",
        data() {
            return {kinds: re.kinds};
        }
    });
    vm_navbar_kinds.mount("#navbar_kinds");
    const vm_list = Vue.createApp({
        el: "#list",
        data() {
            for(list in re.lists)
            {
                for(listContent in re.lists[list].content)
                {
                    re.lists[list].content[listContent].url = "./article.html?id="+re.lists[list].content[listContent].id.toString();
                }
            }
            return {lists: re.lists};
        }
    });
    vm_list.mount("#list");
    $("#list div>h4").click(function () {
        $(this).parent().find("div:visible").slideUp(200);
        $(this).parent().find("div:hidden").slideDown(200);
        $(this).parent().siblings().find("div").slideUp(200);
    });
    nav_scroll($("#title").height());
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
    if(v.date.h<10)v.date.h='0'+v.date.h.toString();
    if(v.date.min<10)v.date.min='0'+v.date.min.toString();
}

function rnd(seed) {
    seed = (seed * 9301 + 49297) % 233283;
    return seed;
}