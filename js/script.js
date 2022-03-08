const nav = document.getElementById("nav");
const topbtn = document.getElementById("to-top");
const myname = document.getElementById("myname");
window.addEventListener("scroll", () => {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
    topbtn.classList.remove("d-none");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
    topbtn.classList.add("d-none");
  }
});

$(document).ready(function () {
  $("#loading").addClass("hide");

  new Typed("#myname", {
    strings: ["Telah Ditutup"],
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 2000,
    // backspacing speed
    // show cursor
    showCursor: true,
    contentType: "html",
  });
});