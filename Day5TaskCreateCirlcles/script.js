const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "lime",
];

const container = document.querySelector("#container");
const reset = document.getElementById('reset')
const undo = document.getElementById('undo')
const redo = document.getElementById('redo')

 let dots = []
 let removedDots = []


  container.addEventListener("click", function (event) {
  const dot = document.createElement("div");
  dot.className = "dot";

  dot.style.left = `${event.offsetX - 5}px`;
  dot.style.top = `${event.offsetY - 5}px`;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  dot.style.backgroundColor = randomColor;

  container.append(dot);
    dots.push(dot)
    removedDots = []

    DisplayBtnCSS()
});


reset.addEventListener('click', ()=>{
    dots.forEach((dot) => dot.remove())
    removedDots = []
    dots = []

    DisplayBtnCSS()
})

undo.addEventListener('click', () =>{
    if(dots.length > 0 ) {
        const getDot = dots.pop()
          getDot.remove()
        removedDots.push(getDot)
    }
    DisplayBtnCSS()
})


redo.addEventListener('click', ()=>{
    if(removedDots.length >0) {
      const dotToAppend =  removedDots.pop()
      dots.push(dotToAppend)
      container.appendChild(dotToAppend)
    }
    DisplayBtnCSS()
})


function DisplayBtnCSS() {

    if(dots.length <= 0 ) {
        reset.setAttribute('class', 'disabled')
        redo.setAttribute('class', 'disabled')
        undo.setAttribute('class', 'disabled')
    }
    else if (removedDots.length <=0) {
        reset.setAttribute('class', 'reset')
        redo.setAttribute('class', 'disabled')
        undo.setAttribute('class', 'undo')
    }
    else {
        reset.setAttribute('class', 'reset')
        redo.setAttribute('class', 'redo')
        undo.setAttribute('class', 'undo')
    }
   
} 


DisplayBtnCSS()