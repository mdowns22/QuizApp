'use strict'

/* User story */

//console.log(content);
//declare the number and score and set them to zero questions are in and array which start at index 0 which will 
//be my question number 1
let questionNumber = 0;
let score = 0;

//function that allows the users to start the quiz after clicking the start button
function startQuiz() {
    $('#js-begin').on('click', function () {
    $('.quiz-start').hide();
        //quiz page
    $(renderQuiz);
    });
}

//function to handle form for the quiz
function quizContent() {
    return `
    <h2>${content[questionNumber].question}</h2>
    <section class="quiz">
        <form class="quiz-section">
                <fieldset>
                    <input type="radio" name="option" value="${content[questionNumber].answers[0]}" class="option" required>
                    <span>${content[questionNumber].answers[0]}<span><br>
                    <input type="radio" name="option" value="${content[questionNumber].answers[1]}" class="option" required>
                    <span>${content[questionNumber].answers[1]}<span><br>
                    <input type="radio" name="option" value="${content[questionNumber].answers[2]}" class="option" required>
                    <span>${content[questionNumber].answers[2]}<span><br>
                    <input type="radio" name="option" value="${content[questionNumber].answers[3]}" class="option" required>
                    <span>${content[questionNumber].answers[3]}<span><br>
                    <button type="submit" class="kick-off">Kick!!</button>
                </fieldset>
        </form>
    </section>`;
}

function renderQuiz() {
    $('.quiz').html(quizContent());
    handleKickOffButton();
}

function handleKickOffButton () {
    $('.quiz').on('submit', function(event) {
        event.preventDefault();
        const userSelection = $('input:checked').val();
        const correctAnswer = `${content[questionNumber].correctAnswer}`;
        if(userSelection === correctAnswer) {
            correctChoice();
        } else {
            wrongChoice();
        }
    });
}

function correctChoice () {
    console.log('Correct');
    $('.quiz').html(`
    <section class="quiz">
    <h2 class="correctPrompt">Correct!</h2>
    <button class="next" type="submit">Next</button>
    </section>`);
    handleNextButton();
}


function wrongChoice () {
    console.log('Wrong');
    $('.quiz').html(`
    <section class="quiz">
    <h2 class="wrongPrompt">No Good! The correct answer is: ${content[questionNumber].correctAnswer}</h2>
    <button class="next" type="submit">Next</button>
    </section>`);
    handleNextButton();
}

function handleNextButton () {
    $('.next').on('click', function (event) {
        questionNumber++;
        renderQuiz();
    })
}

$(startQuiz);