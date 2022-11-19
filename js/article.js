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
var re = {data: {title: "", stylesheet: ""}};
let id = GetQueryString("id");
$.ajax({
    url: "./api/article/" + id + ".json", dataType: 'json', success: function (result) {
        re = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});
$("head").append("<link href=\"" + re.data.stylesheet + "\" rel=\"stylesheet\"/>");
window.onload = function () {
    let vm_title = new Vue(
        {
            el: "#title",
            data() {
                return {title: re.data.title};
            }
        }
    );
    let vm_article = new Vue({
        el: "#article",
        data() {
            return re.data;
        }
    });
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
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}