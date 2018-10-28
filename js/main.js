/*! pauwel-io | MIT License | https://github.com/pauwell/pauwel-io */
"use strict";

// Remove `js-enabled`-node to signal that javascript is enabled.
document.getElementById("js-disabled").remove();

// Get navbar.
let navbar = document.getElementsByTagName("nav")[0];

// Get content-blocks.
let contentHome = document.getElementById("content-home");
let contentTiny = document.getElementById("content-tinytemplates");
let contentChip = document.getElementById("content-chip8");
let contentDownload = document.getElementById("content-download");

// Get navbar-buttons.
let buttonContentHome = navbar.querySelector("a[for=content-home]");
let buttonContentTiny = navbar.querySelector("a[for=content-tinytemplates]");
let buttonContentChip = navbar.querySelector("a[for=content-chip8]");
let buttonContentDownload = navbar.querySelector("a[for=content-download]");
let buttonMenuIcon = document.querySelector(".menu-icon");

// Open the navbar menu.
function toggleMenu() {
  buttonMenuIcon.classList.toggle("change");

  buttonContentHome.classList.toggle("hidden");
  buttonContentTiny.classList.toggle("hidden");
  buttonContentChip.classList.toggle("hidden");
  buttonContentDownload.classList.toggle("hidden");
}

// Add sticky class to navbar when its scrolled down.
window.addEventListener("scroll", function() {
  if (window.pageYOffset >= navbar.offsetTop) {
    navbar.classList.add("sticky");
    buttonMenuIcon.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    buttonMenuIcon.classList.remove("sticky");
  }
});

// Show `home`-content on startup.
window.addEventListener("load", function() {
  hideContent();
  //contentHome.style.display = "block";
  contentTiny.style.display = "block";
});

// Hide every content block.
function hideContent() {
  contentHome.style.display = "none";
  contentTiny.style.display = "none";
  contentChip.style.display = "none";
  contentDownload.style.display = "none";

  buttonMenuIcon.classList.remove("change");

  buttonContentHome.classList.add("hidden");
  buttonContentTiny.classList.add("hidden");
  buttonContentChip.classList.add("hidden");
  buttonContentDownload.classList.add("hidden");
}

// Show `home`-content.
buttonContentHome.addEventListener("click", function() {
  hideContent();
  contentHome.style.display = "block";
});
// Show `tinytemplates`-content.
buttonContentTiny.addEventListener("click", function() {
  hideContent();
  contentTiny.style.display = "block";
});
// Show `chip8`-content.
buttonContentChip.addEventListener("click", function() {
  hideContent();
  contentChip.style.display = "block";
});
// Show `downloads`-content.
buttonContentDownload.addEventListener("click", function() {
  hideContent();
  contentDownload.style.display = "block";
});

// Handle click on menu-icon.
buttonMenuIcon.addEventListener("click", function() {
  toggleMenu();
});
