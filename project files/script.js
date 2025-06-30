const quizcontainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submitBtn');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;


const quizQuestions = [
    {
        question: "What is the capital of Andhra Pradesh?",
        options: ["Berlin", "Madrid", "Amaravati", "Rome"],
        answer: "Amaravati"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    }
]


function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;


    optionsContainer.innerHTML = '';

currentQuestion.options.forEach((option,index) => { 
    const optionButton=document.createElement('button');
    optionButton.textContent = option;

    optionButton.onclick= function() {
        selectAnswer(option, currentQuestion.correctanswer)
    }

    optionsContainer.appendChild(optionButton);
   })


}

function selectAnswer(selectedoption,correctAnswer) {
  if  (selectedoption === correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct!";
  }else{
    feedbackElement.textContent = `Incorrect. The correct answer is : ${correctAnswer} `;
  }
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {   
      loadQuestion();
    } else {
      endQuiz();
    }
}


function endQuiz(){
    quizcontainer.innerHTML="<h2>Quiz Completed!</h2>";
    scoreElement.textContent = "final score:  "+ score + " out of " + quizQuestions.length;
}

function submitAnswer(){
    const selectedOption = document.querySelector('input[name="option"]:checked"');

    if (selectedOption) {
        selectAnswer = (selectedOption.value)
    }
}
