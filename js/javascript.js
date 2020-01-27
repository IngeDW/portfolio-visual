/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");



/* SCROLL TO SEE NAV BAR */
/* BRON: ttps://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll */

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}