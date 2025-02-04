let currentQuestion = 0;
let score = 0;
let questions = [];
let timer;
let timeLeft = 5;
const timerEl = document.querySelector('.timer');
let userAnswers = [];
let timeoutId;

const allQuestions = [
    {
        question: "Quelle est la capitale de la France? 🗼",
        options: ["Londres", "Berlin", "Paris", "Madrid"], 
        correct: 2,
        category: "Géographie"
    },
    {
        question: "Combien de planètes dans notre système solaire? 🪐",
        options: ["7", "8", "9", "10"],
        correct: 1,
        category: "Science"
    },
    {
        question: "Qui a peint la Joconde? 🎨",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"],
        correct: 2,
        category: "Art"
    },
    {
        question: "Quel est l'océan le plus grand du monde? 🌊",
        options: ["Atlantique", "Indien", "Pacifique", "Arctique"],
        correct: 2,
        category: "Géographie"
    },
    {
        question: "Quel animal est le roi de la jungle? 🦁",
        options: ["Éléphant", "Tigre", "Lion", "Rhinocéros"],
        correct: 2,
        category: "Nature"
    },
    {
        question: "En quelle année a eu lieu le 1er pas sur la Lune? 🌕",
        options: ["1965", "1969", "1972", "1980"],
        correct: 1,
        category: "Histoire"
    },
    {
        question: "Quel est le symbole chimique de l'or? ⚗️",
        options: ["Ag", "Cu", "Au", "Fe"],
        correct: 2,
        category: "Science"
    },
    {
        question: "Combien de jours en février bissextile? 📅",
        options: ["28", "29", "30", "31"],
        correct: 1,
        category: "Général"
    },
    {
        question: "Iza no prof de mention Web statique 🌐", 
        options: ["Hery", "Emile", "Ratatouille", "Alain"],
        correct: 0,
        category: "Géneral"
    },
    {
        question: "Qui a écrit 'Roméo et Juliette'? 📖",
        options: ["Hugo", "Shakespeare", "Dumas", "Proust"],
        correct: 1,
        category: "Littérature"
    },
    {
        question: "Quel pays a inventé la pizza? 🍕",
        options: ["Italie", "France", "États-Unis", "Grèce"],
        correct: 0,
        category: "Culture"
    },
    {
        question: "Quelle est la monnaie du Japon? 💴",
        options: ["Won", "Yen", "Dollar", "Euro"],
        correct: 1,
        category: "Économie"
    },
    {
        question: "Quel est le plus grand désert du monde? 🏜️",
        options: ["Sahara", "Gobi", "Antarctique", "Kalahari"],
        correct: 2,
        category: "Géographie"
    },
    {
        question: "Qui est le dieu grec de la foudre? ⚡",
        options: ["Poséidon", "Hadès", "Zeus", "Apollon"],
        correct: 2,
        category: "Mythologie"
    },
    {
        question: "Combien de couleurs dans l'arc-en-ciel? 🌈",
        options: ["5", "6", "7", "8"],
        correct: 2,
        category: "Science"
    },
    {
        question: "Quel instrument a 88 touches? 🎹",
        options: ["Guitare", "Piano", "Violon", "Harpe"],
        correct: 1,
        category: "Musique"
    },
    {
        question: "Quel pays a remporté la Coupe du Monde 2018? ⚽",
        options: ["Brésil", "Allemagne", "France", "Croatie"],
        correct: 2,
        category: "Sport"
    },
    {
        question: "Quelle planète est appelée 'Étoile du Berger'? ✨",
        options: ["Mars", "Vénus", "Jupiter", "Saturne"],
        correct: 1,
        category: "Astronomie"
    },
    {
        question: "Quel fruit est surnommé 'la pomme de terre du désert'? 🌵",
        options: ["Datte", "Figue", "Melon", "Grenade"],
        correct: 0,
        category: "Nature"
    },
    {
        question: "Quel peintre a coupé son oreille? 🎭",
        options: ["Monet", "Van Gogh", "Picasso", "Rembrandt"],
        correct: 1,
        category: "Art"
    },
    {
        question: "Quelle est la vitesse de la lumière? 🌟",
        options: ["300 000 km/s", "150 000 km/s", "1 million km/s", "30 km/s"],
        correct: 0,
        category: "Science"
    }
];

function initQuiz() {
    questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
    showQuestion();
    startTimer();
}

