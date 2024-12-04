let resultKind;

$.ajax({
    url: "./api/kind/" + GetQueryString("id") + ".json", dataType: 'json', success: function (result) {
        resultKind = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        //location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
let resultKinds;
$.ajax({
    url: "./api/kind/kinds.json", dataType: 'json', success: function (result) {
        resultKinds = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        //location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
window.onload = function () {
    Vue.createApp({
        data: function () {
            return {title: resultKind.name};
        }
    }).mount("#vm_title");
    let articles = resultKind.articles;
    for (article in articles) {
        articles[article].url = "./article.html?id=" + articles[article].id;
    }
    let kinds = resultKinds.kinds;
    for (kind in kinds) {
        kinds[kind].url = "./kind.html?id=" + kinds[kind].id;
    }
    Vue.createApp({
        data: function () {
            return {
                name: resultKind.name,
                kinds: kinds,
                sum: resultKind.sum,
                articles: articles
            };
        }
    }).mount("#vm");
    nav_scroll(0);
    fade_down($("#loading"));
}