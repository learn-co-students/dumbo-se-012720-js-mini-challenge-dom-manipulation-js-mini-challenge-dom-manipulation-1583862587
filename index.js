/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
document.querySelector("#header").style.color = "red"


/***** Deliverable 3 *****/

console.log("PLAYERS array looks like this:", PLAYERS)

const liverpoolPlayers = document.querySelector('.player-container')

function renderPlayers(playerlObj) {

const outerPlayers = document.createElement("li")

outerPlayers.innerHTML = `
<div class="player" data-number="${playerlObj.number}">
<h3>
  ${playerlObj.name} (<em>${playerlObj.nickname}</em>)
</h3>
<img src="${playerlObj.photo}" alt="${playerlObj.name}">
</div>
`
liverpoolPlayers.append(outerPlayers)
}
PLAYERS.forEach(renderPlayers)

  

/***** Deliverable 4 *****/

const removeRa = document.querySelector("[data-number = '7']")

removeRa.remove()
