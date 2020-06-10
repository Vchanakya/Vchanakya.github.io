function indexMain() {
  const mainHeight = $("#mainPage").height() - $("header").outerHeight(true) - $("footer").outerHeight(true);
  $("main").outerHeight(mainHeight);

  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (ev) => {
      document.querySelectorAll("section").forEach((sectionEl) => {
        if (sectionEl.getAttribute("id") !== el.getAttribute("href").split("#")[1]) {
          sectionEl.classList.add("d-none");
        } else {
          sectionEl.classList.remove("d-none");
        }
      });
    });
  });
}

indexMain();
