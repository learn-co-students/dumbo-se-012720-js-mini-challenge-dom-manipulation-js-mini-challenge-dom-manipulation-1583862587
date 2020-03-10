/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
 header.style.color = 'red'

/***** Deliverable 3 *****/
 const container = document.querySelector(".player-container")

 function renderPlayer(playerObj) {
     const outerLi = document.createElement("li")

     outerLi.className = "card"

     outerLi.innerHTML = `
     <div class="player" data-number="${playerObj.number}">
     <h3>
        ${playerObj.name} (<em>${playerObj.nickname}</em>)
     </h3>
     <img src="${playerObj.photo}" alt="${playerObj.name}">
     </div>`

     container.append(outerLi)
 }

 PLAYERS.forEach(renderPlayer)

/***** Deliverable 4 *****/

let a = document.querySelector(`[data-number='7']`)
a.remove()