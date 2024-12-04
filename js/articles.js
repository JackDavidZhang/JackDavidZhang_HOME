let resultArticles;

$.ajax({
    url: api_address + "/article/articles.json", dataType: 'json', success: function (result) {
        resultArticles = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
let resultKinds;
$.ajax({
    url: api_address + "/kind/kinds.json", dataType: 'json', success: function (result) {
        resultKinds = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
window.onload = function () {
    let articles = resultArticles.articles;
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
                kinds: kinds,
                sum: resultArticles.articles.length,
                articles: articles
            };
        }
    }).mount("#vm");
    nav_scroll(0);
    fade_down($("#loading"));
}