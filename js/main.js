/*! pauwel-io | MIT License | https://github.com/pauwell/pauwel-io */
"use strict";

let navbar = document.getElementsByTagName("nav")[0];

// Add sticky class to navbar when its scrolled down.
window.addEventListener("scroll", function(){
  if(window.pageYOffset >= navbar.offsetTop){
    navbar.classList.add("sticky")
  }else{
    navbar.classList.remove("sticky")
  }
});