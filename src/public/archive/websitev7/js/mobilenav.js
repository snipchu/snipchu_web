var nav = document.getElementById("menuitems");
var hammenu = document.getElementById("hamicon");
function showmenu() {
  if (nav.lastElementChild.style.display == "block") {
    nav.lastElementChild.style.display = "";
    hammenu.classList.remove("nf-md-menu_open");
    hammenu.classList.add("nf-md-menu");
  } else {
    nav.lastElementChild.style.display = "block";
    hammenu.classList.remove("nf-md-menu");
    hammenu.classList.add("nf-md-menu_open");
  }
}

