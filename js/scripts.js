// sticky headers
// https://www.w3schools.com/howto/howto_js_sticky_header.asp

window.onscroll = function() {myFunction()};

function myFunction () {
  navFunction();
}

var navbar = document.getElementById("navbar");
var page = document.getElementById("maincontent")
var sticky = navbar.offsetTop;

function navFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stuckboi")
    page.classList.add("page")
    console.log("scroll")
  } else {
    navbar.classList.remove("stuckboi")
    console.log("scrolldone");
  }
}


// collapsible code from https://www.w3schools.com/howto/howto_js_collapsible.asp

var coll = document.getElementsByClassName("resumehead");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// accessibility code from https://keepinguptodate.com/pages/2019/04/accessible-javascript-click-handlers/

var button = document.getElementById('edu');

button.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button.click()
    console.log("edu");
  }
});

var button1 = document.getElementById('courses');

button1.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button1.click()
    console.log("courses");
  }
});

var button2 = document.getElementById('exp');

button2.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button2.click()
    console.log("exp");
  }
});

var button3 = document.getElementById('skills');

button3.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button3.click()
    console.log("skills");
  }
});

var button4 = document.getElementById('volun');

button4.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button4.click()
    console.log("volun");
  }
});

var button5 = document.getElementById('leaders');

button5.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button5.click()
    console.log("leaders");
  }
});

var button6 = document.getElementById('awards');

button6.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    button6.click()
    console.log("awards");
  }
});