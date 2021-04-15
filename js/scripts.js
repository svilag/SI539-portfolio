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