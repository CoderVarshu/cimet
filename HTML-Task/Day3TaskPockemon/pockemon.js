const searchBox = document.querySelector(".searchBox");
const select = document.querySelector("#select");
const showPockemon = document.querySelector(".showPockemon");
const loadBtn = document.querySelector(".loadMoreBtn");

let fetchedData = [];
let optionsSet = new Set();

let limit = 20;

async function FetchPockemon() {
  try {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
    );

    const response = await data.json();

    let fetchPromise = response.results.map(async (item) => {
      let url = await fetch(item.url);
      let result = await url.json();
      return result;
    });

    fetchPromise = await Promise.all(fetchPromise);

    fetchedData = [...fetchedData, ...fetchPromise];

    DisplayPockemon(fetchedData);
    FilterByTypeOptions();
  } catch (error) {
    console.log(error);
  }
}

loadBtn.addEventListener("click", () => {
  limit = limit + 20;
  FetchPockemon();
});
let filteredData;
select.addEventListener("change", (e) => {

  const selectedValue = e.target.value;
  function checkType(data) {
    if (selectedValue === "all") {
      return data;
    } else {
      return data.types[0].type.name === selectedValue;
    }
  }
  filteredData = fetchedData.filter(checkType);

  DisplayPockemon(filteredData);
});

searchBox.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase().trim();

  function searchByName(data) {
    return data.name.toLowerCase().includes(searchValue);
  }

  const filteredNewData = filteredData.filter(searchByName);

  DisplayPockemon(filteredNewData);
});


function DisplayPockemon(data) {
  showPockemon.innerHTML = "";

  data.forEach((item) => {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");

    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front");

    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("flip-card-back");

    const pockeImage = document.createElement("img");
    pockeImage.src = item.sprites.other.dream_world.front_default;
    pockeImage.classList.add("pockeImage");

    const pockeName = document.createElement("p");
    const pockeType = document.createElement("p");
    const pockeHeight = document.createElement("p");
    const pockeWeight = document.createElement("p");

    pockeName.innerText = `Name: ${item.name}`;
    pockeType.innerText = `Type: ${item.types[0].type.name}`;
    pockeHeight.innerText = `Height: ${item.height}`;
    pockeWeight.innerText = `Weight: ${item.weight}`;

    flipCardFront.append(pockeImage, pockeName, pockeType);
    flipCardBack.append(pockeHeight, pockeWeight);

    flipCardInner.append(flipCardFront, flipCardBack);
    flipCard.appendChild(flipCardInner);
    showPockemon.appendChild(flipCard);

    optionsSet.add(item.types[0].type.name);
  });
}


function FilterByTypeOptions() {
  select.innerText = "";

  let OptionsArray = Array.from(optionsSet);
  OptionsArray.unshift("all");

  for (i of OptionsArray) {
    const options = document.createElement("option");
    options.setAttribute("value", i);
    options.innerText = i;
    select.append(options);
  }
}

FetchPockemon();
