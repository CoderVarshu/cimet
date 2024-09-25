import { quizQuestions } from './quizData.js'


const timer = document.getElementById("timer");
const question = document.querySelector(".QuestionContainer");
const options = document.querySelector(".optionsConatiner");
const button = document.querySelector("button");


let score = 0;
let count = 5;
let questionCount = 1;
const completedQuestionIndex = [];
const shortedQuiz = quizQuestions.sort(() => 0.5 - Math.random())

let questionIndex = 0

function DisplayQuestion() {
  question.innerHtml = "";

  question.innerHTML = `Question ${questionIndex + 1} : ${shortedQuiz[questionIndex]?.question}`;

  options.innerHTML = "";

  shortedQuiz[questionIndex]?.answer?.forEach((option) => {

    const button = document.createElement("button");
    button.textContent = option;
    button.setAttribute("class", "options");
    button.addEventListener("click", (e) => {

      if (e.target.innerText === quizQuestions[questionIndex].correct) score++;
       
    });
    options.appendChild(button);
  });

  let id = setInterval(() => {

    console.log("Score", score)
    if (count < 0) {
      clearInterval(id);
      count = 5;
      questionCount++;
      questionIndex++;
      console.log("qcount",questionCount);
      DisplayQuestion();
    } 
    timer.innerHTML = count--;
    if (questionCount > 5) {
      displayScore()}
      
  }, 1000);

  function displayScore() {
    clearInterval(id);
    question.innerHTML = "";
    timer.innerHTML = "";
    options.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = `Your Score : ${score} / 5 `;
    options.append(h1);
  }

}

DisplayQuestion();
