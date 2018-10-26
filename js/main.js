/*! pauwel-io | MIT License | https://github.com/pauwell/pauwel-io */
"use strict";

// Remove `js-enabled`-node to signal that javascript is enabled.
document.getElementById("js-disabled").remove();

// Get navbar.
let navbar = document.getElementsByTagName("nav")[0];

// Get content-blocks.
let contentHome = document.getElementById("content-home");
let contentProjects = document.getElementById("content-projects");
let contentDownload = document.getElementById("content-download");
let contentContact = document.getElementById("content-contact");

// Get navbar-buttons.
let buttonContentHome = navbar.querySelector("a[for=content-home]");
let buttonContentProjects = navbar.querySelector("a[for=content-projects]");
let buttonContentDownload = navbar.querySelector("a[for=content-download]");
let buttonContentContact = navbar.querySelector("a[for=content-contact]");

// Add sticky class to navbar when its scrolled down.
window.addEventListener("scroll", function() {
  if (window.pageYOffset >= navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Show `home`-content on startup.
window.addEventListener("load", function() {
  hideContent();
  //contentHome.style.display = "block";
  contentDownload.style.display = "block";
});

// Hide every content block.
function hideContent() {
  contentHome.style.display = "none";
  contentProjects.style.display = "none";
  contentDownload.style.display = "none";
  contentContact.style.display = "none";
}

// Show `home`-content.
buttonContentHome.addEventListener("click", function() {
  hideContent();
  contentHome.style.display = "block";
});
// Show `projects`-content.
buttonContentProjects.addEventListener("click", function() {
  hideContent();
  contentProjects.style.display = "block";
});
// Show `downloads`-content.
buttonContentDownload.addEventListener("click", function() {
  hideContent();
  contentDownload.style.display = "block";
});
// Show `contact`-content.
buttonContentContact.addEventListener("click", function() {
  hideContent();
  contentContact.style.display = "block";
});
