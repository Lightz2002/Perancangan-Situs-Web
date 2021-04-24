const description = document.querySelectorAll(".desc-container");
const web = document.querySelector(".highlighted-desc2");
const webHostDesc = description[0];
const webDesignDesc = description[1];
const webDevelopDesc = description[2];
const webDesign = document.querySelector(".web-design");
const webDevelop = document.querySelector(".web-develop");
let width = screen.width;

window.addEventListener("load", function () {
  webHostDesc.style.transform = "translate(0)";
  console.log(width);
  if (width <= 992) {
    webDesignDesc.style.transform = "translate(0)";
  }
});

window.addEventListener("scroll", function () {
  var wScroll = window.scrollY;
  let WebDevContainerPos = getPos(webDevelop).y;
  let WebDesContainerPos = getPos(webDesign).y;

  if (wScroll >= WebDesContainerPos - 400) {
    webDesign.style.transform = "translateY(0)";
    webDesign.style.opacity = "1";
    webDesignDesc.style.transform = "translate(0)";
  }

  if (wScroll >= WebDevContainerPos - 400) {
    webDevelop.style.transform = "scale(1)";
    webDevelopDesc.style.transform = "scale(1)";
  }
});

function getPos(el) {
  for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return { x: lx, y: ly };
}
