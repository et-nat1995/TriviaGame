var countDown = 120;
var correct;
var wrong;
var answered;
var interValId
var runningClock = false;

var obj = [{
    question: "The sky is blue?",
    answer: "True",
    possibleAnswers: ["True", "False"]
},
{
    question: "Pizza is amazing",
    answer: "True",
    possibleAnswers: ["True", "False"]
},
{
    question: "A new starbucks opened recently on BellRoad",
    answer: "True",
    possibleAnswers: ["True", "False"]
},
{
    question: "College Parties Suck",
    answer: "False",
    possibleAnswers: ["True", "False"]
},
{
    question: "I know how to code.",
    answer: "True",
    possibleAnswers: ["True", "False"]
}];

function startTime() {
    if (!runningClock) {
        interValId = setInterval(count, 1000);
        runningClock = true;
    }
}

function count() {
    countDown--;
    var $time = $("#timer");

    $time.html("<h3>Time Remaining: " + countDown+"</h3>")

    console.log(countDown);
    if (countDown === 0) {
        clearInterval(interValId);
    }
}

function renderQuestions(value) {
    var $newForm = $("<form>");
    var $question = $("<h3>").text(value.question);

    $newForm.append($question);
    

    for(var i = 0; i <value.possibleAnswers.length; i++){
        if(value.possibleAnswers[i] === value.answer){
            var $radioButtion = $("<input type='radio' name='possibleAnswers' value='correct'> " + value.possibleAnswers[i] +" </input>");
        }
        else{
            var $radioButtion = $("<input type='radio' name='possibleAnswers' value='wrong'> " + value.possibleAnswers[i] +" </input>");
        }
        $newForm.append($radioButtion);
    }

    $("#questions").append($newForm);
}

// obj.forEach(renderQuestions);
// startTime();

// where everything will happen.
$(document).ready(function(){
    $(".start").on("click", function(){
        startTime();
        obj.forEach(renderQuestions);
    })

})