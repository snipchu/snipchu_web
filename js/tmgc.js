function openTab(tabname) {
  alltabs = document.querySelectorAll(".index, .collection, .logs, .guides");
  for (i=0; i<alltabs.length; i++) {
    alltabs[i].style.display = "none";
  }

  matching = document.getElementsByClassName(tabname);
  for (i=0; i<matching.length; i++) {
    matching[i].style.display = "block";
  }
}

function filterItems() {
  filterbuttons = document.getElementsByClassName("filterbutton");
  filters = "";
  for (i=0; i<filterbuttons.length; i++) {
    filters += filterbuttons[i].value + " ";
  }
  loglist = document.getElementById("loglist").firstElementChild.children;
  for (i=0; i<loglist.length; i++) {
    loglist[i].style.display = "none";
  }
  matching = document.getElementsByClassName(filters);
  console.log(matching);
  for (i=0; i<matching.length; i++) {
    matching[i].style.display = "block";
  }
}
