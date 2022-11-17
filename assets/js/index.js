var questionIndex = 0;
var time = questions.length * 15;
var timerId;


var startButton = document.getElementById('start-button');
var questionsDiv = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choices = document.getElementById('choices');
var submitButton = document.getElementById('submit-button');
var feedBack = document.getElementById('feedback');
var finalScore = document.getElementById('final-score');
var initialsEl = document.getElementById('initials');

// start quiz 
// start timer
// event listener when the button is clicked

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
    
    
    if(button.value !== questions[questionIndex].answer){
        // wrong
        time -= 15;

        if(time < 0 ){
            time = 0;
        }
        // new time
        timerEl.textContent = time;
        
        feedBack.innerHTML = "HA WRONG!";

    } else {
        // right
        
        feedBack.innerHTML = "Right-o";
    }
    
    // display feedback
    feedBack.setAttribute('class', 'feedback');
    
    // next question
    questionIndex++;
    
    // validate more questions and check time
    if(time <= 0 || questionIndex === questions.length){
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

    clearInterval(timerId);
    document.getElementById('end-screen').removeAttribute('class');
    questionsDiv.setAttribute('class', 'hide');
    feedBack.setAttribute('class', 'hide');
    timerEl.setAttribute('class', 'hide');
    finalScore.innerHTML = time;

}

function saveScore(){
    var initials = initialsEl.value.trim();

      // make sure value wasn't empty
  if (initials !== '') {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem('scores')) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem('scores', JSON.stringify(highscores));

    // redirect to next page
    window.location.href = 'scores.html';
  }
}

// display final score
// ask for initials
// display topscores
// ask to play again

startButton.addEventListener("click", startQuiz);
choices.onclick = submitAnswer;