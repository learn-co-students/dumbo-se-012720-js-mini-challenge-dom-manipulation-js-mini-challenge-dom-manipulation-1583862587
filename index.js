/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"



/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

let element = document.querySelector("div.player-container")

function renderPlayer(playerObj) {
    const playDiv = document.createElement("div")
    playDiv.className = "player"
    const playNumber = playerObj.number.toString()
    playDiv.setAttribute("data-number", playNumber)
    playDiv.innerHTML = `
      <h3>
         ${playerObj.name} (<em>${playerObj.nickname}</em>)
      </h3>
      <img src="${playerObj.photo}" alt="${playerObj.name}">
    `
    element.append(playDiv)
  }
  
PLAYERS.forEach(renderPlayer)

/***** Deliverable 4 *****/

let notOurs = document.querySelector(`div.player[data-number="7"]`)
notOurs.remove()


