function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

Vue.filter("articleUrl", function (value) {
    return "./article.html?id=" + value;
});
Vue.filter("kindUrl", function (value) {
    return "./kind.html?id=" + value;
});