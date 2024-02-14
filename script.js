const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const progressEl = document.getElementById('progress');
const progressBarEl = document.getElementById('progress-bar');
const scoreEl = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

const quiz = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correct: 0
    },
    {
        question: 'What is the capital of Germany?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correct: 1
    },
    // Add more questions here
];

function loadQuestion() {
    const currentQuiz = quiz[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = '';
    currentQuiz.options.forEach((option, i) => {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.value = i;
        optionButton.textContent = option;
        optionButton.onclick = selectOption;
        optionsEl.appendChild(optionButton);
    });
}

function selectOption(e) {
    const selectedOption = e.target;
    const selectedIndex = selectedOption.value;
    const correct = quiz[currentQuestion].correct;
    if (selectedIndex === correct) {
        score++;
        scoreEl.children[0].textContent = 'Correct: ' + score;
    } else {
        scoreEl.children[1].textContent = 'Incorrect: ' + (currentQuestion + 1);
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        quizContainer.style.display = 'none';
        scoreEl.style.display = 'block';
    }
    updateProgress();
}

function updateProgress() {
    const totalQuestions = quiz.length;
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBarEl.style.width = progress + '%';
}

loadQuestion();