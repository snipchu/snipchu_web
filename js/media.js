function openimg(caller) {
  figcapt = caller.lastElementChild;
  caller.id = "activepic"
  closebutton.style.display = "block";
}

function hideimg() {
  activepic = document.getElementById("activepic");
  activepic.id = ""
  closebutton.style = "";
}
