var questions = {
    q1: {
        question: "Which game show has players compete in the 'Showcase Showdown' at the end of the show?",
        choices: {
            A: "The Price is Right",
            B: "Pick the Showcase!",
            C: "Prize Battle!",
            D: "Let's Make a Deal!"
        }
    },
    q2: {
        question: "These annoying little things enjoy removing your earned cash and prizes in 'Press Your Luck'",
        choices: {
            A: "Zonks",
            B: "Blammies",
            C: "Whammies",
            D: "Strikes"
        }
    },
    q3: {
        question: "This quiz game, currently hosted by Alex Trebek, has been on the air for 55 years!",
        choices: {
            A: "Jeffpardy",
            B: "Quiz me!",
            C: "Knowledge Champions",
            D: "Jeopardy"
        }
    },
    q4: {
        question: "In one of it's incarnations, this Nickelodeon game show pit family versus family, in a series of trivia questions, and physical challenges!",
        choices: {
            A: "Let's Make a Deal!",
            B: "Family Feud",
            C: "Double Dare",
            D: "Family Splat!"
        }
    },
    q5: {
        question: "You will have to avoid the ZONK in this show, formally hosted by Monty Hall, and currently hosted by Wayne Brady",
        choices: {
            A: "The Price is Right!",
            B: "Press Your Luck",
            C: "Hollywood Squares",
            D: "Let's Make a Deal!"
        }
    },
    q6: {
        question: "In this game from Nickelodeon, pairs of children answer trivia and complete challenges in order to explore a temple for prizes!",
        choices: {
            A: "Looting the Hidden Temple",
            B: "Legends of the Hidden Temple",
            C: "The Shrine of the Silver Monkey",
            D: "This show did not exist"
        }
    },
    q7: {
        question: "In this classic game show, two players would bet how many notes to guess the correct song title.",
        choices: {
            A: "Betting Tunes",
            B: "Name that Song",
            C: "Name that Tune",
            D: "Guess this!"
        }
    }
}
var correctAnswers = {
    q1: "A",
    q2: "C",
    q3: "D",
    q4: "C",
    q5: "D",
    q6: "B",
    q7: "C"
};


$(function() {
    for (x in questions) {
        var qDisplay = $("<div>");
        var question = questions[x].question;
        var choices = questions[x].choices;
        var q = $("<h4>");
        q.html(question);
        qDisplay.addClass("col-md-12 my-3").html(q);
        var answers = $("<div>").addClass("row");
        $(".questions").append(qDisplay).append(answers);
        for (y in choices) {
            var option = $("<div>").addClass("col-md-3 my-1 answer");
            option.html("<input type='radio' name='" + x + "' id='" + x + y + "' value='" + y + "'><label for='" + x + y + "'> " + choices[y] + "</label>");
            answers.append(option);
        }
    }
    var playTime = "";
    var correctCount = 0;
    var wrongCount = 0;
    var unAnswered = 0;

    function startTimer() {
        playTime = setInterval(count, 1000)
    }

    function stopTimer() {
        clearInterval(playTime);
    }
    startTimer();

    function count() {
        time--;
        $("#timer").text(timeConverter(time));
    }

    function checkAnswers() {

        stopTimer();
        for (x in questions) {
            console.log(x);
            var test = $("input[name='" + x + "']:checked");
            if (test.length > 0) {
                if (test.val() === correctAnswers[x]) {
                    console.log(test.val() + " | " + correctAnswers[x]);
                    correctCount++;
                } else {
                    console.log(test.val() + " | " + correctAnswers[x]);
                    wrongCount++;
                }
            } else {
                console.log(test.val() + " | " + correctAnswers[x]);
                unAnswered++;
            }
        }
        var correct = $("<h3>");
        correct.html("Correct Answers: " + correctCount);
        var wrong = $("<h3>");
        wrong.html("Incorrect Answers: " + wrongCount);
        var empty = $("<h3>");
        empty.html("Unanswered: " + unAnswered);
        $(".questions").empty().append(correct).append(wrong).append(empty);
        $(".done").hide();
    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
    var time = 60;
    $("#timer").text(timeConverter(time));
    var timer = setTimeout(checkAnswers, 1000 * time);
    $(".done").click(checkAnswers);

});