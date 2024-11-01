fetch("https://status.cafe/users/snipchu/status.json")
  .then( r => r.json() )
  .then( r => {
    document.getElementById("statuscafe").innerHTML = r.face + ' <a href="https://status.cafe/users/snipchu">' + r.timeAgo + '</a><hr>' + r.content
  })
