var startButton = document.getElementById('start-button')

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

    return null;
}

// display questions and answers
// submit button
// determine right or wrong and return response
// next question
// display final score
// ask for initials
// display topscores
// ask to play again