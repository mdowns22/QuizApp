'use strict'

/* User story:
This is app is a quiz that test ones' knowledge about the Philadelphia Eagles.
The first page of the app is an introduction to the quiz where there will be a start button
for the user to click to begin the quiz.
The user then will be asked 10 multiple choice questions.
On each question the user will select one answer and submit the answer by clicking the kick button.
If the user gets the correct answer the user will see an image and statement stating that they were correct and
will click on the next button to go to the next question.
If the user gets chooses the wrong answer, the user will see an image and will be shown the correct answer and will click on the next button to go to the next question.
While the user is going through the quiz, there will be a question and score counter visible.
After answering all 10 questions, the user will click next and see an image and recieve feedback based on their score and the user can click on the restart button to retake the quiz.
*/

//console.log(content);

// Declare my question number and current score equal to 0
let questionNumber = 0;
let currentScore = 0;

//user need to be able to click start button to see the first question and start the quiz
function startButton() {
    console.log("Start button has been clicked")
    $('.begin').on('click', function (event) {

      console.log("Start button has been clicked");
      quizPage(questionNumber);
    });

}

// Function grab question from content array once start button is clicked
function quizPage(questionNumber) {
  let question = content[questionNumber].question;
  let answer = content[questionNumber].answers;
  let userQuestionNum = questionNumber + 1;
  let contentHtml = `<div class="progressNum">
                <h3 class="question-num">Question: ${userQuestionNum} out of 10 </h3>
            </div>
            <div class="progressScore">
                <h3 class="current-score">Score: ${currentScore}</h3>
            </div><br>
        <section class="quiz">
            <form action="feedback.html" class="quiz-section">
                <fieldset>
                    <legend class="question">${question}</legend>
                    <div class="inputs">
                        <div class="answer">
                            <label class="answerLabel" for="${answer[0]}">
                            <input type="radio" name="option" id="${answer[0]}" value="${answer[0]}" required>${answer[0]}</label>
                        </div>
                        <div class="answer">
                            <label class="answerLabel" for="${answer[1]}">
                            <input type="radio" name="option" id="${answer[1]}" value="${answer[1]}" required>${answer[1]}</label>
                        </div>
                        <div class="answer">
                            <label class="answerLabel" for="${answer[2]}">
                            <input type="radio" name="option" id="${answer[2]}" value="${answer[2]}" required>${answer[2]}</label>
                        </div>
                        <div class="answer">
                            <label class="answerLabel" for="${answer[3]}">
                            <input type="radio" name="option" id="${answer[3]}" value="${answer[3]}" required>${answer[3]}</label>
                        </div>
                    </div>
                        <button type="submit" class="kick-off">Kick!!</button>
                </fieldset>
            </form>
        </section>`;
        $('.quiz-start').html(contentHtml);
}


// User need to submit answer chosen to see if right or wrong by clicking "Kick" button
function kickButton() {
  $('.quiz-start').on('submit', '.quiz-section', function(event) {
    event.preventDefault();
    console.log("Submitted");
    let userChoice = $('input:checked').val();
    console.log(userChoice);
    if(userChoice === content[questionNumber].correctAnswer) {
      currentScore++;
      correct();
    } else {
      wrong();
    }
    questionNumber++;
  });
}



//After submitting answer user will see feedback if correct
function correct() {
console.log("You got it right!");
let userQuestionNum = questionNumber + 1;
let good = `<div class="progressNum">
                <h3 class="question-num">Question: ${userQuestionNum} out of 10 </h3>
            </div>
            <div class="progressScore">
                <h3 class="current-score">Score: ${currentScore}</h3>
            </div>
              <!--  </section> -->
        <section class="quiz">
            <form action="result.html" class="quiz-section">
                <fieldset>
                    <legend class="feedbackImg"><img src="http://www.uwindsor.ca/dailynews/sites/uwindsor.ca.dailynews/files/styles/full/public/900_fieldgoal.jpg?itok=u6e_RY4E"
                     alt="FG good" class="feedbackImage"></legend>
                  <!--     -->
                    <label class="feedback">Yes! That's correct!</label><br>
                    <div class="nextButton">
                    <button type="button" class="next">Next</button>
                    </div>
                </fieldset>
            </form>
        </section>`;
        $('.quiz-start').html(good);
}


