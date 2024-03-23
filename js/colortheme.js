function togglecolor() {
  document.querySelector(':root').toggleAttribute('darkmode');
  var darkon = document.documentElement.getAttribute("darkmode")=="";
  window.localStorage.setItem("darkmode", darkon); 
}

function onload() {
  if (localStorage.getItem("darkmode")=="true") {
    document.querySelector(':root').setAttribute('darkmode', "");
  } else {
    document.querySelector(':root').removeAttribute('darkmode');
  }
}
