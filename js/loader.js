function animations() {
  let loopCount = 0;
  let changeStatus = true;
  let word = "";
  let wordChange = "";
  let textFills = ["Ideas", "Products", "Learning", "Services", "Solutions", "Technologies", "Insights"];

  anime({
    targets: ".tagline",
    easing: "steps(7)",
    color: ["#1f1868", "#173576", "#0053bc", "#22b128", "#d0bd00", "#ec6a08", "#e40905"],
    duration: 7000,
    loop: true,
    direction: "alternate",
  });

  anime({
    targets: "#blink",
    easing: "linear",
    duration: 300,
    loop: true,
    direction: "alternate",
    opacity: [1, 0],
    loopBegin: () => {
      if (word === "") {
        wordChange = textFills[Math.floor(Math.random() * textFills.length)];
        word = wordChange[0];
        loopCount = 0;
      } else {
        if (changeStatus) {
          loopCount++;
          if (loopCount > wordChange.length) {
            changeStatus = false;
            this.pause();
            document.getElementById("blink").classList.add("d-none");
          } else {
            word = wordChange.slice(0, loopCount);
            document.getElementById("words").innerText = word;
          }
        } else {
          loopCount--;
          if (loopCount === 0) {
            changeStatus = true;
            word = "";
            document.getElementById("words").innerText = word;
          } else {
            word = wordChange.slice(0, loopCount);
            document.getElementById("words").innerText = word;
          }
        }
      }
    },
  });
}

// animations();