function showQuestion() {
    const questionEl = document.querySelector('.question');
    const optionsEl = document.querySelector('.options-grid');
    const progressEl = document.querySelector('.progress');
    const timerEl = document.querySelector('.timer');

    progressEl.style.width = `${(currentQuestion / questions.length) * 100}%`;
    questionEl.classList.remove('animate-pop');
    void questionEl.offsetWidth;
    questionEl.classList.add('animate-pop');
    timerEl.classList.add('animate-pulse');

    questionEl.innerHTML = questions[currentQuestion].question;
    questionEl.classList.remove('shake');
    timerEl.textContent = `${timeLeft}s`;
    optionsEl.innerHTML = questions[currentQuestion].options
        .map((option, index) => `
            <button class="option-btn" onclick="checkAnswer(${index})">
                ${option}
            </button>
        `).join('');

    // Cacher le bouton Suivant au début de chaque question
    document.querySelector('.next-btn').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correct;
    const options = document.querySelectorAll('.option-btn');
    
    userAnswers[currentQuestion] = selectedIndex;
    
    options.forEach(option => option.disabled = true);
    
    if (selectedIndex === correctIndex) {
        options[selectedIndex].style.backgroundColor = "#2ecc71";
        options[selectedIndex].innerHTML += " ✅";
        score++;
    } else {
        options[selectedIndex].style.backgroundColor = "#e74c3c";
        options[selectedIndex].innerHTML += " ❌";
        document.querySelector('.quiz-container').classList.add('shake');
    }
    
    // Afficher le bouton Suivant après la réponse
    document.querySelector('.next-btn').style.display = 'block';
}

function startTimer() {
    timeLeft = 5;
    timer = setInterval(() => {
        timeLeft = Math.max(timeLeft - 1, 0);
        timerEl.textContent = `${timeLeft}s`;
        
        if(timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    const correctIndex = questions[currentQuestion].correct;
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => option.disabled = true);
    options[correctIndex].style.backgroundColor = "#2ecc71";
    document.querySelector('.quiz-container').classList.add('shake');
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(nextQuestion, 1500);
}

function showFinalScore() {
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.next-btn').style.display = 'none';
    timerEl.style.display = 'none';
    
    const resultEl = document.querySelector('.result-container');
    let reviewContent = '';
    
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index] !== undefined ? q.options[userAnswers[index]] : "Non répondu";
        const isCorrect = userAnswers[index] === q.correct;
        
        reviewContent += `
            <div class="question-review ${isCorrect ? 'correct' : 'incorrect'}">
                <h3>Question ${index + 1}: ${q.question} ${isCorrect ? '✅' : '❌'}</h3>
            </div>
        `;
    });

    resultEl.innerHTML = `
        <div class="final-score animate-pop">
            <h2>🎉 Quiz Terminé !</h2>
            <p class="score">Score Final: ${score}/10</p>
            <p class="message">${getScoreMessage(score)}</p>
            
            <div class="questions-review">
                <h3>Résumé des réponses:</h3>
                ${reviewContent}
            </div>
            
            <button class="retry-btn" onclick="location.reload()">↻ Recommencer</button>
        </div>
    `;
}

function getScoreMessage(score) {
    const messages = [
        { range: [0, 3], msg: "Peut mieux faire! 😅" },
        { range: [4, 6], msg: "Pas mal! 👍" },
        { range: [7, 9], msg: "Excellent! 🎯" },
        { range: [10, 10], msg: "Parfait! 💯" }
    ];
    
    return messages.find(m => score >= m.range[0] && score <= m.range[1]).msg;
}

function nextQuestion() {
    const questionContainer = document.querySelector('.question-container');
    const nextBtn = document.querySelector('.next-btn');
    
    if (nextBtn.disabled) return;
    
    clearInterval(timer);
    clearTimeout(timeoutId);
    
    nextBtn.disabled = true;
    
    document.querySelector('.quiz-container').classList.remove('shake');

    questionContainer.classList.add('exit');
    
    questionContainer.addEventListener('animationend', () => {
        questionContainer.classList.remove('exit');
        
        if(currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
            startTimer();
        } else {
            showFinalScore();
        }
        
        nextBtn.disabled = false;
    }, { once: true });
}

document.querySelector('.next-btn').addEventListener('click', nextQuestion);

initQuiz(); 