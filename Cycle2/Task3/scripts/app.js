import Quiz from "./quiz.js";

const initQuiz = () => {
   new Quiz().start();
};

document.addEventListener("DOMContentLoaded", initQuiz);
