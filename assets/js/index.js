var questionIndex = 0;
var time = questions.length * 15;
var timerId;


var startButton = document.getElementById('start-button');
var questionsDiv = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choices = document.getElementById('choices');
var submitButton = document.getElementById('submit-button');
var feedBack = document.getElementById('feedback');

// start quiz 
// start timer
// event listener when the button is clicked
console.log(questions);
console.log(questions.length);
console.log(time);
function startQuiz() {
    // hide start screen
    var startScreen = document.getElementById('start-screen');
    startScreen.setAttribute('class', 'hide'); 
    // start time
    timerId = setInterval(countdown, 1000);
    timerEl.textContent = time;
    console.log(time);
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
    
    // validate more questions
    if(questionIndex === questions.length){
        endQuiz();
    } else {
        getQuestion();
    }
}

function countdown(){
    time--;
    timerEl.textContent = time;
    
    if (time <= 0){
        endQuiz();
    }
}

function endQuiz(){
    questionsDiv.setAttribute('class', 'hide');
}

// display final score
// ask for initials
// display topscores
// ask to play again

startButton.addEventListener("click", startQuiz);
choices.onclick = submitAnswer;