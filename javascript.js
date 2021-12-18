var prevScrollpos = window.pageYOffset;
var imghig = document.documentElement.clientWidth;


window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(imghig);
    if (imghig* 0.31 < currentScrollPos) {
        document.getElementById("list1").style.position = "fixed";
        document.getElementById("list1").style.top = "0";
        document.getElementById("list1").style.background = "white";

    } else {
        document.getElementById("list1").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}
