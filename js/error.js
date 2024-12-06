function GetQueryString(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

let resultKinds;
let kindSuccess = true;
$.ajax({
    url: api_address + "/kind/kinds.json", dataType: 'json', success: function (result) {
        resultKinds = $.parseJSON(JSON.stringify(result));
    },error:function (result) {
        kindSuccess = false;
    },
    async: false
});

window.onload = function () {
    let errorTex = GetQueryString("errorCode");
    let errorDescribe;
    switch (errorTex) {
        case '404':
            errorDescribe = "Not Found";
            break;
        case '400':
            errorDescribe = "Bad Request";
            break;
        case '401':
            errorDescribe = "Unauthorized";
            break;
        case '403':
            errorDescribe = "Forbidden";
            break;
        case '409':
            errorDescribe = "Request Timeout";
            break;
        case '500':
            errorDescribe = "Internal Server Error";
            break;
        case '502':
            errorDescribe = "Bad Gateway";
            break;
        case '504':
            errorDescribe = "Gateway Timeout";
            break;
        default:
            errorTex = "NaN";
            errorDescribe = "UnknownError";
    }
    $("#text").text(errorTex);
    $("#description").text(errorDescribe);
    let kinds = [];
    if (kindSuccess) {
        kinds = resultKinds.kinds;
        for (kind in kinds) {
            kinds[kind].url = "./kind.html?id=" + kinds[kind].id;
        }
    }
    Vue.createApp({
        data: function () {
            return {
                kinds: kinds,
            };
        }
    }).mount("#vm");
}
