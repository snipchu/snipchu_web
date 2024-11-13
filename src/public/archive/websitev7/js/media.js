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

filterlist = [];
function filteritems(classname) {
  if (filterlist.includes(classname)) {
    filterlist.splice(filterlist.indexOf(classname),1);
  } else {
    filterlist.push(classname);
  }
  figitems = document.getElementsByClassName("figitem");
  for (i=0; i<figitems.length; i++) { figitems[i].style.display = "none";}
  
  filters = "";
  for (i=0; i<filterlist.length; i++) {filters += filterlist[i] + " ";}
  if (filterlist.length == 0) {
    for (i=0; i<figitems.length; i++) { figitems[i].style.display = "";}
  } else {
    matching = document.getElementsByClassName(filters);
    for (i=0; i<matching.length; i++) { matching[i].style.display = ""; }
  }
}
