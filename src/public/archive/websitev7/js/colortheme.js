// toggle dark mode on button click
function togglecolor() {
  document.querySelector(':root').toggleAttribute('darkmode');
  var darkon = document.documentElement.getAttribute("darkmode")=="";
  window.localStorage.setItem("darkmode", darkon); 
}
// set color scheme to light or dark
function onload() {
  if (localStorage.getItem("darkmode")=="true") {
    document.querySelector(':root').setAttribute('darkmode', "");
  } else {
    document.querySelector(':root').removeAttribute('darkmode');
  }
}
// get user preference
window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
  if (e.matches) {
    window.localStorage.setItem("darkmode", "true"); 
  } else {
    window.localStorage.removeItem("darkmode"); 
  }
  onload();
});
