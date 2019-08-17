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
    }
}
var answers = ["A", "C", "D", "C", "D"];

$(function () {
    for (x in questions) {
        var qDisplay = $("<div>");
        var question = questions[x].question; 
        var choices = questions[x].choices;
        var q = $("<h3>");
        q.html(question);
        qDisplay.addClass("row text-center").html(q);
        $(".questions").append(qDisplay);
        for (y in choices) {
            var option = $("<div>").addClass("col-md-3 my-2");
            option.html("<input type='radio' name='"+x+"' id='"+x+y+"' value='"+y+"'><label for='"+x+y+"'> "+choices[y]+"</label>");
            qDisplay.append(option);
        }
    }

    $("#timer").text("01:30");
    var timer = setTimeout(checkAnswers,90000);
    function checkAnswers()
    {
        
    }
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
      }
      
});