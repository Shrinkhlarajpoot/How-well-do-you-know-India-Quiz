var readlineSync = require("readline-sync");
const chalk = require('chalk');
 
var score = 0;

// data of high score
var highScores = [
  {
    name: "riya",
    score: 9,
  },

  {
    name: "Somu",
    score: 7,
  },
  ,

  {
    name: "Shivi",
    score: 5,
  }
]

// array of objects
var questions = [{
  question: "How many union territories are there in India?",
  answer: "7"
}, {
  question: "What is the capiotal of Madhya Pradesh?",
  answer: "bhopal"
},
{
  question: "Which is the largest coffee producing state of India?",
  answer: "karnataka"
},
{
  question: "Which state has the largest area?",
  answer: "rajasthan"
},
{
  question: "which state has the largest population?",
  answer: "uttar pradesh"
},
{
  question: "in what state is the Elephant Falls located?",
  answer: "meghalaya"
},
{
  question: "Where is the headquarters of ISRO located?",
  answer: "banglore"
},

{
  question: "Who was the author of ramayana?",
  answer: "valmiki"
},

{
  question: "Which city is known as the Blue City of India?",
  answer: "jodhpur"
},

{
  question: "Which country shares the shortest border with India?",
  answer: "afghanistan"
},
{ question: "Who was the first Indian to recieve the Nobel peace prize?",
  answer: "rabindranath tagore"},
];

function welcome() {
 var userName = readlineSync.question(chalk.red("Hey, What's your good name? "));

  console.log("Welcome "+ userName + " TO  HOW WELL DO YOU KNOW INDIA? QUIZ...Take this Quiz to find out!!");
  console.log("-----------------------");
  console.log("So, here we go ->");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.bgRed(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
    console.log(chalk.bgGreen.black("Correct Answer is " + answer));
    score--;
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("These are the High Scores:")
  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();