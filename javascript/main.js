let elemnts = document.querySelectorAll(".game-element");
let turnBtn = document.querySelectorAll(".turn-btn");
let turnBtnX = document.querySelector(".turn-x");
let turnBtnO = document.querySelector(".turn-o");
let modalWin = document.querySelector(".modal-win");
let modalBtn = document.querySelectorAll(".modal-btn");
let modalBtnX = document.querySelector(".a");
let modalBtnO = document.querySelector(".b");
function handleChoose(event) {
  event.target.classList.add("active");
  event.target.parentNode.parentNode.parentNode.classList.add("not-active");
  if (event.target.closest(".active")) {
    event.target.removeEventListener("click", handleChoose);
  }
  if (modalBtnX.matches(".active")) {
    turnBtnX.classList.add("active");
  } else {
    turnBtnO.classList.add("active");
  }
}
modalBtn.forEach((element) => {
  element.addEventListener("click", handleChoose);
});

function handleTicTacToe(event) {
  turnBtn.forEach((turn) => {
    turn.classList.toggle("active");
    turnBtnX.classList.contains("active")
      ? (event.target.textContent = "O")
      : (event.target.textContent = "X");
  });

  if (event.target.textContent === "X" || event.target.textContent === "O") {
    event.target.removeEventListener("click", handleTicTacToe);
  }
  handeWin1();
}

elemnts.forEach((item) => {
  item.addEventListener("click", handleTicTacToe);
  if (item.textContent?.length > 0) {
    modalWin.classList.add("active-flex");
    modalWin.querySelector("p").textContent = `Durang`;
  } else {
    handeWin1();
  }
});
function handeWin1(params) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const combo of winningCombos) {
    const [a, b, c] = combo;

    if (
      elemnts[a].textContent &&
      elemnts[a].textContent === elemnts[b].textContent &&
      elemnts[a].textContent === elemnts[c].textContent
    ) {
      modalWin.classList.add("active-flex");
      modalWin.querySelector(
        "p"
      ).textContent = `${elemnts[a].textContent} nomli uyinchi yutdi`;
      return;
    }
  }
  elemnts.forEach((item) => {
    if (
      elemnts[0].textContent?.length > 0 &&
      elemnts[1].textContent?.length > 0 &&
      elemnts[2].textContent?.length > 0 &&
      elemnts[3].textContent?.length > 0 &&
      elemnts[4].textContent?.length > 0 &&
      elemnts[5].textContent?.length > 0 &&
      elemnts[6].textContent?.length > 0 &&
      elemnts[7].textContent?.length > 0 &&
      elemnts[8].textContent?.length > 0
    ) {
      modalWin.classList.add("active-flex");
      modalWin.querySelector("p").textContent = `Durang`;
    }
  });
}
console.clear()
