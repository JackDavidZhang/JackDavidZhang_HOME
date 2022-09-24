let vm_article = new Vue({
    el: "#article",
    data: {
        title: "关于",
        content: "<p><em>JackDavidZhang_HOME v 0.3_DEV</em></p>\n" +
            "<p>这是JackDavid Zhang的个人博客</p>\n" +
            "<p>开发初期，功能尚未完善，如有bug请到GitHub Issues反馈</p>\n" +
            "<p>在后续开发中，我们计划对其加入后台管理，作为一个博客模板发布，敬请期待</p>\n" +
            "<h3>开发名单</h3>\n" +
            "<p>Nuclear Atom Software Studio</p>\n" +
            "<p>JackDavid Zhang</p>\n" +
            "<h3>引用库</h3>\n" +
            "<p>jQuery</p>\n" +
            "<p>Vue.js</p>\n" +
            "<p>Bootstrap</p>\n" +
            "<p>commonmark-java</p>\n" +
            "<p>MathJax</p>\n" +
            "<p>Skrollr</p>\n"
    }
})

window.onload = function () {
    $("mjx-container").css("display", "inline");
    const s = skrollr.init(
        {
            forceHeight: false
        }
    );
}