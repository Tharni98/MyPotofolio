document.getElementById("profileImg").animate(
    [
        // keyframes
        { transform: "translateX(0px)" },
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