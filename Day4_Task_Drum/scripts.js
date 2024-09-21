const rightDiv = document.querySelector("#right");

const Data = [
  {
    name: "crash",
    img: "assets/crash.png",
    audio: "assets/crash.mp3",
    key: ["a", "s", 'd', 'f', 'm', 'n'],
  },
  {
    name: "kick",
    img: "assets/kick.png",
    audio: "assets/kick.mp3",
    key: ["z", "x", 'c', 'v', 'b'],
  },
  {
    name: "snare",
    img: "assets/snare.png",
    audio: "assets/snare.mp3",
    key: ["q", "w", 'e', 'r', 't', 'y', 'u'],
  },
  {
    name: "tom",
    img: "assets/tom.png",
    audio: "assets/tom.mp3",
    key: ["g", "h", 'j', 'k', 'l'],
  },
];

rightDiv.addEventListener("click", (e) => {
  Data.forEach((data) => {
    if (data.name === e.target.alt) PlayAudio(data.audio);
  });
});

document.addEventListener("keydown", (e) => {
  const pressedKey = e.key;
  Data.forEach((data) => {
    data.key.find((item) => {
      if (item === pressedKey) PlayAudio(data.audio);
    });
  });
});

function ShowInstruments(instruments) {
  instruments.forEach((data) => {
    const div = document.createElement("div");
    const name = document.createElement("p");
    const image = document.createElement("img");
    image.src = data.img;
    image.alt = data.name;
    image.classList.add("images");
    name.innerText = data.name;
    div.append(image);
    rightDiv.append(div);
  });
}

function PlayAudio(audioSrc) {
  const audio = new Audio(audioSrc);
  audio.play();
}

ShowInstruments(Data);
