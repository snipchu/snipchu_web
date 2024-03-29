fetch("https://status.cafe/users/snipchu/status.json")
  .then( r => r.json() )
  .then( r => {
    document.getElementById("statuser").innerHTML = r.face + ' <a href="https://status.cafe/users/snipchu">' + r.timeAgo + "</a>"
    document.getElementById("statcont").innerHTML = r.content
  })
