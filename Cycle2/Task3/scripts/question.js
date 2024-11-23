import Quiz from "./quiz.js";

class Question {
   #index;
   #question;
   #answers;

   constructor(index, question, answers) {
      this.#index = index;
      this.#question = question;
      this.#answers = answers;
   }

   render() {
      const container = document.querySelector(".container");
      const questionElement = this.#createQuestionElement();
      const answerButtons = this.#createAnswerButtons();

      container.append(questionElement, answerButtons);
   }

   #createQuestionElement() {
      const questionElement = document.createElement("h2");
      questionElement.textContent = `${this.#index + 1}. ${this.#question}`;
      return questionElement;
   }

   #createAnswerButtons() {
      const answerButtons = document.createElement("div");
      answerButtons.id = "answer-buttons";

      this.#answers.forEach((answer) => {
         const button = this.#createAnswerButton(answer);
         answerButtons.append(button);
      });

      return answerButtons;
   }

   #createAnswerButton(answer) {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.dataset.correct = answer.correct;
      button.textContent = answer.text;
      button.addEventListener("click", (e) => this.#handleAnswerClick(e));
      return button;
   }

   #handleAnswerClick(event) {
      const selectedButton = event.target;
      const isCorrect = selectedButton.dataset.correct === "true";

      this.#showResult(selectedButton, isCorrect);
      this.#disableAllButtons();
      Quiz.next();
   }

   #showResult(selectedButton, isCorrect) {
      selectedButton.classList.add(isCorrect ? "correct" : "incorrect");
      if (isCorrect) Quiz.score += 1;
   }

   #disableAllButtons() {
      const buttons = document.querySelectorAll("#answer-buttons button");
      buttons.forEach((button) => {
         if (button.dataset.correct === "true") button.classList.add("correct");

         button.disabled = true;
      });
   }
}

export default Question;
