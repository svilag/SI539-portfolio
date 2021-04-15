// sticky headers
// https://www.w3schools.com/howto/howto_js_sticky_header.asp

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var page = document.getElementById("maincontent")
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stuckboi")
    page.classList.add("page")
    console.log("scroll")
  } else {
    navbar.classList.remove("stuckboi");
  }
}