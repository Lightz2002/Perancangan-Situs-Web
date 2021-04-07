const description = document.querySelectorAll(".desc-container");
const web = document.querySelector(".highlighted-desc2");
const webHostDesc = description[0];
const webDesignDesc = description[1];
const webDevelopDesc = description[2];
const webDesign = document.querySelector(".web-design");
const webDevelop = document.querySelector(".web-develop");

// description[0].style.background = "Red";

window.addEventListener("load", function () {
  webHostDesc.style.transform = "translate(0)";
});

window.addEventListener("scroll", function () {
  var wScroll = window.scrollY;

  if (wScroll >= 300) {
    webDesign.style.transform = "translateY(0)";
    webDesign.style.opacity = "1";
    webDesignDesc.style.transform = "translate(0)";
  }

  if (wScroll >= 1100) {
    webDevelop.style.transform = "scale(1)";
    webDevelopDesc.style.transform = "scale(1)";
  }
});
