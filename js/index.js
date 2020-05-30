document.getElementById("menu-services").onclick = () => {
    document.querySelectorAll(".sectionpage").forEach((el) => {
        el.classList.remove("d-block");
        el.classList.add("d-none");
    });
    document.getElementById("services").classList.remove("d-none");
    document.getElementById("services").classList.add("d-block");
};

document.querySelectorAll(".hovercard").forEach((el) => {
    el.addEventListener("mouseover", () => {
        document.querySelectorAll(".hovercard").forEach((el) => {
            el.classList.remove("shadow-lg");
            el.classList.remove("opacity-full");
            el.classList.add("opacity-half");
        });
        el.classList.add("shadow-lg");
        el.classList.add("opacity-full");
    });
});

document.querySelectorAll(".hovercard").forEach((el) => {
    el.addEventListener("mouseout", () => {
        el.classList.remove("shadow-lg");
        el.classList.remove("opacity-full");
        el.classList.add("opacity-half");
    });
});
