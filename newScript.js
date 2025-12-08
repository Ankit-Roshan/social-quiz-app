const allQuestions = {

cars: [
  {
    question: "What does the term horsepower actually measure in a vehicle?",
    opt1: "Engine heat output",
    opt2: "Fuel burning rate",
    opt3: "Work or power produced",
    opt4: "Wheel rotation speed",
    correct: "opt3"
  },
  {
    question: "What is the main difference between a turbocharger and a supercharger?",
    opt1: "Turbo uses exhaust",
    opt2: "Supercharger uses fuel",
    opt3: "Turbo cools engine",
    opt4: "Supercharger lowers rpm",
    correct: "opt1"
  },
  {
    question: "What does RPM redline on a tachometer indicate?",
    opt1: "Optimal shift point",
    opt2: "Maximum safe rpm",
    opt3: "Engine idle speed",
    opt4: "Fuel cutoff range",
    correct: "opt2"
  },
  {
    question: "Why do sports cars often use rear-wheel drive instead of front-wheel drive?",
    opt1: "Better fuel economy",
    opt2: "Cheaper to build",
    opt3: "Improved power delivery",
    opt4: "Less tire wear",
    correct: "opt3"
  },
  {
    question: "What is the purpose of a limited-slip differential?",
    opt1: "Reduce engine noise",
    opt2: "Balance fuel mixture",
    opt3: "Improve traction balance",
    opt4: "Increase steering angle",
    correct: "opt3"
  },
  {
    question: "What does ABS prevent during hard braking?",
    opt1: "Engine overheating",
    opt2: "Brake pad wear",
    opt3: "Wheel lock-up",
    opt4: "Steering vibration",
    correct: "opt3"
  },
  {
    question: "Why do electric cars not require traditional gearboxes?",
    opt1: "Engines rotate slower",
    opt2: "Motors give constant torque",
    opt3: "Batteries last longer",
    opt4: "They use CVT only",
    correct: "opt2"
  },
  {
    question: "What is the function of a dual-clutch transmission (DCT)?",
    opt1: "Reduce engine load",
    opt2: "Shift gears automatically",
    opt3: "Enable faster gear shifts",
    opt4: "Improve fuel cooling",
    correct: "opt3"
  },
  {
    question: "What is the main difference between a 2-stroke and a 4-stroke engine?",
    opt1: "Fuel type used",
    opt2: "Number of pistons",
    opt3: "Power cycle strokes",
    opt4: "Gearbox requirement",
    correct: "opt3"
  },
  {
    question: "What happens when an engine is naturally aspirated?",
    opt1: "Uses turbo pressure",
    opt2: "Air enters by vacuum",
    opt3: "Runs on electric power",
    opt4: "Requires dual injectors",
    correct: "opt2"
  },
  {
    question: "What does displacement of an engine mean?",
    opt1: "Fuel tank volume",
    opt2: "Air-fuel chamber size",
    opt3: "Cylinder volume swept",
    opt4: "Total engine weight",
    correct: "opt3"
  },
  {
    question: "Why do some engines use multiple cylinders?",
    opt1: "Reduce vehicle cost",
    opt2: "Improve smooth power",
    opt3: "Lower fuel usage",
    opt4: "Reduce emissions only",
    correct: "opt2"
  },
  {
    question: "What is the purpose of a catalytic converter?",
    opt1: "Increase top speed",
    opt2: "Reduce toxic emissions",
    opt3: "Boost engine torque",
    opt4: "Decrease fuel pressure",
    correct: "opt2"
  },
  {
    question: "What makes a V8 engine sound deeper than an inline-4 engine?",
    opt1: "Larger turbo system",
    opt2: "More exhaust pulses",
    opt3: "Different fuel ratio",
    opt4: "Shorter exhaust pipe",
    correct: "opt2"
  },
  {
    question: "Why do performance cars use ventilated or drilled brake discs?",
    opt1: "Reduce brake weight",
    opt2: "Improve cooling airflow",
    opt3: "Increase brake size",
    opt4: "Reduce wheel friction",
    correct: "opt2"
  }
],





  gk: [
    {
      question: "What is the capital of India?",
      opt1: "Mumbai",
      opt2: "New Delhi",
      opt3: "Kolkata",
      opt4: "Chennai",
      correct: "opt2"
    },
    {
      question: "Which monument is located in Agra?",
      opt1: "Qutub Minar",
      opt2: "India Gate",
      opt3: "Taj Mahal",
      opt4: "Red Fort",
      correct: "opt3"
    },
    {
      question: "Who was the first Prime Minister of India?",
      opt1: "Mahatma Gandhi",
      opt2: "Jawaharlal Nehru",
      opt3: "Indira Gandhi",
      opt4: "Rajendra Prasad",
      correct: "opt2"
    },
    {
      question: "Which animal is the national animal of India?",
      opt1: "Elephant",
      opt2: "Peacock",
      opt3: "Tiger",
      opt4: "Lion",
      correct: "opt3"
    },
    {
      question: "Which is the largest ocean in the world?",
      opt1: "Indian Ocean",
      opt2: "Atlantic Ocean",
      opt3: "Pacific Ocean",
      opt4: "Arctic Ocean",
      correct: "opt3"
    },
    {
      question: "Which river is considered the holiest in India?",
      opt1: "Yamuna",
      opt2: "Ganga",
      opt3: "Godavari",
      opt4: "Kaveri",
      correct: "opt2"
    },
    {
      question: "Who wrote the Indian National Anthem?",
      opt1: "Bankim Chandra",
      opt2: "Sarojini Naidu",
      opt3: "Rabindranath Tagore",
      opt4: "S. Radhakrishnan",
      correct: "opt3"
    },
    {
      question: "Which game is the national sport of India?",
      opt1: "Cricket",
      opt2: "Football",
      opt3: "Hockey",
      opt4: "Kabaddi",
      correct: "opt3"
    }
  ],

  science: [
    {
      question: "What is the chemical formula for water?",
      opt1: "H2O",
      opt2: "CO2",
      opt3: "O2",
      opt4: "H2",
      correct: "opt1"
    },
    {
      question: "Which gas do humans need to breathe?",
      opt1: "Carbon Dioxide",
      opt2: "Nitrogen",
      opt3: "Oxygen",
      opt4: "Hydrogen",
      correct: "opt3"
    },
    {
      question: "What is the center of a computer system?",
      opt1: "RAM",
      opt2: "Monitor",
      opt3: "CPU",
      opt4: "Keyboard",
      correct: "opt3"
    },
    {
      question: "Which planet is known as the Red Planet?",
      opt1: "Earth",
      opt2: "Mars",
      opt3: "Venus",
      opt4: "Jupiter",
      correct: "opt2"
    },
    {
      question: "How many bones are in the adult human body?",
      opt1: "206",
      opt2: "201",
      opt3: "220",
      opt4: "300",
      correct: "opt1"
    },
    {
      question: "What is the speed of light?",
      opt1: "3,00,000 km/s",
      opt2: "3,00,000 m/s",
      opt3: "300 km/s",
      opt4: "30,000 km/s",
      correct: "opt1"
    },
    {
      question: "Plants make their food using?",
      opt1: "Digestion",
      opt2: "Photosynthesis",
      opt3: "Respiration",
      opt4: "Evaporation",
      correct: "opt2"
    },
    {
      question: "The Earth revolves around the Sun in how many days?",
      opt1: "30 days",
      opt2: "90 days",
      opt3: "180 days",
      opt4: "365 days",
      correct: "opt4"
    }
  ],

  current: [
    {
      question: "Who is the Prime Minister of India in 2024?",
      opt1: "Rahul Gandhi",
      opt2: "Narendra Modi",
      opt3: "Amit Shah",
      opt4: "Yogi Adityanath",
      correct: "opt2"
    },
    {
      question: "Where was the G20 Summit 2023 hosted?",
      opt1: "Mumbai",
      opt2: "New Delhi",
      opt3: "Bangalore",
      opt4: "Hyderabad",
      correct: "opt2"
    },
    {
      question: "Which team won IPL 2024?",
      opt1: "Mumbai Indians",
      opt2: "Chennai Super Kings",
      opt3: "Kolkata Knight Riders",
      opt4: "Royal Challengers Bangalore",
      correct: "opt3"
    },
    {
      question: "Where did Chandrayaan-3 land?",
      opt1: "Moon's North Pole",
      opt2: "Moon's South Pole",
      opt3: "Sea of Tranquility",
      opt4: "Earth Orbit",
      correct: "opt2"
    },
    {
      question: "Ukraine is currently at war with which country?",
      opt1: "China",
      opt2: "Japan",
      opt3: "Russia",
      opt4: "Germany",
      correct: "opt3"
    },
    {
      question: "Who is the President of the USA in 2024?",
      opt1: "Donald Trump",
      opt2: "Barack Obama",
      opt3: "Joe Biden",
      opt4: "Kamala Harris",
      correct: "opt3"
    },
    {
      question: "Digital India Mission started in which year?",
      opt1: "2010",
      opt2: "2014",
      opt3: "2015",
      opt4: "2019",
      correct: "opt3"
    },
    {
      question: "What is the currency of Japan?",
      opt1: "Yuan",
      opt2: "Yen",
      opt3: "Won",
      opt4: "Dollar",
      correct: "opt2"
    }
  ],

  english: [
    {
      question: "What is the plural of 'Child'?",
      opt1: "Childs",
      opt2: "Childes",
      opt3: "Children",
      opt4: "Childrens",
      correct: "opt3"
    },
    {
      question: "Which one is a verb?",
      opt1: "Happy",
      opt2: "Run",
      opt3: "Blue",
      opt4: "Soft",
      correct: "opt2"
    },
    {
      question: "Fill in the blank: He ___ to school daily.",
      opt1: "go",
      opt2: "goes",
      opt3: "went",
      opt4: "gone",
      correct: "opt2"
    },
    {
      question: "Opposite of 'Hot'?",
      opt1: "Warm",
      opt2: "Burn",
      opt3: "Cold",
      opt4: "Heat",
      correct: "opt3"
    },
    {
      question: "Synonym of 'Big'?",
      opt1: "Small",
      opt2: "Large",
      opt3: "Short",
      opt4: "Light",
      correct: "opt2"
    },
    {
      question: "Correct spelling:",
      opt1: "Enviroment",
      opt2: "Environment",
      opt3: "Environmant",
      opt4: "Enviranment",
      correct: "opt2"
    },
    {
      question: "What is a noun?",
      opt1: "Doing word",
      opt2: "Describing word",
      opt3: "Name of a person/place/thing",
      opt4: "Opposite word",
      correct: "opt3"
    },
    {
      question: "What is the past form of 'Write'?",
      opt1: "Writed",
      opt2: "Written",
      opt3: "Write",
      opt4: "Wrote",
      correct: "opt4"
    }
  ]
};



