let resultKind;

$.ajax({
    url: "./api/kind/" + GetQueryString("id") + ".json", dataType: 'json', success: function (result) {
        resultKind = $.parseJSON(JSON.stringify(result));
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
    Vue.createApp({
        data: function () {
            return {
                name: resultKind.name,
                sum: resultKind.sum,
                articles: articles
            };
        }
    }).mount("#vm");
}