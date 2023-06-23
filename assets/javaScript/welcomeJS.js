window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("hi").style.fontSize = "30px";
    } else {
        document.getElementById("hi").style.fontSize = "90px";
    }
}