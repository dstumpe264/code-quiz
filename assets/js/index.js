var startButton = document.getElementById('start-button');
var questionsDiv = document.getElementById('questions');
var timer = document.getElementById('timer');
var choices = document.getElementById('choices');
var submitButton = document.getElementById('submit-button');
var feedBack = document.getElementById('feedback');
var questionIndex = 0;

// start quiz 
// start timer
// event listener when the button is clicked
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    // hide start screen
    var startScreen = document.getElementById('start-screen');
    startScreen.setAttribute('class', 'hide'); 
    // start time

    // display questions
    questionsDiv.removeAttribute('class');

    getQuestion();

}

function getQuestion(){
    // display questions and answers
    // submit button
    var currentQuestion = questions[questionIndex];
  
    var questionTitle = document.getElementById("title");
    questionTitle.textContent = currentQuestion.title;

    // reset choices
    choices.innerHTML = '';

    // loop through choices for current questions
    currentQuestion.choices.forEach(element => {
        
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice');
        choiceBtn.setAttribute('value', element);
        choiceBtn.textContent = element;
        choices.appendChild(choiceBtn);
    });
}
// determine right or wrong and return response
function submitAnswer(event){
    var button = event.target;


    if(button.value !== questions[0].answer){
        // wrong
        console.log('wrong');
        feedBack.innerHTML = "HA WRONG!";
    } else {
        // right
        console.log('right');
        feedBack.innerHTML = "Right-o";
    }

    // display feedback
    feedBack.setAttribute('class', 'feedback');

    // next question
    questionIndex++;

    getQuestion();
}

// display final score
// ask for initials
// display topscores
// ask to play again

choices.onclick = submitAnswer;