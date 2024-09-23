const quizQuestions = [
  {
    question: "What is the capital of India",
    answer: ["Jaipur", "Gujrat", "Delhi", "Rajsthan"],
    correct: "Delhi",
  },
  {
    question: "2 * 2 - 1",
    answer: [1, 5, 3, 0],
    correct: 3,
  },
  {
    question: "1 + 4 * ? = 10",
    answer: [1, 5, 2, 6],
    correct: 2,
  },
  {
    question: "What is the capital of MP ",
    answer: ["Jaipur", "Bhopal", "Delhi", "Rajsthan"],
    correct: "Bhopal",
  },
  {
    question: "Who is Dropadi Murmu ",
    answer: [
      "CM of MP",
      "President of india",
      "Loksabha Speaker",
      "none of these",
    ],
    correct: "President Of India",
  },
];

const timer = document.getElementById("timer");
const question = document.querySelector(".QuestionContainer");
const options = document.querySelector(".optionsConatiner");
const button = document.querySelector("button");
let score = 0;
let count = 5;
let questionCount = 1;
const completedQuestionIndex = [];
const shortedQuiz = quizQuestions.sort(() => 0.5 - Math.random())
const totalQuestion = [...quizQuestions];

let questionIndex = 1
completedQuestionIndex.push(questionIndex)

function DisplayQuestion() {
  question.innerHtml = "";

  question.innerHTML = `Question ${questionIndex + 1} : ${shortedQuiz[questionIndex].question}`;

  options.innerHTML = "";
  
  shortedQuiz[questionIndex].answer.forEach((option) => {

    const button = document.createElement("button");
    button.textContent = option;
    button.setAttribute("class", "options");
    button.addEventListener("click", (e) => {
      if (e.target.innerText === quizQuestions[questionIndex].correct) score++;
      questionCount++;
    });
    options.appendChild(button);
  });
  
  let id = setInterval(() => {

    console.log("Score", score, questionCount)
    if (count < 0) {
      clearInterval(id);
      count = 5;
      questionCount++;
      questionIndex++;
      DisplayQuestion();
    } else if (questionCount > 5) {
      displayScore();
    }
    timer.innerHTML = count--;
  }, 1000);

  function displayScore() {
    question.innerHTML = "";
    timer.innerHTML = "";
    options.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.textContent = `Your Score : ${score} / 5 `;
    options.append(h1);
    console.log("SCORE", score, timer.innerHTML);
    clearInterval(id);
  }

}

DisplayQuestion();
