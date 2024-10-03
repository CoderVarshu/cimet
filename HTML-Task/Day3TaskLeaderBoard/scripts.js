const form = document.querySelector("form");

const newArray = [];

const formElements = Array.from(document.forms[0].children);
formElements.pop();

form.addEventListener("submit", init);

function init(e) {
  e.preventDefault();
  const playerData = {};
  formElements.forEach((data) => (playerData[data.id] = data.value));
  newArray.push(playerData);

  DisplayLeaderBoard();
  resetForm();
}

function resetForm() {
  form.reset();
  formElements[0].focus();
}

function DisplayLeaderBoard() {
  const Board = document.querySelector(".board");
  Board.innerHTML = "";
   newArray.sort((a,b)=>Number(b.score)-Number(a.score))
   console.log(newArray)
    newArray.forEach((element, index) => {
    const parent = document.createElement("div");
    const name = document.createElement("p");
    const country = document.createElement("p");
    const score = document.createElement("p");
    const deleteButton = document.createElement("button");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("buttton");

    name.innerHTML = element.fname + " " + element.lname;
    country.innerHTML = element.select;
    score.innerHTML = element.score;
    deleteButton.innerText = "delete";
    incrementButton.innerText = "+5";
    decrementButton.innerText = "-5";

    deleteButton.addEventListener("click", (e) => {
      newArray.splice(index, 1);
      DisplayLeaderBoard();
    });

    incrementButton.addEventListener("click", (e) => {
      newArray[index].score = Number(newArray[index].score) + 5;
      DisplayLeaderBoard();
    });
    decrementButton.addEventListener("click", (e) => {
      newArray[index].score = Number(newArray[index].score) - 5;
      DisplayLeaderBoard();
    });

    parent.append(
      name,
      country,
      score,
      deleteButton,
      incrementButton,
      decrementButton
    );

    parent.classList.add("playerRecord");

    Board.append(parent);
  });
}
