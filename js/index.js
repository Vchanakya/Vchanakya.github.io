function indexMain() {
  const pageHeight = $("#mainPage").height() - $("header").outerHeight(true) - $("footer").outerHeight(true);
  window.onload = () => {
    $("main").css("min-height", pageHeight);
    $(".singlepage").css("min-height", pageHeight);
    $(".mediumpage").css("min-height", 0.8 * pageHeight);
    $("#landingImage").css("max-height", pageHeight / 2);
    $("#architectureImage").css("max-height", pageHeight);
    $("#landingImage").css("max-width", $("#landingImage").height() * 1.5);
  };
  document.querySelectorAll("header a").forEach((el) => {
    el.addEventListener("click", (ev) => {
      document.querySelectorAll("section").forEach((sectionEl) => {
        if (sectionEl.getAttribute("id") !== el.getAttribute("data-href").split("#")[1])
          sectionEl.classList.add("d-none");
        else sectionEl.classList.remove("d-none");
      });
      document.querySelectorAll("#navbarMenu a").forEach((aEl) => {
        if (aEl === el) el.classList.add("text-underline");
        else aEl.classList.remove("text-underline");
      });
      document.querySelector("#navbarMenu").classList.remove("show");
    });
  });
  $("#aboutMenu").click(() => {
    window.scrollTo(0, 0.8 * pageHeight);
  });

  $("a[data-href='#aboutus']").click(() => {
    console.log($("#aboutItem").height(), $("#aboutMenu").height());
    $("#pills-tabContent").css("min-height", $("#aboutItem").height() - $("#aboutMenu").height());
  });
}

indexMain();
