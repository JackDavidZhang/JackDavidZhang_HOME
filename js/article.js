let isMoblie = false;
if (/AppleWebKit.*Mobile/i.test(navigator.userAgent)
    || /Android/i.test(navigator.userAgent)
    || /BlackBerry/i.test(navigator.userAgent)
    || /IEMobile/i.test(navigator.userAgent)
    || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))
    || (/iPad/i.test(navigator.userAgent))) {
    isMoblie = true;
} else {
    $("head").append("<script crossorigin=\"anonymous\" integrity=\"sha384-jqrAC88GWDVskFFYTrKSijc+nq9u3kmA1cn4W0iYANXdH1BFtWKyb/YR8RijuWzn\" src=\"https://lib.baomitu.com/skrollr/0.6.30/skrollr.min.js\"></script>");
}
var articleResult;
let id = GetQueryString("id");
$.ajax({
    url: "./api/article/" + id + ".json", dataType: 'json', success: function (result) {
        articleResult = $.parseJSON(JSON.stringify(result));
        if (articleResult.data.styleSheet !== undefined) {
            $("head").append("<link herf=\'" + articleResult.data.styleSheet + "\' rel='stylesheet'>");
        }
        articleResult.data.kurl = "./kind.html?id=" + articleResult.data.kid;
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
    script.src = 'https://lib.baomitu.com/mathjax/3.2.2/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
    $("mjx-container").css("display", "inline");
    if (isMoblie) {
        $("#content").attr("style", "filter: drop-shadow(0 0 15px black) opacity(0.80);background-color: rgb(211,211,211);");
        $("#mainContainer").attr("style", "backdrop-filter: blur(15px)");
    } else {
        $("#content").attr("data-0", "filter: drop-shadow(0 0 15px black) opacity(0.95);background-color: rgb(255,255,255);").attr("data-1000", "filter: drop-shadow(0 0 15px black) opacity(0.80);background-color: rgb(211,211,211);");
        $("#mainContainer").attr("data-0", "backdrop-filter: blur(0px);").attr("data-1000", "backdrop-filter: blur(15px);");
        skrollr.init(
            {
                forceHeight: false
            }
        );
    }
    nav_scroll($("#article_title").height());
}
