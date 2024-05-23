function openimg(caller) {
  figure = caller.firstElementChild;
  figcapt = figure.lastElementChild;
  caller.id = "activepic"
  document.getElementById("closebutton").style.display="block";
}

function hideimg() {
  activepic = document.getElementById("activepic");
  activepic.id = ""
  document.getElementById("closebutton").style.display="";
}
