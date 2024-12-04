var articleResult;
let id = GetQueryString("id");
$.ajax({
    url: api_address + "/article/" + id + ".json", dataType: 'json', success: function (result) {
        articleResult = $.parseJSON(JSON.stringify(result));
        if (articleResult.data.styleSheet !== undefined) {
            $("head").append("<link herf=\'" + articleResult.data.styleSheet + "\' rel='stylesheet'>");
        }
        articleResult.data.kurl = "./kind.html?id=" + articleResult.data.kid;
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
    Vue.createApp(
        {
            data() {
                return {title: articleResult.data.title};
            }
        }
    ).mount("#vm_title");
    Vue.createApp({
        data() {
            let kinds = resultKinds.kinds;
            for (kind in kinds) {
                kinds[kind].url = "./kind.html?id=" + kinds[kind].id;
            }
            return {
                title: articleResult.data.title,
                kind: articleResult.data.kind,
                kinds: kinds,
                kurl: "./kind.html?id=" + articleResult.data.kid,
                date: articleResult.data.date,
                content: articleResult.data.content,
            };
        }
    }).mount("#vm");
    const script = document.createElement('script');
    script.src = 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/mathjax/3.2.0/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
    nav_scroll(0);
    hljs.highlightAll();
    fade_down($("#loading"));
}
