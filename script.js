let currentQuestion = 0;
let score = 0;
let questions = [];
let timer;
let timeLeft = 10;
const timerEl = document.querySelector('.timer');
let userAnswers = [];

let allQuestions = [
    {
        "question": "Quelle est la capitale de la France? 🗼",
        "options": ["Londres", "Berlin", "Paris", "Madrid"],
        "correct": 2,
        "category": "Géographie"
    },
    {
        "question": "Combien de planètes dans notre système solaire? 🪐",
        "options": ["7", "8", "9", "10"],
        "correct": 1,
        "category": "Science"
    },
    {
        "question": "Qui a peint la Joconde? 🎨",
        "options": ["Van Gogh", "Picasso", "Da Vinci", "Monet"],
        "correct": 2,
        "category": "Art"
    },
    {
        "question": "Quel est l'océan le plus grand du monde? 🌊",
        "options": ["Atlantique", "Indien", "Pacifique", "Arctique"],
        "correct": 2,
        "category": "Géographie"
    },
    {
        "question": "Quel animal est le roi de la jungle? 🦁",
        "options": ["Éléphant", "Tigre", "Lion", "Rhinocéros"],
        "correct": 2,
        "category": "Nature"
    },
    {
        "question": "En quelle année a eu lieu le 1er pas sur la Lune? 🌕",
        "options": ["1965", "1969", "1972", "1980"],
        "correct": 1,
        "category": "Histoire"
    },
    {
        "question": "Quel est le symbole chimique de l'or? ⚗️",
        "options": ["Ag", "Cu", "Au", "Fe"],
        "correct": 2,
        "category": "Science"
    },
    {
        "question": "Combien de jours en février bissextile? 📅",
        "options": ["28", "29", "30", "31"],
        "correct": 1,
        "category": "Général"
    },
    {
        "question": "Qui a écrit 'Roméo et Juliette'? 📖",
        "options": ["Hugo", "Shakespeare", "Dumas", "Proust"],
        "correct": 1,
        "category": "Littérature"
    },
    {
        "question": "Quel pays a inventé la pizza? 🍕",
        "options": ["Italie", "France", "États-Unis", "Grèce"],
        "correct": 0,
        "category": "Culture"
    },
    {
        "question": "Quelle est la monnaie du Japon? 💴",
        "options": ["Won", "Yen", "Dollar", "Euro"],
        "correct": 1,
        "category": "Économie"
    },
    {
        "question": "Quel est le plus grand désert du monde? 🏜️",
        "options": ["Sahara", "Gobi", "Antarctique", "Kalahari"],
        "correct": 2,
        "category": "Géographie"
    },
    {
        "question": "Qui est le dieu grec de la foudre? ⚡",
        "options": ["Poséidon", "Hadès", "Zeus", "Apollon"],
        "correct": 2,
        "category": "Mythologie"
    },
    {
        "question": "Combien de couleurs dans l'arc-en-ciel? 🌈",
        "options": ["5", "6", "7", "8"],
        "correct": 2,
        "category": "Science"
    },
    {
        "question": "Quel instrument a 88 touches? 🎹",
        "options": ["Guitare", "Piano", "Violon", "Harpe"],
        "correct": 1,
        "category": "Musique"
    },
    {
        "question": "Quel pays a remporté la Coupe du Monde 2018? ⚽",
        "options": ["Brésil", "Allemagne", "France", "Croatie"],
        "correct": 2,
        "category": "Sport"
    },
    {
        "question": "Quelle planète est appelée 'Étoile du Berger'? ✨",
        "options": ["Mars", "Vénus", "Jupiter", "Saturne"],
        "correct": 1,
        "category": "Astronomie"
    },
    {
        "question": "Quel fruit est surnommé 'la pomme de terre du désert'? 🌵",
        "options": ["Datte", "Figue", "Melon", "Grenade"],
        "correct": 0,
        "category": "Nature"
    },
    {
        "question": "Quel peintre a coupé son oreille? 🎭",
        "options": ["Monet", "Van Gogh", "Picasso", "Rembrandt"],
        "correct": 1,
        "category": "Art"
    },
    {
        "question": "Quelle est la vitesse de la lumière? 🌟",
        "options": ["300 000 km/s", "150 000 km/s", "1 million km/s", "30 km/s"],
        "correct": 0,
        "category": "Science"
    },
    {
        "question": "Quel roi a unifié les hauts plateaux de Madagascar au XIXe siècle ?",
        "options": [
            "Radama I",
            "Andrianampoinimerina",
            "Ranavalona I",
            "Rainilaiarivony"
        ],
        "correct": 1,
        "category": "Histoire"
    },
    {
        "question": "En quelle année Madagascar a-t-elle obtenu son indépendance ?",
        "options": [
            "1958",
            "1960",
            "1972",
            "1947"
        ],
        "correct": 1,
        "category": "Histoire"
    },
    {
        "question": "Quel événement majeur a eu lieu à Madagascar en 1947 ?",
        "options": [
            "Cyclone Gafilo",
            "Insurrection contre la colonisation",
            "Chute de la monarchie",
            "Création de l'université d'Antananarivo"
        ],
        "correct": 1,
        "category": "Histoire"
    },
    {
        "question": "Qui était le premier président de la République de Madagascar ?",
        "options": [
            "Didier Ratsiraka",
            "Albert Zafy",
            "Philibert Tsiranana",
            "Marc Ravalomanana"
        ],
        "correct": 2,
        "category": "Histoire"
    },
    {
        "question": "Quel Premier ministre a marqué la fin du XIXe siècle à Madagascar ?",
        "options": [
            "Rainilaiarivony",
            "Rainandriamampandry",
            "Rabefiraisana",
            "Ravelomanana"
        ],
        "correct": 0,
        "category": "Histoire"
    },
    {
        "question": "Quel est le point culminant de Madagascar ?",
        "options": [
            "Maromokotro",
            "Tsaratanana",
            "Ankaratra",
            "Ambre"
        ],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quelle est la capitale de Madagascar ?",
        "options": [
            "Toamasina",
            "Antananarivo",
            "Fianarantsoa",
            "Mahajanga"
        ],
        "correct": 1,
        "category": "Géographie"
    },
    {
        "question": "Quel grand fleuve traverse l’ouest de Madagascar ?",
        "options": [
            "Mangoky",
            "Ikopa",
            "Betsiboka",
            "Mananjary"
        ],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quelle ville est connue pour ses baobabs ?",
        "options": [
            "Morondava",
            "Antsiranana",
            "Tuléar",
            "Ambanja"
        ],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quelle région se trouve au nord de Madagascar ?",
        "options": [
            "Boeny",
            "Sava",
            "Anosy",
            "Haute Matsiatra"
        ],
        "correct": 1,
        "category": "Géographie"
    },
    {
        "question": "Quel lémurien emblématique est endémique de Madagascar ?",
        "options": [
            "Indri",
            "Capucin",
            "Tarsier",
            "Ouistiti"
        ],
        "correct": 0,
        "category": "Science"
    },
    {
        "question": "Quel parc national est célèbre pour sa biodiversité à Madagascar ?",
        "options": [
            "Isalo",
            "Kilimandjaro",
            "Kruger",
            "Serengeti"
        ],
        "correct": 0,
        "category": "Science"
    },
    {
        "question": "Quelle plante médicinale est utilisée pour soigner le paludisme à Madagascar ?",
        "options": [
            "Ravintsara",
            "Artemisia",
            "Vanille",
            "Cannelle"
        ],
        "correct": 1,
        "category": "Science"
    },
    {
        "question": "Quel est le principal volcan actif de Madagascar ?",
        "options": [
            "Ankaratra",
            "Tsaratanana",
            "Ambre",
            "Aucun volcan actif"
        ],
        "correct": 3,
        "category": "Science"
    },
    {
        "question": "Quelle est la langue scientifique principale d'enseignement à l'université de Madagascar ?",
        "options": [
            "Français",
            "Malagasy",
            "Anglais",
            "Latin"
        ],
        "correct": 0,
        "category": "Science"
    },
    {
        "question": "Quel poète malgache est célèbre pour son œuvre 'Ny Avana Ramanantoanina' ?",
        "options": [
            "Dox",
            "Ny Avana Ramanantoanina",
            "Jean-Joseph Rabearivelo",
            "Jacques Rabemananjara"
        ],
        "correct": 1,
        "category": "Littérature"
    },
    {
        "question": "Qui est considéré comme le premier poète moderne malgache ?",
        "options": [
            "Jean-Joseph Rabearivelo",
            "Dox",
            "Rado",
            "Ny Avana"
        ],
        "correct": 0,
        "category": "Littérature"
    },
    {
        "question": "Quel écrivain malgache a été aussi un homme politique célèbre ?",
        "options": [
            "Rado",
            "Dox",
            "Jacques Rabemananjara",
            "Rabearivelo"
        ],
        "correct": 2,
        "category": "Littérature"
    },
    {
        "question": "Quel genre littéraire a marqué les débuts de la littérature malgache moderne ?",
        "options": [
            "Poésie",
            "Roman",
            "Théâtre",
            "Essai"
        ],
        "correct": 0,
        "category": "Littérature"
    },
    {
        "question": "Quelle est la langue principale utilisée dans la littérature traditionnelle malgache ?",
        "options": [
            "Français",
            "Anglais",
            "Malagasy",
            "Arabe"
        ],
        "correct": 2,
        "category": "Littérature"
    },
    {
        "question": "Quel langage est le plus utilisé pour le développement web à Madagascar ?",
        "options": [
            "Java",
            "PHP",
            "Python",
            "Ruby"
        ],
        "correct": 1,
        "category": "Développement Web"
    },
    {
        "question": "Quel framework est populaire pour développer des applications web à Madagascar ?",
        "options": [
            "Laravel",
            "Django",
            "Spring",
            "Rails"
        ],
        "correct": 0,
        "category": "Développement Web"
    },
    {
        "question": "Quelle technologie est souvent utilisée pour créer des apps mobiles hybrides à Madagascar ?",
        "options": [
            "React Native",
            "Flutter",
            "Xamarin",
            "Swift"
        ],
        "correct": 0,
        "category": "Développement Mobile"
    },
    {
        "question": "Quel langage est utilisé avec React Native ?",
        "options": [
            "Java",
            "Python",
            "JavaScript",
            "C#"
        ],
        "correct": 2,
        "category": "Développement Mobile"
    },
    {
        "question": "Quelle plateforme de freelancing est populaire chez les développeurs malgaches ?",
        "options": [
            "Upwork",
            "Fiverr",
            "Malt",
            "Freelancer.com"
        ],
        "correct": 0,
        "category": "Développement Web"
    },
    {
        "question": "Quelle ville malgache abrite plusieurs écoles de codage ?",
        "options": [
            "Toamasina",
            "Fianarantsoa",
            "Antananarivo",
            "Mahajanga"
        ],
        "correct": 2,
        "category": "Développement Web"
    },
    {
        "question": "Quel outil est souvent utilisé pour le versionnage de code à Madagascar ?",
        "options": [
            "Subversion",
            "Git",
            "Mercurial",
            "CVS"
        ],
        "correct": 1,
        "category": "Développement Web"
    },
    {
        "question": "Quel langage est utilisé pour le backend dans de nombreuses startups malgaches ?",
        "options": [
            "Node.js",
            "PHP",
            "Go",
            "Ruby"
        ],
        "correct": 1,
        "category": "Développement Web"
    },
    {
        "question": "Quel langage est enseigné dans la plupart des écoles d’informatique à Madagascar ?",
        "options": [
            "Java",
            "C",
            "Python",
            "PHP"
        ],
        "correct": 3,
        "category": "Développement Web"
    },
    {
        "question": "Quel éditeur de code est populaire chez les développeurs à Madagascar ?",
        "options": [
            "Eclipse",
            "VS Code",
            "NetBeans",
            "Atom"
        ],
        "correct": 1,
        "category": "Développement Web"
    },
    {
        "question": "Quel sport est le plus pratiqué à Madagascar ?",
        "options": [
            "Basketball",
            "Football",
            "Athlétisme",
            "Judo"
        ],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel club malgache a remporté la Coupe COSAFA en 2023 ?",
        "options": [
            "Fosa Juniors",
            "AS Adema",
            "Barea",
            "CNaPS Sport"
        ],
        "correct": 2,
        "category": "Sport"
    },
    {
        "question": "Quel stade est le plus grand à Madagascar ?",
        "options": [
            "Stade de Mahamasina",
            "Stade de Barikadimy",
            "Stade de Toamasina",
            "Stade de Fianarantsoa"
        ],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Comment s'appelle l'équipe nationale de football malgache ?",
        "options": [
            "Zébus",
            "Barea",
            "Aigles",
            "Makis"
        ],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel sport traditionnel se pratique dans le sud de Madagascar ?",
        "options": [
            "Moraingy",
            "Savate",
            "Sumo",
            "Wrestling"
        ],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel joueur malgache est connu pour avoir joué en France ?",
        "options": [
            "Carolus Andriamatsinoro",
            "Didier Drogba",
            "Samuel Eto’o",
            "Ahmed Abderrazak"
        ],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Dans quel sport les Makis représentent Madagascar ?",
        "options": [
            "Basketball",
            "Rugby",
            "Football",
            "Handball"
        ],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel sport est enseigné dans la plupart des lycées de Madagascar ?",
        "options": [
            "Judo",
            "Tennis",
            "Football",
            "Natation"
        ],
        "correct": 2,
        "category": "Sport"
    },
    {
        "question": "Quel événement sportif se tient souvent au stade de Mahamasina ?",
        "options": [
            "Coupe Davis",
            "Marathon",
            "Matchs de football",
            "Tour de Madagascar"
        ],
        "correct": 2,
        "category": "Sport"
    },
    {
        "question": "Quel est le surnom des supporters de l’équipe nationale de Madagascar ?",
        "options": [
            "Zébus",
            "Barea Fan",
            "Les Makis",
            "Vazimba Ultra"
        ],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel sport est célèbre pour le 'Tour de Madagascar' ? 🚴",
        "options": ["Cyclisme", "Athlétisme", "Natation", "Rallye"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel athlète malgache a remporté une médaille aux Jeux des Îles de l’Océan Indien 2019 ? 🏅",
        "options": ["Jean-Louis Razafindrabé", "Faneva Andriatsima", "Claudio Ramiadamanana", "Toavina Rambeloson"],
        "correct": 3,
        "category": "Sport"
    },
    {
        "question": "Quel sport aquatique est populaire à Nosy Be ? 🏊",
        "options": ["Plongée sous-marine", "Water-polo", "Natation synchronisée", "Ski nautique"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel club de football malgache est basé à Toamasina ? ⚽",
        "options": ["AS Adema", "Fosa Juniors", "Ajesaia", "CNaPS Sport"],
        "correct": 2,
        "category": "Sport"
    },
    {
        "question": "Quel art martial traditionnel malgache est pratiqué dans les Hautes Terres ? 🥋",
        "options": ["Moraingy", "Karate", "Taekwondo", "Kung-fu"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel sport de combat est enseigné à Antananarivo ? 🥊",
        "options": ["Boxe anglaise", "Judo", "Savate", "Aïkido"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel joueur de rugby malgache a joué dans un club français ? 🏉",
        "options": ["Rivo Rakotovao", "José Rakotoarisoa", "Ando Rakotondrazaka", "Tiana Razafindratsita"],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel sport de raquette gagne en popularité à Madagascar ? 🎾",
        "options": ["Tennis", "Badminton", "Squash", "Ping-pong"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel événement sportif annuel attire des coureurs à Antananarivo ? 🏃",
        "options": ["Marathon de Tana", "Tour de l’Île", "Course des Baobabs", "Trail de Tsingy"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel sport d’équipe est soutenu par la Fédération Malgache de Basketball ? 🏀",
        "options": ["Handball", "Volleyball", "Basketball", "Rugby"],
        "correct": 2,
        "category": "Sport"
    },
    {
        "question": "Quel traité a marqué la fin de la guerre franco-malgache de 1885 ? 📜",
        "options": ["Traité de Tamatave", "Traité de Versailles", "Traité de Paris", "Traité de Trianon"],
        "correct": 0,
        "category": "Histoire"
    },
    {
        "question": "Quel roi malgache a ouvert Madagascar au commerce européen ? 🤝",
        "options": ["Radama I", "Andrianampoinimerina", "Ranavalona II", "Rasoherina"],
        "correct": 0,
        "category": "Histoire"
    },
    {
        "question": "Quel événement a conduit à l’exil de la reine Ranavalona III ? 👑",
        "options": ["Colonisation française", "Révolte de 1947", "Indépendance", "Guerre civile"],
        "correct": 0,
        "category": "Histoire"
    },
    {
        "question": "En quelle année la monarchie malgache a-t-elle été abolie ? 🏰",
        "options": ["1897", "1885", "1905", "1870"],
        "correct": 0,
        "category": "Histoire"
    },
    {
        "question": "Quel leader a dirigé la révolte Menalamba contre les Français ? ⚔️",
        "options": ["Rainitsilavo", "Rabezavana", "Ratsimamanga", "Rasoalatiana"],
        "correct": 2,
        "category": "Histoire"
    },
    {
        "question": "Quel président malgache a été surnommé 'l’Amiral Rouge' ? 🚢",
        "options": ["Didier Ratsiraka", "Philibert Tsiranana", "Marc Ravalomanana", "Albert Zafy"],
        "correct": 0,
        "category": "Histoire"
    },
    {
        "question": "Quel mouvement a marqué la crise politique de 2009 à Madagascar ? 🗳️",
        "options": ["Transition démocratique", "Haut Conseil de Transition", "Révolution Orange", "Mouvement des Citoyens"],
        "correct": 1,
        "category": "Histoire"
    },
    {
        "question": "Quel roi a introduit l’écriture sorabe à Madagascar ? ✍️",
        "options": ["Andrianampoinimerina", "Radama I", "Ranavalona I", "Andriantsitohaina"],
        "correct": 1,
        "category": "Histoire"
    },
    {
        "question": "Quel conflit a opposé les Merina et les Sakalava au XVIIIe siècle ? ⚔️",
        "options": ["Guerre des Boina", "Guerre des Tsingy", "Guerre de l’Ouest", "Guerre des Hautes Terres"],
        "correct": 0,
        "category": "Histoire"
    },
    {
        "question": "Quelle année marque la création de l’Université d’Antananarivo ? ?",
        "options": ["1955", "1961", "1970", "1948"],
        "correct": 1,
        "category": "Histoire"
    },
    {
        "question": "Quel framework JavaScript est souvent utilisé pour les interfaces utilisateur à Madagascar ? 🌐",
        "options": ["React", "Vue.js", "Angular", "Svelte"],
        "correct": 0,
        "category": "Développement Web"
    },
    {
        "question": "Quel système de gestion de contenu est populaire pour les sites malgaches ? 📝",
        "options": ["WordPress", "Joomla", "Drupal", "Wix"],
        "correct": 0,
        "category": "Développement Web"
    },
    {
        "question": "Quel outil est utilisé pour automatiser les tests d’applications web à Madagascar ? 🧪",
        "options": ["Selenium", "Postman", "Cypress", "Jest"],
        "correct": 0,
        "category": "Développement Web"
    },
    {
        "question": "Quel langage est utilisé pour styliser les pages web à Madagascar ? 🎨",
        "options": ["HTML", "CSS", "JavaScript", "PHP"],
        "correct": 1,
        "category": "Développement Web"
    },
    {
        "question": "Quel framework mobile est basé sur Dart et populaire à Madagascar ? 📱",
        "options": ["React Native", "Flutter", "Ionic", "PhoneGap"],
        "correct": 1,
        "category": "Développement Mobile"
    },
    {
        "question": "Quel serveur web est souvent configuré pour les applications PHP à Madagascar ? 🖥️",
        "options": ["Apache", "Nginx", "IIS", "Tomcat"],
        "correct": 0,
        "category": "Développement Web"
    },
    {
        "question": "Quel IDE est couramment utilisé pour le développement mobile à Madagascar ? 💻",
        "options": ["Android Studio", "Xcode", "Eclipse", "NetBeans"],
        "correct": 0,
        "category": "Développement Mobile"
    },
    {
        "question": "Quel protocole est utilisé pour les API REST à Madagascar ? 🌐",
        "options": ["SOAP", "HTTP", "FTP", "SMTP"],
        "correct": 1,
        "category": "Développement Web"
    },
    {
        "question": "Quel outil de gestion de dépendances est populaire pour Node.js à Madagascar ? 📦",
        "options": ["npm", "Yarn", "Composer", "Pip"],
        "correct": 0,
        "category": "Développement Web"
    },
    {
        "question": "Quelle base de données est souvent utilisée pour les applications web malgaches ? 🗄️",
        "options": ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
        "correct": 0,
        "category": "Développement Web"
    },
    {
        "question": "Quel est le plus grand lac de Madagascar ? 🏞️",
        "options": ["Lac Alaotra", "Lac Kinkony", "Lac Ihotry", "Lac Tsimanampetsotsa"],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quelle île malgache est célèbre pour ses plages ? 🏝️",
        "options": ["Nosy Be", "Sainte Marie", "Anjouan", "Mayotte"],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quel massif montagneux traverse le centre de Madagascar ? ⛰️",
        "options": ["Tsaratanana", "Ankaratra", "Andringitra", "Ambohitra"],
        "correct": 2,
        "category": "Géographie"
    },
    {
        "question": "Quelle ville est le principal port de Madagascar ? 🚢",
        "options": ["Toamasina", "Mahajanga", "Antsiranana", "Tuléar"],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quel canal sépare Madagascar du continent africain ? 🌊",
        "options": ["Canal de Suez", "Canal de Mozambique", "Canal de Panama", "Canal de Malacca"],
        "correct": 1,
        "category": "Géographie"
    },
    {
        "question": "Quelle région malgache est connue pour ses tsingy ? 🪨",
        "options": ["Melaky", "Atsimo-Andrefana", "Vakinankaratra", "Ihorombe"],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quel est le climat dominant à Madagascar ? ☀️",
        "options": ["Tropical", "Désertique", "Tempéré", "Polaire"],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quelle ville malgache est située à l’extrême nord ? 🗺️",
        "options": ["Antsiranana", "Sambava", "Ambilobe", "Vohemar"],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quel parc national malgache protège les lémuriens ? 🦒",
        "options": ["Andasibe-Mantadia", "Masoala", "Ranomafana", "Tsingy de Bemaraha"],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quelle est la plus grande ville du sud de Madagascar ? 🏙️",
        "options": ["Tuléar", "Fort-Dauphin", "Morondava", "Amboasary"],
        "correct": 0,
        "category": "Géographie"
    },
    {
        "question": "Quel plat traditionnel malgache est à base de riz ? 🍚",
        "options": ["Romazava", "Vary amin’anana", "Ravitoto", "Koba"],
        "correct": 1,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel instrument traditionnel malgache est en bambou ? 🎶",
        "options": ["Valiha", "Kabosy", "Marovany", "Mandoliny"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel festival célèbre la musique malgache à Antananarivo ? 🎤",
        "options": ["Donia", "Madajazzcar", "Hira Gasy", "Fianar Reggae"],
        "correct": 1,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel est le nom du tissu traditionnel malgache ? 👗",
        "options": ["Lamba", "Kitenge", "Kanga", "Shuka"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel est le nom des esprits ancestraux dans la culture malgache ? 👻",
        "options": ["Zanahary", "Razana", "Vazimba", "Fady"],
        "correct": 1,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel rituel malgache implique le retournement des ossements ? ⚰️",
        "options": ["Famadihana", "Tsikafara", "Sambatra", "Fitampoha"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel produit d’exportation est emblématique de Madagascar ? 🌿",
        "options": ["Vanille", "Cacao", "Café", "Poivre"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel style musical traditionnel malgache utilise des chants polyphoniques ? 🎵",
        "options": ["Hira Gasy", "Salegy", "Tsapiky", "Kawitry"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel animal est un symbole de la culture malgache ? 🦒",
        "options": ["Lémurien", "Zébu", "Fossa", "Caméléon"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel événement culturel célèbre la circoncision à Madagascar ? 🎉",
        "options": ["Sambatra", "Famadihana", "Fitampoha", "Tsikafara"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel sport traditionnel malgache met en scène des zébus ? 🐂",
        "options": ["Savika", "Moraingy", "Fanorona", "Sokatra"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel marché célèbre est situé à Antananarivo ? 🛍️",
        "options": ["Zoma", "Digue", "Analakely", "Isotry"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel type de maison traditionnelle est typique des Hautes Terres ? 🏠",
        "options": ["Trano gasy", "Falafa", "Zafimaniry", "Betsileo"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel arbre est un symbole de Madagascar ? 🌳",
        "options": ["Baobab", "Ravinala", "Tamarin", "Eucalyptus"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel dessert traditionnel malgache est à base de manioc ? 🍰",
        "options": ["Koba", "Mofo gasy", "Ravitoto", "Romazava"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel groupe ethnique est majoritaire à Madagascar ? 👥",
        "options": ["Merina", "Betsileo", "Sakalava", "Betsimisaraka"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel artisanat malgache utilise le bois sculpté ? 🪚",
        "options": ["Zafimaniry", "Antemoro", "Sakalava", "Betsileo"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel type de danse est associé au Tsapiky ? 💃",
        "options": ["Danse du sud", "Danse des Hautes Terres", "Danse côtière", "Danse sacrée"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel est le nom du jeu de stratégie traditionnel malgache ? 🎲",
        "options": ["Fanorona", "Sokatra", "Moraingy", "Savika"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Quel événement religieux est célébré dans tout Madagascar ? ✝️",
        "options": ["Pâques", "Tromba", "Sambatra", "Famadihana"],
        "correct": 0,
        "category": "Culture générale à Madagascar"
    },
    {
        "question": "Dans quel sport à Madagascar, on crie ‘Mate!’ au lieu de ‘But!’ ? 😜",
        "options": ["Football", "Échecs", "Basketball", "Pétanque"],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel club de football malgache est si rapide qu’on dirait des lémuriens ? ⚽",
        "options": ["Fosa Juniors", "CNaPS Sport", "AS Adema", "Zébus Volants"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel basketteur malgache a tenté un dunk mais a fini dans les filets ? 🏀",
        "options": ["Rick-Ley", "Mathias M’Madi", "L’Air Jordan de Tana", "Elly Randriamampionona"],
        "correct": 3,
        "category": "Sport"
    },
    {
        "question": "Combien de pièces a un jeu d’échecs standard, même à Madagascar ? 🤓",
        "options": ["16", "32", "64", "12"],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel footballeur malgache est connu pour danser le salegy après un but ? 💃",
        "options": ["Carolus Andriamatsinoro", "Faneva Imà", "Zébu Ronaldo", "Anicet Abel"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel stade malgache a vu un panier marqué… par un ballon de foot ? 😅",
        "options": ["Stade de Mahamasina", "Stade de Barikadimy", "Stade de Toamasina", "Terrain de Tana"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel mouvement d’échecs est interdit, même si tu offres un zébu ? 🐂",
        "options": ["Roque", "En passant", "Déplacer deux pions", "Checkmate inversé"],
        "correct": 2,
        "category": "Sport"
    },
    {
        "question": "Quel club de basketball malgache est surnommé ‘les Makis Volants’ ? 🦒",
        "options": ["ASCUT", "GNBC", "Les Dunkers de Tana", "SEBAM"],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel footballeur malgache a failli marquer un but… avec un ballon de basket ? 😂",
        "options": ["Njiva Rakotoharimalala", "Baggio Rakotoarisoa", "Lalaïna Nomenjanahary", "Capitaine Kicker"],
        "correct": 2,
        "category": "Sport"
    },
    {
        "question": "Quel tournoi d’échecs à Madagascar attire même les lémuriens ? 🦒",
        "options": ["Open de Tana", "Tournoi des Baobabs", "Échecs sous les Tsingy", "Checkmate Mahamasina"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel est le surnom de l’équipe nationale de basketball malgache ? 🏀",
        "options": ["Les Barea", "Les Makis", "Les Zébus Dunkers", "Les Ankoay"],
        "correct": 3,
        "category": "Sport"
    },
    {
        "question": "Quel footballeur malgache a célébré un but avec un ‘kabosy’ imaginaire ? 🎶",
        "options": ["Rayhan Ahmad", "Faneva Imà", "Zébu Musicien", "Arohasina Razafiarison"],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel joueur d’échecs malgache a battu un ordinateur… débranché ? 😝",
        "options": ["Alain Rakotondramanana", "Faniry Rajaobelina", "Le Maître de l’UPS", "Miora Andriamiarisoa"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel club de football malgache a marqué 149 buts en un match ? ⚽",
        "options": ["AS Adema", "Fosa Juniors", "CNaPS Sport", "Les Super Zébus"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel basketteur malgache est surnommé ‘le Tsingy du panier’ ? 🪨",
        "options": ["Kiady Mijoro", "Rick-Ley", "Jao Nirina", "Le Géant de Toliara"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel sport à Madagascar te permet de dire ‘Échec et mat’ en malgache ? ♟️",
        "options": ["Football", "Échecs", "Basketball", "Moraingy"],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel footballeur malgache a tenté un penalty… avec un ballon de rugby ? 🏉",
        "options": ["Ibrahim Amada", "Ando Rakotondrazaka", "Zébu Rugbyman", "Faneva Imà"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel tournoi de basketball est organisé à Antananarivo ? 🏀",
        "options": ["Coupe des Baobabs", "Ligue de Tana", "Madagascar Slam", "Ankoay Cup"],
        "correct": 1,
        "category": "Sport"
    },
    {
        "question": "Quel joueur d’échecs malgache a un pion nommé ‘Zébu Fou’ ? 😜",
        "options": ["Rakotomaharo", "Fy Antenaina", "Le Pion Rigolo", "Ranaivo"],
        "correct": 0,
        "category": "Sport"
    },
    {
        "question": "Quel chanteur malgache a secoué Nosy Be avec son salegy ? 💃",
        "options": ["Eusèbe Jaojoby", "Rossy", "Le Roi du Salegy", "Dama"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel acteur malgache a joué dans un film… avec un lémurien star ? 🎬",
        "options": ["Tence Mena", "Bodo", "Zébu Acteur", "Hanitr’Ony"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel poète malgache écrivait des vers plus doux qu’un koba ? 🍰",
        "options": ["Jean-Joseph Rabearivelo", "Dox", "Ny Avana", "Le Poète Zébu"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel groupe malgache fait danser tout Tana avec du tsapiky ? 🕺",
        "options": ["Tia Tsapiky", "Mahaleo", "Terakaly", "Les Zébus Danseurs"],
        "correct": 2,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel chanteur malgache a un micro plus grand qu’un baobab ? 🌳",
        "options": ["Dama", "Rossy", "Le Baobab Sonore", "Tahir"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel artiste malgache a composé une chanson pour les makis ? 🦒",
        "options": ["Shyn", "Lola", "Le Chanteur des Makis", "Stephanie"],
        "correct": 1,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel comédien malgache fait rire même les zébus ? 😂",
        "options": ["Tence Mena", "Prince", "Zébu Comique", "Hanitr’Ony"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel musicien malgache joue du valiha comme un lémurien virtuose ? 🎶",
        "options": ["Rajery", "Dama", "Le Valiha Fou", "Rossy"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel chanteur malgache a tenté de chanter… sous l’eau à Nosy Be ? 🐠",
        "options": ["Eusèbe Jaojoby", "Tahir", "Le Plongeur Mélodique", "Shyn"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel groupe malgache est plus vieux que les baobabs de Morondava ? 🌳",
        "options": ["Mahaleo", "Terakaly", "Les Zébus Chanteurs", "Tia Tsapiky"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel poète malgache a écrit un poème sur un zébu amoureux ? 💕",
        "options": ["Dox", "Ny Avana", "Le Poète Romantique", "Jacques Rabemananjara"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel chanteur malgache a un clip tourné sur un tsingy ? 🪨",
        "options": ["Shyn", "Lola", "Le Grimpeur Chanteur", "Stephanie"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel acteur malgache a failli être mangé par un fossa dans un film ? 😱",
        "options": ["Bodo", "Tence Mena", "Zébu Acteur", "Hanitr’Ony"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel musicien malgache joue du kabosy comme un pirate de Sainte Marie ? 🏴‍☠️",
        "options": ["Rossy", "Dama", "Le Pirate Mélodique", "Rajery"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel chanteur malgache a dansé le hira gasy avec un lémurien ? 🦒",
        "options": ["Tahir", "Eusèbe Jaojoby", "Le Danseur des Makis", "Dama"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel artiste malgache a composé une chanson sur le ravitoto ? 🍲",
        "options": ["Stephanie", "Lola", "Le Chef Chanteur", "Shyn"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel comédien malgache a fait un sketch sur un zébu têtu ? 🐂",
        "options": ["Prince", "Tence Mena", "Zébu Rigolo", "Hanitr’Ony"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel groupe malgache a un nom qui veut dire ‘amour’ en malgache ? 💖",
        "options": ["Tia", "Terakaly", "Mahaleo", "Les Zébus Amoureux"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel chanteur malgache a tenté un duo avec un caméléon ? 🦎",
        "options": ["Lola", "Shyn", "Le Caméléon Mélodique", "Stephanie"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    },
    {
        "question": "Quel artiste malgache est surnommé ‘le Baobab de la scène’ ? 🌳",
        "options": ["Dama", "Rossy", "Le Géant Chanteur", "Eusèbe Jaojoby"],
        "correct": 0,
        "category": "Artiste à Madagascar"
    }
];

// Valider le format des questions
function validateQuestions(questions) {
    return questions.every(q => 
        typeof q.question === 'string' &&
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        typeof q.correct === 'number' &&
        q.correct >= 0 && q.correct <= 3 &&
        typeof q.category === 'string'
    );
}

// Initialiser le quiz
function initQuiz() {
    score = 0;
    if (!validateQuestions(allQuestions)) {
        console.error('Format des questions invalide !');
        // Fallback vers une question par défaut
        allQuestions = [
            {
                question: "Quelle est la capitale de la France? 🗼",
                options: ["Londres", "Berlin", "Paris", "Madrid"],
                correct: 2,
                category: "Géographie"
            }
        ];
    }
    questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
    showQuestion();
    startTimer();
}

function restartQuiz() {
    // Réinitialiser les variables du quiz
    currentQuestion = 0;
    score = 0;
    questions = [];
    userAnswers = [];
    timeLeft = 10;
    clearInterval(timer);
    timerEl.textContent = '5s';
    timerEl.style.display = 'block';
    document.querySelector('.result-container').innerHTML = '';
    document.querySelector('.question-container').style.display = 'block';
    document.querySelector('.progress').style.width = '0%';

    // Réafficher le dialogue
    const welcomeDialog = document.getElementById('welcome-dialog');
    welcomeDialog.showModal();
}


function showQuestion() {
    const questionEl = document.querySelector('.question');
    const optionsEl = document.querySelector('.options-grid');
    const progressEl = document.querySelector('.progress');

    progressEl.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    questionEl.classList.remove('animate-fade', 'shake');
    optionsEl.innerHTML = '';
    void questionEl.offsetWidth; 
    questionEl.classList.add('animate-fade');
    timerEl.classList.add('animate-pulse');

    // Récupérer la question actuelle
    const currentQ = questions[currentQuestion];

    const optionsWithIndices = currentQ.options.map((option, index) => ({
        option,
        originalIndex: index
    }));

    // Mélanger les options (algorithme de Fisher-Yates)
    for (let i = optionsWithIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithIndices[i], optionsWithIndices[j]] = [optionsWithIndices[j], optionsWithIndices[i]];
    }

    // Trouver le nouvel index de la réponse correcte
    const correctIndex = optionsWithIndices.findIndex(item => item.originalIndex === currentQ.correct);

    // Stocker l'index correct temporairement pour checkAnswer
    currentQ.tempCorrectIndex = correctIndex;

    // Afficher la question et les options mélangées
    questionEl.innerHTML = currentQ.question;
    timerEl.textContent = `${timeLeft}s`;
    optionsEl.innerHTML = optionsWithIndices
        .map((item, index) => `
            <button class="option-btn" onclick="checkAnswer(${index})" role="radio" aria-checked="false">
                ${item.option}
            </button>
        `).join('');
}

function checkAnswer(selectedIndex) {
    const currentQ = questions[currentQuestion];
    const correctIndex = currentQ.tempCorrectIndex;
    const options = document.querySelectorAll('.option-btn');

    // Stocker la réponse de l'utilisateur
    userAnswers[currentQuestion] = selectedIndex;

    options.forEach((option, index) => {
        option.disabled = true;
        option.setAttribute('aria-checked', index === selectedIndex ? 'true' : 'false');
    });

    // Vérifier si la réponse est correcte
    if (selectedIndex === correctIndex) {
        options[selectedIndex].style.backgroundColor = '#2f9e44';
        options[selectedIndex].innerHTML += ' ✅';
        score++; // Incrémenter le score
        console.log(`Question ${currentQuestion + 1}: Correct! Score = ${score}`); 
    } else {
        options[selectedIndex].style.backgroundColor = '#f87171';
        options[selectedIndex].innerHTML += ' ❌';
        options[correctIndex].style.backgroundColor = '#2f9e44';
        document.querySelector('.quiz-container').classList.add('shake');
        console.log(`Question ${currentQuestion + 1}: Incorrect. Score = ${score}`); 
    }

    clearInterval(timer);
    timerEl.classList.remove('animate-pulse');
    setTimeout(nextQuestion, 2000); // Passer à la question suivante
}

function startTimer() {
    clearInterval(timer); 
    timeLeft = 10;
    timerEl.textContent = `${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft = Math.max(timeLeft - 1, 0);
        timerEl.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    const correctIndex = questions[currentQuestion].correct;
    const options = document.querySelectorAll('.option-btn');

    userAnswers[currentQuestion] = null; 
    options.forEach(option => option.disabled = true);
    options[correctIndex].style.backgroundColor = '#2f9e44';
    document.querySelector('.quiz-container').classList.add('shake');

    timerEl.classList.remove('animate-pulse');
    setTimeout(nextQuestion, 2000); 
}

function showFinalScore() {
    document.querySelector('.question-container').style.display = 'none';
    timerEl.style.display = 'none';

    const resultEl = document.querySelector('.result-container');
    let reviewContent = '';

    questions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.tempCorrectIndex;
        reviewContent += `
            <div class="question-review ${isCorrect ? 'correct' : 'incorrect'}">
                <span>${q.question}</span>
                <span>${isCorrect ? '✅' : '❌'}</span>
            </div>
        `;
    });

    console.log(`Final Score: ${score}/10`);

    resultEl.innerHTML = `
        <div class="final-score animate-fade">
            <h2>🎉 Quiz Terminé !</h2>
            <p class="score">Score Final: ${score}/10</p>
            <div class="questions-review">
                ${reviewContent}
            </div>
            <button class="retry-btn" onclick="restartQuiz()" aria-label="Recommencer le quiz">↻ Recommencer</button>
        </div>
    `;
}

function nextQuestion() {
    const questionContainer = document.querySelector('.question-container');

    clearInterval(timer);
    timerEl.classList.remove('animate-pulse');
    document.querySelector('.quiz-container').classList.remove('shake');

    questionContainer.classList.add('exit');
    questionContainer.addEventListener(
        'animationend',
        () => {
            questionContainer.classList.remove('exit');
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
                startTimer();
            } else {
                showFinalScore();
            }
        },
        { once: true }
    );
}

const welcomeDialog = document.getElementById('welcome-dialog');
const startQuizBtn = document.getElementById('start-quiz-btn');

welcomeDialog.showModal();

startQuizBtn.addEventListener('click', () => {
    welcomeDialog.close();
    initQuiz();
});
