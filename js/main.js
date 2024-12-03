function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
function nav_scroll(min_height) {
    let ph = $(document).scrollTop();
    $(window).scroll(function () {
        if($(document).scrollTop()<min_height) {
            $("nav.navbar").removeClass("navbar-visible").addClass("navbar-hidden");
        }else{
            if(($(document).scrollTop()-ph) > 10){
                $("nav.navbar").removeClass("navbar-visible").addClass("navbar-hidden");
            }else if(($(document).scrollTop()-ph) < -10){
                $("nav.navbar").removeClass("navbar-hidden").addClass("navbar-visible");
            }
        }
        ph = $(document).scrollTop();
    });
}