//After submitting answer user will see feedback if wrong
function wrong() {
console.log("You are wrong");
let userQuestionNum = questionNumber + 1;
let noGood = `<div class="progressNum">
                <h3 class="question-num">Question: ${userQuestionNum} out of 10 </h3>
            </div>
            <div class="progressScore">
                <h3 class="current-score">Score: ${currentScore}</h3>
            </div>
              <!--  </section> -->
        <section class="quiz">
            <form action="result.html" class="quiz-section">
                <fieldset>
                    <legend class="feedbackImg"><img src="https://sparkpeo.hs.llnwd.net/e4//nw/1/8/l185794554.jpg" alt="Charlie Brown missed kick" class="feedbackImage"></legend>
                    <label class="feedback">Wrong! The correct answer is ${content[questionNumber].correctAnswer}</label><br>
                    <div class="nextButton">
                    <button type="button" class="next">Next</button>
                    </div>
                </fieldset>
            </form>
        </section>`;
        $('.quiz-start').html(noGood);
}

//After receiving feedback user will need to click Next for next question or to view results
function nextButton() {
$('.quiz-start').on('click', '.next', function (event) {
  if(questionNumber < 10) {
  console.log("Next question please");
    quizPage(questionNumber);
  } else {
    getResults();
  }
  
});     
}

//After completing all questions user will get results of quiz based on score, will received 1/3 result pages
function getResults() {
  if(currentScore > 7) {
    resultA();
  } else if(currentScore > 4) {
    resultC();
  } else {
    resultF();
  }
 
}

//These functions A, C, F are the 3 different results that will be rendered based on the user's scored
function resultA() {
console.log("getting results!");
  let userQuestionNum = 10;
let resultPage = `<div class="progressNum">
                <h3 class="question-num">Question: ${userQuestionNum} out of 10 </h3>
            </div>
            <div class="progressScore">
                <h3 class="current-score">Score: ${currentScore}</h3>
            </div>
        <section class="quiz">
            <form action="" class="quiz-section">
                <fieldset>
                    <legend class="resultImg"><img src="https://sites.northwestern.edu/nusportsanalytics/files/2019/01/lead_720_405-1v3yh49-260x146.jpg
                    "  alt="Nick Foles SB MVP"class="pass"></legend>
                    <label class="finalFeedback">Nice Job! Fly Eagles Fly!! ${currentScore} out of 10</label><br>
                    <button type="button" class="restart">Restart</button>
                </fieldset>
            </form>
        </section>`;
        $('.quiz-start').html(resultPage);
}

function resultC() {
console.log("getting results!");
let userQuestionNum = 10;
let resultPage = `<div class="progressNum">
                <h3 class="question-num">Question: ${userQuestionNum} out of 10 </h3>
            </div>
            <div class="progressScore">
                <h3 class="current-score">Score: ${currentScore}</h3>
            </div>
        <section class="quiz">
            <form action="" class="quiz-section">
                <fieldset>
                    <legend class="resultImg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xyFdFwDPwYdRJWy5c1t2EtjJo0W-KPy6m0qw4Ki8yHZZvI2wwA
                    " alt="4 and inches" class="almost"></legend>
                    <label class="finalFeedback">Aw man so close! Try again! ${currentScore} out of 10</label><br>
                    <button type="button" class="restart">Restart</button>
                </fieldset>
            </form>
        </section>`;
        $('.quiz-start').html(resultPage);
}


function resultF() {
console.log("getting results!");
let userQuestionNum = 10;
let resultPage = `<div class="progressNum">
                <h3 class="question-num">Question: ${userQuestionNum} out of 10 </h3>
            </div>
            <div class="progressScore">
                <h3 class="current-score">Score: ${currentScore}</h3>
            </div>
        <section class="quiz">
            <form action="" class="quiz-section">
                <fieldset>
                    <legend class="resultImg"><img src="https://cdn.vox-cdn.com/thumbor/gLI5mzqbnVX1ueUEwvT40k-MqVs=/0x0:2561x1707/352x235/cdn.vox-cdn.com/uploads/chorus_image/image/63880927/usa_today_10508709.0.jpg
                    " alt="Qb sack" class="fail"></legend>
                    <label class="finalFeedback">Not even close. You should try out for the Cowboys! ${currentScore} out of 10</label><br>
                    <button type="button" class="restart">Restart</button>
                </fieldset>
            </form>
        </section>`;
        $('.quiz-start').html(resultPage);
}


//The user will be allowed to restart the quiz on the results page
function restartButton() {
$('.quiz-start').on('click', '.restart', function (event) {
  //location.reload();
  currentScore = 0;
  questionNumber = 0;
  quizPage(questionNumber);
});
}



//Put all functions of the quiz into one function called renderQuiz
function renderQuiz() {
console.log("Quiz has started!");  
startButton();
kickButton();
nextButton();
restartButton();
}

//calling quiz
$(renderQuiz);