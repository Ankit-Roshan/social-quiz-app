// const quizQuestions = [
//     {
//         question: "Which language runs in a web browser?",
//         opt1: "Java",
//         opt2: "C",
//         opt3: "Python",
//         opt4: "JavaScript",
//         correct: "opt4",
//     },
//     {
//         question: "What does CSS stand for?",
//         opt1: "Central Style Sheets",
//         opt2: "Cascading Style Sheets",
//         opt3: "Cascading Simple Sheets",
//         opt4: "Cars SUVs Sailboats",
//         correct: "opt2",
//     },
//     {
//         question: "What does HTML stand for?",
//         opt1: "Hypertext Markup Language",
//         opt2: "Hypertext Markdown Language",
//         opt3: "Hyperloop Machine Language",
//         opt4: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "opt1",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         opt1: "1996",
//         opt2: "1995",
//         opt3: "1994",
//         opt4: "none of the above",
//         correct: "opt2",
//     },
// ];

const quizQuestions = [
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
    },
];






let quesNo = document.getElementById("quesNo")
let quesText = document.getElementById("quesText")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")
let nextBtn = document.getElementById("nextBtn")


let currentQuesNo = 0;
let score = 0;
let myInterval = null
let sec = 10

let countDown = document.querySelector(".timer")


function showQuestion() {
    // checkKarFun()
    // clearInterval(myInterval)

    // sec =10
    // countDown.innerHTML = sec

    // myInterval = setInterval(timer, 1000)

    if (currentQuesNo >= quizQuestions.length) {
        currentQuesNo = 0;
        localStorage.setItem("scoreKitna", score)
        location.href = "./result.html"
    }

    let options = document.querySelectorAll('input[name="opt"]');
    options.forEach(option => option.checked = false)

    quesNo.innerText = (currentQuesNo + 1) + (".")
    quesText.innerHTML = quizQuestions[currentQuesNo].question
    option1.innerHTML = quizQuestions[currentQuesNo].opt1
    option2.innerHTML = quizQuestions[currentQuesNo].opt2
    option3.innerHTML = quizQuestions[currentQuesNo].opt3
    option4.innerHTML = quizQuestions[currentQuesNo].opt4
    console.log(currentQuesNo)
}
showQuestion();

nextBtn.addEventListener("click", () => {
    let optionSelected = document.querySelector('input[name="opt"]:checked')

    if (optionSelected == null) {
        alert("Please select one option")
    } else {
        let correctOption = quizQuestions[currentQuesNo].correct
        if (optionSelected.id === correctOption) {
            score++
        }
        // currentQuesNo++
        if (currentQuesNo >= quizQuestions.length) {
            currentQuesNo = 0;
            // showQuestion()
            localStorage.setItem("scoreKitna", score)
            location.href = "./result.html"
        } else {
            currentQuesNo++
            showQuestion()
            // clearInterval(myInterval)
            // myInterval = setInterval(timer, 1000)
        }
    }
})

// let totalTime = 8

// function timer() {
//     countDown.innerHTML = sec
//     sec--;
//     if (sec <= 0) {
//         sec =10
//         clearInterval(myInterval)
//         currentQuesNo++
//         showQuestion()
//     }
// }
let backBtn = document.getElementById("backBtn")

backBtn.addEventListener("click", back)
function back() {
    if (currentQuesNo === 0) {
        return
    } else if (currentQuesNo > 0) {
        currentQuesNo--
        showQuestion()
    }
}

let checkBtn = document.getElementById("checkKar");

checkBtn.addEventListener("click", () => {
    let correctAns = quizQuestions[currentQuesNo].correct
    let selectedOpt = document.querySelector('input[name="opt"]:checked')

    console.log(correctAns);
    console.log(selectedOpt.id);
    let labelSel = document.querySelector(`label[for ="${selectedOpt.id}"]`)
    let labelCrct = document.querySelector(`label[for ="${correctAns}"]`)

    console.log(labelSel);
    console.log(labelCrct);

    if (labelSel === labelCrct) {
        labelSel.style.backgroundColor = "green"
    } else if (labelSel != labelCrct) {
        labelSel.style.backgroundColor = "red"
        labelCrct.style.backgroundColor = "green"
        labelCrct.style.color = "white"
    }
})

// function checkKarFun() {
//     let correctAns = quizQuestions[currentQuesNo].correct
//     let selectedOpt = document.querySelector('input[name="opt"]:checked')

//     let labelSel = document.querySelector(`label[for ="${selectedOpt.id}"]`)
//     let labelCrct = document.querySelector(`label[for ="${correctAns}"]`)


//     if (labelSel === labelCrct) {
//         labelSel.style.backgroundColor = "green"
//     } else if (labelSel != labelCrct) {
//         labelSel.style.backgroundColor = "red"
//         labelCrct.style.backgroundColor = "green"
//         labelCrct.style.color = "white"
//     }
// }

let allLabels = document.querySelectorAll(`label[for^="opt"]`)
let allInputss = document.querySelectorAll('input[name=opt]')

allInputss.forEach(label => {
    label.addEventListener("click", () => {
        //   label.style.backgroundColor ="pink"
        // console.log(e.target);

        let correctAns = quizQuestions[currentQuesNo].correct
        let selectedOpt = document.querySelector('input[name="opt"]:checked')


        let labelSel = document.querySelector(`label[for ="${selectedOpt.id}"]`)
        let labelCrct = document.querySelector(`label[for ="${correctAns}"]`)

        console.log(correctAns);
        console.log(labelCrct);
        console.log(labelSel);


        allLabels.forEach(l => l.style.backgroundColor = "");


        if (labelSel === labelCrct) {
            labelSel.style.backgroundColor = "green"
        } else {
            labelSel.style.backgroundColor = "red"
            labelCrct.style.backgroundColor = "green"
            labelCrct.style.color = "white"
        }
    })
})






// //  if (labelSel != labelCrct)
// const allLabels = document.querySelectorAll('label[for^="opt"]');
// const allInputs = document.querySelectorAll('input[name="opt"]');

// function resetLabelStyles() {
//   allLabels.forEach(l => {
//     l.style.backgroundColor = '';
//     l.style.color = '';
//   });
// }

// function handleSelection() {
//   const correctAns = quizQuestions[currentQuesNo].correct; // expected to be the input id, e.g. "opt1"
//   const selectedOpt = document.querySelector('input[name="opt"]:checked');
//   if (!selectedOpt) return; // safety guard

//   const labelSel = document.querySelector(`label[for="${selectedOpt.id}"]`);
//   const labelCrct = document.querySelector(`label[for="${correctAns}"]`);

//   resetLabelStyles();

//   if (labelSel === labelCrct) {
//     labelSel.style.backgroundColor = 'green';
//     labelSel.style.color = 'white';
//   } else {
//     labelSel.style.backgroundColor = 'red';
//     labelCrct.style.backgroundColor = 'green';
//     labelCrct.style.color = 'white';
//   }
// }

// // Attach a single change listener to each radio input (fires after checked state updates)
// allInputs.forEach(input => {
//   input.addEventListener('change', handleSelection);
// });

// // (Optional) If you still want labels to show a visual active state on click immediately,
// // attach a click handler that only toggles a transient active style — but do NOT reattach change listeners there.
// allLabels.forEach(lbl => {
//   lbl.addEventListener('click', () => {
//     // small visual cue, but actual correctness logic runs in `change`
//     allLabels.forEach(l => l.classList.remove('active'));
//     lbl.classList.add('active');
//   });
// });