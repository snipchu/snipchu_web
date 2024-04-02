var nav = document.getElementById("menuitems");
var hammenu = document.getElementById("bunnyicon");
function showmenu() {
  if (nav.style.display == "flex") {
    nav.style.display = "";
    hammenu.classList.remove("nf-md-menu_open");
    hammenu.classList.add("nf-md-menu");
  } else {
    nav.style.display = "flex";
    hammenu.classList.remove("nf-md-menu");
    hammenu.classList.add("nf-md-menu_open");
  }
}
