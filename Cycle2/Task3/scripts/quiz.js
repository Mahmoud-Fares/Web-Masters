import Question from "./question.js";

const questions = [
   {
      question: "Which is the largest animal in the world?",
      answers: [
         { text: "Shark", correct: false },
         { text: "Blue Whale", correct: true },
         { text: "Elephant", correct: false },
         { text: "Giraffe", correct: false },
      ],
   },

   {
      question: "which is largest desert in the world?",
      answers: [
         { text: "Kalahari", correct: false },
         { text: "Gobi", correct: false },
         { text: "Sahara", correct: false },
         { text: "Antarctica", correct: true },
      ],
   },

   {
      question: "which is smallest country in the world?",
      answers: [
         { text: "Vatican City", correct: true },
         { text: "Bhutan", correct: false },
         { text: "Nepal", correct: false },
         { text: "Sheri Lanka", correct: false },
      ],
   },

   {
      question: "which is smallest continent in the world?",
      answers: [
         { text: "Asia", correct: false },
         { text: "Australia", correct: true },
         { text: "Arctic", correct: false },
         { text: "Africa", correct: false },
      ],
   },
];

class Quiz {
   static #score = 0;
   static #currentQuestionIndex = 0;

   render() {
      const main = document.querySelector("main");
      const title = this.#createTitle();
      const container = this.#createContainer();

      main.append(title, container);
   }

   #createTitle() {
      const title = document.createElement("h1");
      title.textContent = "Quiz";
      return title;
   }

   #createContainer() {
      const container = document.createElement("div");
      container.classList.add("container");
      return container;
   }

   start() {
      Quiz.#score = 0;
      Quiz.#currentQuestionIndex = 0;
      this.render();
      Quiz.showQuestion();
   }

   static showQuestion() {
      new Question(
         Quiz.#currentQuestionIndex,
         questions[Quiz.#currentQuestionIndex].question,
         questions[Quiz.#currentQuestionIndex].answers
      ).render();
   }

   static async next() {
      const container = document.querySelector(".container");
      const nextButton = document.createElement("button");

      nextButton.id = "next-btn";
      nextButton.textContent = "Next";

      container.append(nextButton);

      // Force reflow: This is a browser layout recalculation technique
      // 1. When we read offsetHeight, the browser must calculate the layout
      // 2. This ensures previous DOM changes are processed before continuing
      // 3. Without this, multiple style changes might be batched together
      // 4. Batching could prevent CSS transitions from working properly
      // 5. The void operator just discards the returned height value

      // - Here ensures the browser processes the button addition
      // before starting the animation
      void nextButton.offsetHeight;
      nextButton.classList.add("show");

      nextButton.addEventListener("click", async () => {
         nextButton.classList.remove("show");
         await this.#wait(300);
         nextButton.remove();

         Quiz.#currentQuestionIndex++;

         if (Quiz.#currentQuestionIndex < questions.length) {
            await this.#transitionToNextQuestion();
         } else {
            await new Quiz().#showResult();
         }
      });
   }

   static async #transitionToNextQuestion() {
      const container = document.querySelector(".container");
      container.classList.add("slide-out");

      await this.#wait(300);
      container.innerHTML = "";
      container.classList.add("slide-in");
      container.classList.remove("slide-out");

      Quiz.showQuestion();

      // - Here ensures all question content is fully rendered
      // before starting the slide-in animation
      void container.offsetHeight;
      container.classList.remove("slide-in");
   }

   static #wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }

   async #showResult() {
      const container = document.querySelector(".container");
      container.classList.add("slide-out");

      await Quiz.#wait(300);
      container.innerHTML = "";

      const resultElement = this.#createResultElement();
      container.classList.add("slide-in");
      container.append(resultElement);

      // - Here ensures the result element is fully rendered
      // before removing the transition classes
      void container.offsetHeight;
      container.classList.remove("slide-in", "slide-out");

      // Add confetti effect based on score
      const score = Quiz.#score;
      const totalQuestions = questions.length;
      const percentage = (score / totalQuestions) * 100;

      if (percentage > 0) {
         // Only show confetti if they got at least one correct
         confetti({
            particleCount: percentage * 2,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#9aeabc", "#001e4d", "#ffffff"],
         });
      }

      await Quiz.#wait(300);
      this.#addPlayAgainButton();
   }

   #addPlayAgainButton() {
      const container = document.querySelector(".container");
      const playAgainBtn = document.createElement("button");
      playAgainBtn.id = "again-btn";
      playAgainBtn.textContent = "Play Again";

      container.append(playAgainBtn);

      // - Here ensures the play again button is fully rendered
      // before starting its show animation
      void playAgainBtn.offsetHeight;
      playAgainBtn.classList.add("show");

      playAgainBtn.addEventListener("click", () => this.#handlePlayAgain());
   }

   #handlePlayAgain() {
      window.location.reload();
   }

   static get score() {
      return Quiz.#score;
   }

   static set score(value) {
      Quiz.#score = value;
   }

   #createResultElement() {
      const resultElement = document.createElement("h2");
      resultElement.textContent = `You scored ${Quiz.#score} out of ${
         questions.length
      }!`;
      return resultElement;
   }
}

export default Quiz;
