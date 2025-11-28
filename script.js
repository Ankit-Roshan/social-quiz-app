
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

let params = new URLSearchParams(window.location.search)
let category = params.get("category")
console.log(params);
console.log(category);

let quizQuestions = allQuestions[category]

console.log(quizQuestions);



let quesNo = document.getElementById("quesNo")
let quesText = document.getElementById("quesText")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")
let nextBtn = document.getElementById("nextBtn")


let currentQuesNo = 0;
let score = 0;
let galatAns = 0;
let myInterval = null
let sec = 10

let countDown = document.querySelector(".timer")
let backBtn = document.getElementById("backBtn")

let savedAnswers = new Array(quizQuestions.length).fill(null)

function showQuestion() {


    if (currentQuesNo >= quizQuestions.length) {
        currentQuesNo = 0;
        localStorage.setItem("scoreKitna", score)
        location.href = "./result.html"
        return
    }
    if (currentQuesNo === 0) {
        backBtn.style.visibility = "hidden";
    } else {
        backBtn.style.visibility = "visible";

    }

    quesNo.innerText = (currentQuesNo + 1) + (".")
    quesText.innerHTML = quizQuestions[currentQuesNo].question
    option1.innerHTML = quizQuestions[currentQuesNo].opt1
    option2.innerHTML = quizQuestions[currentQuesNo].opt2
    option3.innerHTML = quizQuestions[currentQuesNo].opt3
    option4.innerHTML = quizQuestions[currentQuesNo].opt4

    let options = document.querySelectorAll('input[name="opt"]');
    options.forEach(option => option.checked = false)
    // console.log(currentQuesNo)

    // let saved =savedAnswer[currentQuesNo]
    // if(saved){
    //     radio.value = saved;
    //     radio.checked = true
    // }
    clearInterval(myInterval);  // stop old timer
    sec = 10;                   // reset time
    myInterval = setInterval(timer, 1000);


    let saved = savedAnswers[currentQuesNo];
    // console.log("Ye wala",saved)
    if (saved) {
        let savedInput = document.getElementById(saved);
        if (savedInput) {
            savedInput.checked = true;
        }
        checkAnswer()
    }
}
showQuestion();


let allLabels = document.querySelectorAll(`label[for^="opt"]`)
let allInputss = document.querySelectorAll('input[name=opt]')

allInputss.forEach(inpt => {
    inpt.addEventListener("change", () => {
        savedAnswers[currentQuesNo] = inpt.id

        checkAnswer()
    })
})




nextBtn.addEventListener("click", () => {
    let optionSelected = document.querySelector('input[name="opt"]:checked')
    let correctOption = quizQuestions[currentQuesNo].correct

    allLabels.forEach(l => {
        l.style.backgroundColor = "";
        l.style.color = "black";

    });

    if (optionSelected == null) {
        alert("Please select one option")
    }

    // else if (optionSelected.id === correctOption) {

    //     // score++
    //     console.log(score);
    // }

    // currentQuesNo++
    else if (currentQuesNo >= quizQuestions.length - 1) {
        currentQuesNo = 0;
        // showQuestion()
        quizQuestions.forEach((q, i) => {
            if (savedAnswers[i] === q.correct) {
                score++
                console.log(savedAnswers[i]);
                console.log(q.correct);
                console.log(score);

            } else if (savedAnswers[i] != q.correct) {
                galatAns++
            }
        });
        localStorage.setItem("galatKitna", galatAns)
        localStorage.setItem("scoreKitna", score)
        location.href = "./result.html"
    } else {
        currentQuesNo++
        showQuestion()
        // clearInterval(myInterval)
        // myInterval = setInterval(timer, 1000)
    }

})


backBtn.addEventListener("click", back)
function back() {
    if (currentQuesNo === 0) {
        return
    }
    allLabels.forEach(l => {
        l.style.backgroundColor = "";
        l.style.color = "black"
    });

    // allInputss.forEach(inpt => {
    //     inpt.addEventListener("click", () => {
    //         checkAnswer()
    //     })
    // })

    if (currentQuesNo === 0) {
        return
    } else if (currentQuesNo > 0) {
        currentQuesNo--
        showQuestion()
    }
}


function checkAnswer() {

    let correctAns = quizQuestions[currentQuesNo].correct
    let selectedOpt = document.querySelector('input[name="opt"]:checked')

    let labelSel = document.querySelector(`label[for ="${selectedOpt.id}"]`)
    let labelCrct = document.querySelector(`label[for ="${correctAns}"]`)

    // console.log(correctAns);
    // console.log(labelSel);
    // console.log(labelCrct);
    // console.log(selectedOpt)

    allLabels.forEach(l => l.style.backgroundColor = "");
    let correctInput = document.getElementById(correctAns);

    if (selectedOpt.id === correctAns) {
        labelSel.style.backgroundColor = "green"
        // correctInput.checked = true;

    } else {
        labelSel.style.backgroundColor = "red"
        // correctInput.checked = true;
        // selectedOpt.checked = true
        labelCrct.style.backgroundColor = "green"
        labelCrct.style.color = "white"
    }

}
let submit = document.getElementById("submit")
submit.addEventListener("click", () => {
    if (currentQuesNo < 4) {
        alert(`please attemp atleast ${4 - currentQuesNo} more questions to submit`)
    }
    else if (currentQuesNo > 4) {

        let total = quizQuestions.length


        quizQuestions.forEach((q, i) => {
            let saveds = savedAnswers[i]
            if (saveds != null && saveds !== "") {

                if (saveds === q.correct) {
                    score++

                } else if (saveds != q.correct) {
                    galatAns++
                }

            }

        });
        let unattempted = total - (score + galatAns)

        localStorage.setItem("galatKitna", galatAns)
        localStorage.setItem("scoreKitna", score)
        localStorage.setItem("unattemp", unattempted)

        location.href = "./result.html"

    }
})

function timer() {
    sec--
    countDown.innerHTML = sec
    if(sec<=0){
       sec=10
    }
}

