function animations() {
    let loopStatus = true;
    let changeStatus = true;
    let textFills = [
        "Things",
        "Projects",
        "IoT",
        "Automation",
        "Edge",
        "Applications",
        "Control Panels",
        "Internet of Things",
    ];

    anime({
        targets: "#logo1 svg path",
        easing: "easeInOutSine",
        fill: "#FFFFFF",
        duration: 1400,
        delay: (el, i) => {
            return i * 100;
        },
        direction: "alternate",
        loop: true,
        loopBegin: () => {
            if (loopStatus) {
                textAnimation.play;
                loopStatus = false;
            } else {
                textAnimation.pause;
                loopStatus = true;
            }
        },
    });

    anime({
        targets: "#logo2 svg path",
        easing: "easeInOutSine",
        fill: "#FFFFFF",
        duration: 1400,
        delay: (el, i) => {
            return i * 100;
        },
        direction: "alternate",
        loop: true,
        loopBegin: () => {
            if (loopStatus) {
                textAnimation.play;
                loopStatus = false;
            } else {
                textAnimation.pause;
                loopStatus = true;
            }
        },
    });

    let textAnimation = anime({
        targets: ".tagline",
        easing: "linear",
        color: ["#000000", "#1f1868", "#173576", "#0053bc", "#22b128", "#d0bd00", "#ec6a08", "#e40905"],
        duration: 7000,
        loop: true,
        direction: "alternate",
        changeBegin: () => {
            if (changeStatus) {
                console.log("Full");
                anime({
                    targets: ".textRotate",
                    opacity: [0, 1],
                    easing: "linear",
                    duration: 3500,
                    delay: (el, i) => {
                        el.classList.remove("opacity-zero");
                        el.classList.add("opacity-full");
                        return i * 100;
                    },
                });
                changeStatus = false;
            } else {
                console.log("Zero");
                anime({
                    targets: ".textRotate",
                    opacity: [1, 0],
                    easing: "linear",
                    duration: 3500,
                    endDelay: 100,
                    delay: (el, i) => {
                        return (document.querySelectorAll(".textRotate").length - i) * 100;
                    },
                    complete: () => {
                        let tempText = textFills[Math.floor(Math.random() * textFills.length)];
                        document.querySelector("#textFills").innerHTML = tempHtml(tempText);
                    },
                });
                changeStatus = true;
            }
        },
    });

    function tempHtml(tempText) {
        let tempStr = "";
        for (let i = 0; i < tempText.length; i++) {
            tempStr += `<div class="textRotate d-inline opacity-zero">${tempText[i].toUpperCase()}</div>`;
        }
        return tempStr;
    }
}

animations();
