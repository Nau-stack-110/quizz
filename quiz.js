let questionamzao = 0;
let score = 0;
let questions = [];
let timer;
let timeLeft = 5;
let safidinUser = [];
let timeoutId;
let optionsavaly;

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
const initQuiz = () => {
   try{
    questions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);

   console.log(questions[0].question)
   console.log(questions[0].options.join(" - "))
   checkResponse(1)
   startTime();  
   
   } catch (e) {
      console.error(e.message);
   }
   
}


const checkResponse = (safidy) =>{
    const valinyMarina = questions[questionamzao].correct;
    
    safidinUser[questionamzao] = safidy;
    
    if (safidy === valinyMarina){
        score++;
    }
    
}

const getSafidy = () =>{
 x= prompt("entrer votre réponse ary : ");
 return x;
}


const startTime = () =>{
   try {
      timeLeft = 5;
      timer = setInterval(() =>{
         timeLeft = Math.max(timeLeft - 1, 0);
         console.log(timeLeft);
         
         if (timeLeft <= 0) {
             clearInterval(timer);
             handleTimeOut();
         }
          
      }, 1000);
   } catch (e) {
      console.error(e.message) ;
   }
}

const handleTimeOut = () => {
    const correctIndex = questions[questionamzao].correct;
    const correctOptions = questions[questionamzao].options[correctIndex]
    console.log("correctIndex :", correctIndex + ", options:" + correctOptions);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(questionsuivant, 1500);
}

const medalForScore = (score) => { 
    if (score < 3) { return "Bronze"; } 
    if (score < 7) {  return "Silver";} 
    return "Gold";
};

const gameEnd = () =>{
    console.log("Score final = " + score + "/10");
    console.log("Appreciation: " + medalForScore(score));
}

const questionsuivant = () => {
    clearInterval(timer);
    clearTimeout(timeoutId);
    
    if(questionamzao < questions.length - 1) {
            questionamzao++;
            console.log(questions[questionamzao].question)
             
           console.log(questions[questionamzao].options.join(" - "))

            startTime();
    } else {
            console.log("partie terminée!")
            gameEnd();
    }
}


initQuiz()

