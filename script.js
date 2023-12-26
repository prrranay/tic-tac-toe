let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-cntr");
let msg = document.querySelector("#msg");
let turnX = true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
function resetGame() {
    enable();
    turnX = true;
    count = 0;
    msgContainer.classList.add("hide");
}
function enable() {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
}
function disable() {
    boxes.forEach(box => {
        box.disabled = true;
    });
}
function showWinner(winner) {
    if (winner == "X") {
        msg.innerHTML = `Conglatulations <span id="red">${winner}</span>, is Winner`;
        msgContainer.classList.remove("hide");
    } else {
        msg.innerHTML = `Conglatulations <span id="green">${winner}</span>, is Winner`;
        msgContainer.classList.remove("hide");
    }
}
function checkWiner() {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
                disable();
            }
        }
    }
}
function draw() {
    msg.innerHTML = `Its A <span id="draw">Draw </span> Play Again `;
    msgContainer.classList.remove("hide");
}

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (count != 8) {
            if (turnX) {
                box.innerText = "X";
                turnX = false;
                box.style.color = "red";
                count++;
            } else {
                box.innerText = "O";
                turnX = true;
                box.style.color = "green";
                count++;
            }
        } else {
            draw();
        }
        box.disabled = true;
        checkWiner();
    })
});

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame)