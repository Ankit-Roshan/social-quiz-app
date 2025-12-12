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
  },
   {
    question: "Which company produces the Mustang?",
    opt1: "Chevrolet",
    opt2: "Ford",
    opt3: "Dodge",
    opt4: "Toyota",
    correct: "opt2"
  },
  {
    question: "What does ABS stand for in cars?",
    opt1: "Auto Brake System",
    opt2: "Anti Bounce System",
    opt3: "Anti-lock Braking System",
    opt4: "Auto Balance Setup",
    correct: "opt3"
  },
  {
    question: "The luxury brand Lexus belongs to which company?",
    opt1: "Honda",
    opt2: "Nissan",
    opt3: "Toyota",
    opt4: "Hyundai",
    correct: "opt3"
  },
  {
    question: "Which country is home to BMW?",
    opt1: "USA",
    opt2: "Germany",
    opt3: "Japan",
    opt4: "France",
    correct: "opt2"
  },
  {
    question: "What type of car is Lamborghini known for?",
    opt1: "Sports cars",
    opt2: "Family cars",
    opt3: "Electric cars",
    opt4: "Trucks",
    correct: "opt1"
  },
  {
    question: "Which fuel is used in most Formula 1 cars?",
    opt1: "Diesel",
    opt2: "Petrol",
    opt3: "Kerosene",
    opt4: "Ethanol",
    correct: "opt2"
  },
  {
    question: "Which car company makes the Civic?",
    opt1: "Toyota",
    opt2: "Honda",
    opt3: "Mazda",
    opt4: "Nissan",
    correct: "opt2"
  },
  {
    question: "Tesla cars are known for using which technology?",
    opt1: "Solar power",
    opt2: "Electric motors",
    opt3: "Steam engines",
    opt4: "Hybrid diesel",
    correct: "opt2"
  },
  {
    question: "What is the top luxury car brand from Germany?",
    opt1: "Ford",
    opt2: "Fiat",
    opt3: "Mercedes-Benz",
    opt4: "Skoda",
    correct: "opt3"
  },
  {
    question: "Which Italian car brand uses a prancing horse logo?",
    opt1: "Ferrari",
    opt2: "Alfa Romeo",
    opt3: "Fiat",
    opt4: "Maserati",
    correct: "opt1"
  }
],
fastandfurious: [
  {
    question: "Who is the leader of the Toretto crew?",
    opt1: "Dominic Toretto",
    opt2: "Brian O’Conner",
    opt3: "Luke Hobbs",
    opt4: "Han Lue",
    correct: "opt1"
  },
  {
    question: "Who started as an undercover cop in the crew?",
    opt1: "Roman Pearce",
    opt2: "Brian O’Conner",
    opt3: "Tej Parker",
    opt4: "Little Nobody",
    correct: "opt2"
  },
  {
    question: "Who is known for jokes, money, and flashy cars?",
    opt1: "Roman Pearce",
    opt2: "Han Lue",
    opt3: "Tej Parker",
    opt4: "Dom Toretto",
    correct: "opt1"
  },
  {
    question: "Which hacker joined the team in Furious 7?",
    opt1: "Cipher",
    opt2: "Ramsey",
    opt3: "Elle",
    opt4: "Monica",
    correct: "opt2"
  },
  {
    question: "What engine setup is in Dom’s 1970 Charger?",
    opt1: "Massive Supercharger",
    opt2: "Twin Turbo V8",
    opt3: "N/A V6",
    opt4: "EcoBoost I4",
    correct: "opt1"
  },
  {
    question: "What is Han’s RX-7 VeilSide body kit called?",
    opt1: "Fortune Kit",
    opt2: "Pandem Kit",
    opt3: "Vertex Kit",
    opt4: "TRD Aero",
    correct: "opt1"
  },
  {
    question: "What muscle car does Letty drive in Fast 6?",
    opt1: "Dodge SRT8",
    opt2: "Plymouth GTX",
    opt3: "Chevelle SS",
    opt4: "Ford Torino",
    correct: "opt1"
  },
  {
    question: "What car do Dom and Brian use in the vault heist?",
    opt1: "Dodge Charger",
    opt2: "Ford GT40",
    opt3: "Nissan GTR",
    opt4: "Toyota Supra",
    correct: "opt1"
  },
  {
    question: "What armored vehicle does Hobbs’ team use?",
    opt1: "Gurkha Truck",
    opt2: "Urus SUV",
    opt3: "AMG G63",
    opt4: "Raptor APC",
    correct: "opt1"
  },
  {
    question: "What blue-white car does Brian drive in Furious 7?",
    opt1: "Nissan GT-R R35",
    opt2: "Subaru WRX STi",
    opt3: "Lancer Evo IX",
    opt4: "Porsche GT3",
    correct: "opt1"
  },
  {
    question: "What car does Sean drive as DK in Tokyo Drift?",
    opt1: "Nissan 350Z",
    opt2: "GT-R R34",
    opt3: "Mazda RX-7",
    opt4: "Toyota 86",
    correct: "opt1"
  },
  {
    question: "What nitrous system does Dom use in Fast & Furious 4?",
    opt1: "Dual NOS Bottles",
    opt2: "Dry Shot Kit",
    opt3: "Water-Meth Kit",
    opt4: "EcoBoost Boosters",
    correct: "opt1"
  },
  {
    question: "Which luxury brand is Roman associated with?",
    opt1: "Bugatti",
    opt2: "Lamborghini",
    opt3: "Rolls-Royce",
    opt4: "Bentley",
    correct: "opt2"
  },
  {
    question: "What feature does Dom’s Ice Charger have for icy terrain?",
    opt1: "Reinforced Spikes",
    opt2: "Magnetic Tires",
    opt3: "Ice Studded Grip",
    opt4: "Snow Tracks",
    correct: "opt3"
  },
  {
    question: "Brian’s R34 livery is inspired by which style?",
    opt1: "Nismo Theme",
    opt2: "Greddy Style",
    opt3: "Mishimoto Wrap",
    opt4: "Sparco Pattern",
    correct: "opt2"
  },
  {
    question: "Which supercar is hacked by Tej in Fast Five?",
    opt1: "Porsche GT3",
    opt2: "Lamborghini Murciélago",
    opt3: "Dodge Charger",
    opt4: "Ford GT",
    correct: "opt2"
  },
  {
    question: "What car does Jakob Toretto drive in F9?",
    opt1: "Ford Mustang GT",
    opt2: "Nissan GT-R",
    opt3: "Camaro ZL1",
    opt4: "Supra GR",
    correct: "opt3"
  },
  {
    question: "What tech powers Cipher’s Zombie Cars?",
    opt1: "Remote Hacking",
    opt2: "AI Swarm Control",
    opt3: "Neural Overdrive",
    opt4: "GPS Hijacking",
    correct: "opt1"
  },
  {
    question: "What makes the Lykan HyperSport unique?",
    opt1: "Diamond Headlights",
    opt2: "Triple Turbo V8",
    opt3: "Gold Pistons",
    opt4: "Quad Motors",
    correct: "opt1"
  },
  {
    question: "What allows Dom’s Charger to wheelie?",
    opt1: "Massive Torque",
    opt2: "Soft Rear Springs",
    opt3: "Short Gear Ratio",
    opt4: "Nitrous Boost",
    correct: "opt1"
  },
  {
    question: "What nitrous system is seen most in early movies?",
    opt1: "NOS Wet Shot",
    opt2: "Turbo Nitrous Mix",
    opt3: "Nitro Ox Boost",
    opt4: "Eco Nitrous Kit",
    correct: "opt1"
  },
  {
    question: "What engine layout powers Brian’s Evo IX?",
    opt1: "Inline-4 Turbo",
    opt2: "V6 Twin Turbo",
    opt3: "Flat-4 Boxer",
    opt4: "Inline-5 Turbo",
    correct: "opt1"
  },
  {
    question: "What drivetrain does Brian’s WRX STi have?",
    opt1: "AWD System",
    opt2: "RWD Setup",
    opt3: "FWD Layout",
    opt4: "Hybrid AWD",
    correct: "opt1"
  },
  {
    question: "Which car does Dom use for the skyscraper jump?",
    opt1: "Lykan HyperSport",
    opt2: "Nissan GT-R",
    opt3: "Dodge Charger",
    opt4: "Lamborghini Sesto",
    correct: "opt1"
  },
  {
    question: "What suspension does Letty’s Rally Fighter have?",
    opt1: "Long-Travel Offroad",
    opt2: "Air Ride Bags",
    opt3: "Sport Coilovers",
    opt4: "Hydraulic Lift",
    correct: "opt1"
  },
  {
    question: "Which car races the submarine in Fate of the Furious?",
    opt1: "Dodge Ice Charger",
    opt2: "Lamborghini Murciélago",
    opt3: "Subaru WRX",
    opt4: "Bentley GT3",
    correct: "opt1"
  },
  {
    question: "What car does Tej use in the safe-drag scene?",
    opt1: "Nissan Skyline",
    opt2: "Honda NSX",
    opt3: "Dodge Charger",
    opt4: "Ford Bronco",
    correct: "opt3"
  },
  {
    question: "Which car does Han drift through Shibuya crossing?",
    opt1: "Mazda RX-7",
    opt2: "Nissan 350Z",
    opt3: "Toyota Supra",
    opt4: "Nissan Silvia",
    correct: "opt1"
  },
  {
    question: "What classic muscle car is Dom’s signature ride?",
    opt1: "1970 Dodge Charger",
    opt2: "Chevelle SS",
    opt3: "Camaro Z28",
    opt4: "Ford Mustang GT",
    correct: "opt1"
  },
  {
    question: "What drift technique is shown repeatedly in Tokyo Drift?",
    opt1: "Power Over Drift",
    opt2: "Scandinavian Flick",
    opt3: "Clutch Kick Drift",
    opt4: "E-Brake Drift",
    correct: "opt4"
  },
  {
    question: "Which car does Brian use during the train heist?",
    opt1: "Nissan GT-R",
    opt2: "Ford GT40",
    opt3: "Toyota Supra",
    opt4: "Lancer Evo",
    correct: "opt2"
  },
  {
    question: "Which off-road car does Dom use in Fast & Furious 4 desert chase?",
    opt1: "Chevelle SS",
    opt2: "Plymouth GTX",
    opt3: "Buick GNX",
    opt4: "Offroad Charger",
    correct: "opt4"
  },
  {
    question: "What car does Ramsey drop from the plane in Furious 7?",
    opt1: "Lykan HyperSport",
    opt2: "Subaru WRX",
    opt3: "Dodge Charger",
    opt4: "Range Rover",
    correct: "opt2"
  },
  {
    question: "What feature helps Dom’s Charger handle huge torque?",
    opt1: "Reinforced Chassis",
    opt2: "Drag Radials",
    opt3: "Strengthened Axles",
    opt4: "Custom Driveshaft",
    correct: "opt1"
  },
  {
    question: "What special transmission do Roman’s cars often show?",
    opt1: "Dual-Clutch Gearbox",
    opt2: "CVT System",
    opt3: "Sequential Shifter",
    opt4: "4-Speed Auto",
    correct: "opt3"
  },
  {
    question: "What mod helps Han maintain long drifts?",
    opt1: "Sticky Tires",
    opt2: "Hydraulic Handbrake",
    opt3: "Widebody Kit",
    opt4: "Extra Fuel Load",
    correct: "opt2"
  },
  {
    question: "What tuning part is common in Dom’s race cars?",
    opt1: "Nitrous Bottles",
    opt2: "EcoBoost Turbos",
    opt3: "Cold Air Intake",
    opt4: "Sports Exhaust",
    correct: "opt1"
  },
  {
    question: "What muscle car appears in Dom’s Cuba race?",
    opt1: "Chevy Fleetline",
    opt2: "Dodge Charger",
    opt3: "Ford Fairlane",
    opt4: "Plymouth Roadrunner",
    correct: "opt1"
  },
  {
    question: "What car does Han talk about importing from Tokyo?",
    opt1: "Nissan Silvia",
    opt2: "Mazda RX-7",
    opt3: "Toyota Chaser",
    opt4: "Nissan Skyline",
    correct: "opt3"
  }
],

