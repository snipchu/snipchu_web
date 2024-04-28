function openTab(tabname) {
  alltabs = document.querySelectorAll(".index, .collection, .logs, .guides");
  console.log(alltabs);
  for (i=0; i<alltabs.length; i++) {
    alltabs[i].style.display = "none";
  }

  matching = document.getElementsByClassName(tabname);
  for (i=0; i<matching.length; i++) {
    matching[i].style.display = "block";
  }
}
