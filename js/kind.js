re = {
    "name": "",
    "sum": 0,
    "articles": [
        {
            "title": " ",
            "introduction": " ",
            "hasPicture": "false",
            "picture": " ",
            "time": " ",
            "id": 0
        },
        {
            "title": " ",
            "introduction": " ",
            "hasPicture": false,
            "picture": "",
            "time": " ",
            "id": 0
        }
    ]
}

$.ajax({
    url: "./api/kind/" + GetQueryString("id") + ".json", dataType: 'json', success: function (result) {
        re = $.parseJSON(JSON.stringify(result));
    }, error: function (result) {
        //location.replace("./error.html?errorCode=" + result.status);
    },
    async: false
});

let vm_article;
let vm_body;

window.onload = function () {
    vm_article = new Vue({
        el: "#vm_el",
        data: {
            title: re.name,
        }
    });
    vm_body = new Vue({
        el: "#kind_body",
        data: function () {
            return re;
        }
    });
}