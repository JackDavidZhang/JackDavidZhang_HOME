function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function nav_scroll(min_height) {
    let ph = $(document).scrollTop();
    $(window).scroll(function () {
        if ($(document).scrollTop() < min_height) {
            $("nav.navbar").removeClass("navbar-visible").addClass("navbar-hidden");
        } else {
            if (($(document).scrollTop() - ph) > 10) {
                $("nav.navbar").removeClass("navbar-visible").addClass("navbar-hidden");
            } else if (($(document).scrollTop() - ph) < -10) {
                $("nav.navbar").removeClass("navbar-hidden").addClass("navbar-visible");
            }
        }
        ph = $(document).scrollTop();
    });
}

function nav_scroll(min_height) {
    let ph = $(document).scrollTop();
    $(window).scroll(function () {
        if ($(document).scrollTop() < min_height) {
            $("nav.navbar").removeClass("navbar-visible").addClass("navbar-hidden");
        } else {
            if (($(document).scrollTop() - ph) > 10) {
                $("nav.navbar").removeClass("navbar-visible").addClass("navbar-hidden");
            } else if (($(document).scrollTop() - ph) < -10) {
                $("nav.navbar").removeClass("navbar-hidden").addClass("navbar-visible");
            }
        }
        ph = $(document).scrollTop();
    });
}

function nav_scroll(min_height) {
    let ph = $(document).scrollTop();
    $(window).scroll(function () {
        if ($(document).scrollTop() < min_height) {
            $("nav.navbar").removeClass("navbar-visible").addClass("navbar-hidden");
        } else {
            if (($(document).scrollTop() - ph) > 10) {
                $("nav.navbar").removeClass("navbar-visible").addClass("navbar-hidden");
            } else if (($(document).scrollTop() - ph) < -10) {
                $("nav.navbar").removeClass("navbar-hidden").addClass("navbar-visible");
            }
        }
        ph = $(document).scrollTop();
    });
}

function rnd(seed) {
    seed = (seed * 9301 + 49297) % 233283;
    seed = Math.ceil(seed / 123427 + seed % 123427 * 123427);
    seed = (seed * 9301 + 49297) % 233283;
    return seed;
}

function rand_day() {
    const date = new Date();
    return rnd(date.getFullYear() * 367 + date.getMonth() * 29, date.getDate());
}

function rand() {
    const date = new Date();
    return rnd(date.getMilliseconds());
}