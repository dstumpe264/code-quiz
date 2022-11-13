var startButton = document.getElementById('start-button');
var questionsDiv = document.getElementById('questions');
var timer = document.getElementById('timer');
var choices = document.getElementById('choices');
var submitButton = document.getElementById('submit-button');

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
    var currentQuestion = questions[0];
    console.log(questions);
    console.log(currentQuestion);
    var questionTitle = document.getElementById("title");
    questionTitle.textContent = currentQuestion.title;

    // loop through choices for current questions
    currentQuestion.choices.forEach(element => {
        console.log(element);
        var choice = element;
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice');
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = choice;
        choices.appendChild(choiceBtn);
    });
}
// determine right or wrong and return response
// next question
// display final score
// ask for initials
// display topscores
// ask to play again