// const quizQuestions = [
//     {
//         question: "What is the name of the electric mouse Pokémon that is Ash's main partner?",
//         opt1: "Eevee",
//         opt2: "Pikachu",
//         opt3: "Squirtle",
//         opt4: "Charmander",
//         correct: "opt2",
//     },
//     {
//         question: "Which type is Bulbasaur primarily?",
//         opt1: "Fire",
//         opt2: "Water",
//         opt3: "Grass",
//         opt4: "Electric",
//         correct: "opt3",
//     },
//     {
//         question: "Which Pokémon evolves into Charmeleon?",
//         opt1: "Charmander",
//         opt2: "Charizard",
//         opt3: "Cyndaquil",
//         opt4: "Vulpix",
//         correct: "opt1",
//     },
//     {
//         question: "What item is commonly used to catch wild Pokémon?",
//         opt1: "Potion",
//         opt2: "Poké Ball",
//         opt3: "Bicycle",
//         opt4: "TM",
//         correct: "opt2",
//     },
//     {
//         question: "Which Pokémon is known as the 'Water Turtle' and can shoot water from its mouth?",
//         opt1: "Squirtle",
//         opt2: "Psyduck",
//         opt3: "Jigglypuff",
//         opt4: "Growlithe",
//         correct: "opt1",
//     },
//     {
//         question: "Which of these is a Normal-type Pokémon that can sing to put opponents to sleep?",
//         opt1: "Jigglypuff",
//         opt2: "Abra",
//         opt3: "Geodude",
//         opt4: "Onix",
//         correct: "opt1",
//     },
//     {
//         question: "What color is the default version of Pikachu?",
//         opt1: "Blue",
//         opt2: "Green",
//         opt3: "Yellow",
//         opt4: "Red",
//         correct: "opt3",
//     },
//     {
//         question: "Which Pokémon is a psychic-type that often holds its head and is known for confusion attacks?",
//         opt1: "Abra",
//         opt2: "Machop",
//         opt3: "Pidgey",
//         opt4: "Ekans",
//         correct: "opt1",
//     },
//     {
//         question: "Which starter Pokémon from the original games is fire-type?",
//         opt1: "Bulbasaur",
//         opt2: "Squirtle",
//         opt3: "Charmander",
//         opt4: "Pikachu",
//         correct: "opt3",
//     },
//     {
//         question: "Which evolution does Eevee NOT directly evolve into in Generation I?",
//         opt1: "Vaporeon",
//         opt2: "Jolteon",
//         opt3: "Flareon",
//         opt4: "Sylveon",
//         correct: "opt4",
//     },
// ];

