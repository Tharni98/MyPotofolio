window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("hi").style.fontSize = "30px";
    } else {
        document.getElementById("hi").style.fontSize = "90px";
    }
}


document.getElementById("welcome").animate(
    [
        // keyframes
        // { transform: "translateX(0px)" },
        { transform: "translateX(-200px)" },
        { transform: "translateX(0px)" },
        { transform: "translateX('paused')" },

    ],
    {

        // element.style.animationPlayState = 'paused';
        // timing options
        duration: 1200,
        iterations:1,
    }
);

var i = 0;
var txt = '';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}