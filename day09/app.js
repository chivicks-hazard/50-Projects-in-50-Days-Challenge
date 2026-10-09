const quizForm = document.querySelector("#quizApp form");
const submitBtn = document.getElementById("submitBtn");
const questionOne = document.getElementById("questionOne");
const questionTwo = document.getElementById("questionTwo");
const questionThree = document.getElementById("questionThree");
const questionFour = document.getElementById("questionFour");

const correctAnswers = ["c", "b", "c", "a"];

const questionOneOptions = questionOne.querySelectorAll(".radio-group input");

console.log(questionOneOptions);
