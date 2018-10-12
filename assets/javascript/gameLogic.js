var time = 10;
var timeInterval;
var correct = 0;
var wrong = 0;
var answered = 0;

var questions = [
    {
        questions: "am i awesome?",
        answers: ["no", "heck no", "yes", "heck yes"],
        answerIndex: 3
    },
    {
        questions: "am i not awesome?",
        answers: ["no", "heck no", "yes", "heck yes"],
        answerIndex: 1
    },
    {
        questions: "Do you like kittens?",
        answers: ["yes", "heck yes"],
        answerIndex: 1
    }

];

function count() {
    time--;
    $("#timer").text(time);
    if (count === 0) {
        clearInterval(timeInterval);
    }
}

$("#timer").text(time);

$("#start").on("click", function () {
    console.log("boom boom click");

    $("#intro").addClass("hidden");
    $("#trivia").removeClass("hidden");

    renderQuestions();

    timeInterval = setInterval(function () {
        time--;
        $("#timer").text(time);
        if (time === 0) {
            checkTrivia();
            renderResults();
            clearInterval(timeInterval);
            $("#trivia").addClass("hidden");
            $("#finalScore").removeClass("hidden");

        }
    }, 1000);

    $("#submit").on("click", function () {
        checkTrivia();
        clearInterval(timeInterval);
        renderResults();
        $("#trivia").addClass("hidden");
        $("#finalScore").removeClass("hidden");
        time = 0;
    });

});

function renderQuestions() {

    var $submit = $("<button type='button' id='submit'>").text("Submmit");

    questions.forEach(function (question, index) {

        var $form = $("<form>");
        var $questions = $("<h3>").text(question.questions);

        $form.append($questions);

        question.answers.forEach(function (answers, i) {
            var $input = $("<input type='radio'>");

            $input.attr("value", answers);
            $input.attr("name", index);
            $form.append($input);
            $form.append(answers);
        });



        $("#questions").append($form);
    })

    $("#questions").append($submit);

}

function renderResults() {
    var $head = $("<h3>").text("Final Scores");
    var $correct = $("<p>").text("Correct: " + correct);
    var $wrong = $("<p>").text("Incorrect: " + wrong);
    var $totalAnswered = $("<p>").text("Total Answered: " + answered);

    $("#finalScore").append($head, $correct, $wrong, $totalAnswered);

}

function checkTrivia() {
    var $from = $("form");

    $from.each(function (i, elem) {
        var index = i;
        $(elem).find("input:checked").each(function (i, elem) {
            answered++;


            console.log(index);

            if (elem.value === questions[index].answers[questions[index].answerIndex]) {
                console.log(elem.value);
                correct++;
            }
            else {
                wrong++;
            }

        })
    });

}