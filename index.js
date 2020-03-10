/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

const playerlistul = document.querySelector(".player-container")

function renderplayer(playerobj){

    const para = document.createElement("p")

    para.innerHTML = `
    <div class="player" data-number="${playerobj.number}">
        <h3>
            ${playerobj.name} (<em>${playerobj.nickname}</em>)
    </h3>
    <img src="${playerobj.photo}" alt="${playerobj.name}">
    </div>`

    playerlistul.append(para)
}

PLAYERS.forEach(renderplayer)
/***** Deliverable 4 *****/
document.querySelector("[data-number='7']").remove();