cosmos : [
  {
    question: "What is the main reason stars shine?",
    opt1: "Nuclear Fusion",
    opt2: "Cosmic Heat",
    opt3: "Gas Compression",
    opt4: "Solar Energy",
    correct: "opt1"
  },
  {
    question: "What force keeps planets in orbit around a star?",
    opt1: "Magnetism",
    opt2: "Gravity",
    opt3: "Tidal Pull",
    opt4: "Star Pressure",
    correct: "opt2"
  },
  {
    question: "What is a black hole’s event horizon?",
    opt1: "Energy Shield",
    opt2: "Boundary Edge",
    opt3: "Gravity Core",
    opt4: "Dark Ring",
    correct: "opt2"
  },
  {
    question: "Which planet has the strongest magnetic field?",
    opt1: "Jupiter",
    opt2: "Saturn",
    opt3: "Neptune",
    opt4: "Earth",
    correct: "opt1"
  },
  {
    question: "What is the name of our galaxy?",
    opt1: "Milky Way",
    opt2: "Andromeda",
    opt3: "Triangulum",
    opt4: "Whirlpool",
    correct: "opt1"
  },
  {
    question: "What causes a supernova explosion?",
    opt1: "Star Collapse",
    opt2: "Solar Winds",
    opt3: "Cosmic Rays",
    opt4: "Planet Impact",
    correct: "opt1"
  },
  {
    question: "What is the closest star to Earth after the Sun?",
    opt1: "Sirius",
    opt2: "Alpha Centauri",
    opt3: "Proxima Centauri",
    opt4: "Vega",
    correct: "opt3"
  },
  {
    question: "What is a nebula often called?",
    opt1: "Star Nursery",
    opt2: "Cosmic Fog",
    opt3: "Gas Bubble",
    opt4: "Space Shell",
    correct: "opt1"
  },
  {
    question: "What is a pulsar?",
    opt1: "Spinning Neutron Star",
    opt2: "Mini Black Hole",
    opt3: "Cold Dying Star",
    opt4: "Fast Meteor",
    correct: "opt1"
  },
  {
    question: "What makes a quasar extremely bright?",
    opt1: "Dust Clouds",
    opt2: "Black Hole Feeding",
    opt3: "Star Clusters",
    opt4: "Nuclear Bursts",
    correct: "opt2"
  },
  {
    question: "What is the Kuiper Belt?",
    opt1: "Ice Region",
    opt2: "Star Field",
    opt3: "Gas Cloud",
    opt4: "Dark Zone",
    correct: "opt1"
  },
  {
    question: "What does the Oort Cloud contain?",
    opt1: "Frozen Comets",
    opt2: "Dust Rings",
    opt3: "Gas Nebulae",
    opt4: "Mini Planets",
    correct: "opt1"
  },
  {
    question: "What is the boundary where the Sun’s influence ends?",
    opt1: "Solar Rim",
    opt2: "Cosmic Line",
    opt3: "Heliopause",
    opt4: "Void Barrier",
    correct: "opt3"
  },
  {
    question: "What is the main difference between comets and asteroids?",
    opt1: "Shape Only",
    opt2: "Orbit Path",
    opt3: "Icy vs Rocky",
    opt4: "Size Factor",
    correct: "opt3"
  },
  {
    question: "What is the largest volcano in the solar system?",
    opt1: "Olympus Mons",
    opt2: "Mauna Loa",
    opt3: "Mount Tharsis",
    opt4: "Gale Crater",
    correct: "opt1"
  },
  {
    question: "What causes the northern lights?",
    opt1: "Cosmic Rays",
    opt2: "Solar Wind",
    opt3: "Gravity Waves",
    opt4: "Deep Cold Air",
    correct: "opt2"
  },
  {
    question: "What is a star in its earliest stage called?",
    opt1: "Protostar",
    opt2: "White Dwarf",
    opt3: "Nebulite",
    opt4: "Young Star",
    correct: "opt1"
  },
  {
    question: "What type of galaxy is the Milky Way?",
    opt1: "Elliptical",
    opt2: "Ring Galaxy",
    opt3: "Spiral Galaxy",
    opt4: "Irregular",
    correct: "opt3"
  },
  {
    question: "What happens during a solar eclipse?",
    opt1: "Earth Blocks Sun",
    opt2: "Moon Blocks Sun",
    opt3: "Sun Blocks Moon",
    opt4: "Sky Turns Blue",
    correct: "opt2"
  },
  {
    question: "What is the planet’s path around the Sun called?",
    opt1: "Rotation",
    opt2: "Orbit",
    opt3: "Axis Line",
    opt4: "Curve Trail",
    correct: "opt2"
  },
  {
    question: "What is the Hubble Telescope used for?",
    opt1: "Deep Space Imaging",
    opt2: "Mars Mapping",
    opt3: "Moon Scanning",
    opt4: "Solar Tracking",
    correct: "opt1"
  },
  {
    question: "Which galaxy is closest to the Milky Way?",
    opt1: "Andromeda",
    opt2: "Sombrero",
    opt3: "Cartwheel",
    opt4: "Pinwheel",
    correct: "opt1"
  },
  {
    question: "Which planet has the most moons?",
    opt1: "Jupiter",
    opt2: "Saturn",
    opt3: "Neptune",
    opt4: "Uranus",
    correct: "opt2"
  },
  {
    question: "Which element is most abundant in stars?",
    opt1: "Hydrogen",
    opt2: "Helium",
    opt3: "Carbon",
    opt4: "Oxygen",
    correct: "opt1"
  },
  {
    question: "Which constellation contains the North Star?",
    opt1: "Ursa Major",
    opt2: "Ursa Minor",
    opt3: "Orion",
    opt4: "Cassiopeia",
    correct: "opt2"
  },
  {
    question: "Which planet has blue methane clouds?",
    opt1: "Neptune",
    opt2: "Uranus",
    opt3: "Jupiter",
    opt4: "Saturn",
    correct: "opt1"
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
 assamHistory : [
  {
    question: "Who founded the Ahom kingdom?",
    opt1: "Sukapha",
    opt2: "Rudra Singha",
    opt3: "Bhaskar Varman",
    opt4: "Naranarayan",
    correct: "opt1"
  },
  {
    question: "In which year did the Battle of Saraighat occur?",
    opt1: "1671",
    opt2: "1615",
    opt3: "1751",
    opt4: "1826",
    correct: "opt1"
  },
  {
    question: "Who led the Ahoms in the Battle of Saraighat?",
    opt1: "Sukapha",
    opt2: "Lachit Borphukan",
    opt3: "Badanchandra",
    opt4: "Rudra Singha",
    correct: "opt2"
  },
  {
    question: "Which Mughal general fought at Saraighat?",
    opt1: "Mir Jumla",
    opt2: "Shaista Khan",
    opt3: "Ram Singh",
    opt4: "Aurangzeb",
    correct: "opt3"
  },
  {
    question: "Who was the longest-ruling Ahom king?",
    opt1: "Sukapha",
    opt2: "Pratap Singha",
    opt3: "Sudempha",
    opt4: "Rajeswar Singha",
    correct: "opt3"
  },
  {
    question: "What was the main capital of the Ahoms?",
    opt1: "Jorhat",
    opt2: "Garhgaon",
    opt3: "Guwahati",
    opt4: "Sibsagar",
    correct: "opt2"
  },
  {
    question: "Who started the Moamoria Rebellion?",
    opt1: "Rangpur rebels",
    opt2: "Vaishnav monks",
    opt3: "Moamoria sect",
    opt4: "Ahom nobles",
    correct: "opt3"
  },
  {
    question: "Who wrote the ‘Kirtan Ghoxa’?",
    opt1: "Madhavdev",
    opt2: "Shankaradeva",
    opt3: "Hem Saraswati",
    opt4: "Harihar Bipra",
    correct: "opt2"
  },
  {
    question: "Who founded the Barduwa Than?",
    opt1: "Madhavdev",
    opt2: "Shankaradeva",
    opt3: "Damodaradeva",
    opt4: "Aniruddhadeva",
    correct: "opt2"
  },
  {
    question: "Which Ahom king built the Rang Ghar?",
    opt1: "Rudra Singha",
    opt2: "Pratap Singha",
    opt3: "Siva Singha",
    opt4: "Gadadhar Singha",
    correct: "opt3"
  },
  {
    question: "Which language was used in ancient Assam inscriptions?",
    opt1: "Assamese",
    opt2: "Pali",
    opt3: "Sanskrit",
    opt4: "Prakrit",
    correct: "opt3"
  },
  {
    question: "When was Assam annexed by the British?",
    opt1: "1826",
    opt2: "1857",
    opt3: "1815",
    opt4: "1830",
    correct: "opt1"
  },
  {
    question: "Who led the Phulaguri uprising?",
    opt1: "Peasants",
    opt2: "Tea workers",
    opt3: "Ahom soldiers",
    opt4: "Local kings",
    correct: "opt1"
  },
  {
    question: "Which movement in Assam joined Quit India?",
    opt1: "Nongkrem revolt",
    opt2: "Phulaguri revolt",
    opt3: "Azad Assam movement",
    opt4: "Swadeshi movement",
    correct: "opt3"
  },
  {
    question: "Who was the first Assamese to join Congress?",
    opt1: "Gopinath Bordoloi",
    opt2: "Tarun Ram Phukan",
    opt3: "Ambikagiri Raichoudhury",
    opt4: "Maniram Dewan",
    correct: "opt2"
  },
  {
    question: "What was the old name of Guwahati?",
    opt1: "Pragjyotishpur",
    opt2: "Ratnapur",
    opt3: "Sonitpur",
    opt4: "Kamrup",
    correct: "opt1"
  },
  {
    question: "Which dynasty ruled Kamarupa in 7th century?",
    opt1: "Palas",
    opt2: "Ahoms",
    opt3: "Varmans",
    opt4: "Chutias",
    correct: "opt3"
  },
  {
    question: "Who was Bhaskar Varman’s ally?",
    opt1: "Harsha",
    opt2: "Ashoka",
    opt3: "Chandragupta",
    opt4: "Pulakeshin",
    correct: "opt1"
  },
  {
    question: "What is the ancient Assamese script called?",
    opt1: "Brahmi script",
    opt2: "Kamarupi script",
    opt3: "Sanskrit script",
    opt4: "Tirhuta script",
    correct: "opt2"
  },
  {
    question: "Which temple is linked to Goddess Kamakhya?",
    opt1: "Hayagriva temple",
    opt2: "Umananda temple",
    opt3: "Kamakhya temple",
    opt4: "Sukreswar temple",
    correct: "opt3"
  }
],
pokemon : [
    {
        question: "What is the name of the electric mouse Pokémon that is Ash's main partner?",
        opt1: "Eevee",
        opt2: "Pikachu",
        opt3: "Squirtle",
        opt4: "Charmander",
        correct: "opt2",
    },
    {
        question: "Which type is Bulbasaur primarily?",
        opt1: "Fire",
        opt2: "Water",
        opt3: "Grass",
        opt4: "Electric",
        correct: "opt3",
    },
    {
        question: "Which Pokémon evolves into Charmeleon?",
        opt1: "Charmander",
        opt2: "Charizard",
        opt3: "Cyndaquil",
        opt4: "Vulpix",
        correct: "opt1",
    },
    {
        question: "What item is commonly used to catch wild Pokémon?",
        opt1: "Potion",
        opt2: "Poké Ball",
        opt3: "Bicycle",
        opt4: "TM",
        correct: "opt2",
    },
    {
        question: "Which Pokémon is known as the 'Water Turtle' and can shoot water from its mouth?",
        opt1: "Squirtle",
        opt2: "Psyduck",
        opt3: "Jigglypuff",
        opt4: "Growlithe",
        correct: "opt1",
    },
    {
        question: "Which of these is a Normal-type Pokémon that can sing to put opponents to sleep?",
        opt1: "Jigglypuff",
        opt2: "Abra",
        opt3: "Geodude",
        opt4: "Onix",
        correct: "opt1",
    },
    {
        question: "What color is the default version of Pikachu?",
        opt1: "Blue",
        opt2: "Green",
        opt3: "Yellow",
        opt4: "Red",
        correct: "opt3",
    },
    {
        question: "Which Pokémon is a psychic-type that often holds its head and is known for confusion attacks?",
        opt1: "Abra",
        opt2: "Machop",
        opt3: "Pidgey",
        opt4: "Ekans",
        correct: "opt1",
    },
    {
        question: "Which starter Pokémon from the original games is fire-type?",
        opt1: "Bulbasaur",
        opt2: "Squirtle",
        opt3: "Charmander",
        opt4: "Pikachu",
        correct: "opt3",
    },
    {
        question: "Which evolution does Eevee NOT directly evolve into in Generation I?",
        opt1: "Vaporeon",
        opt2: "Jolteon",
        opt3: "Flareon",
        opt4: "Sylveon",
        correct: "opt4",
    }
  ],
  
};




