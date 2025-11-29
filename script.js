

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
let unattempted = 0;
let myInterval = null
// let sec = 10

let countDown = document.querySelector(".timer")
let backBtn = document.getElementById("backBtn")

let savedAnswers = new Array(quizQuestions.length).fill(null)

let allInputss = document.querySelectorAll('input[name=opt]')
let allLabels = document.querySelectorAll(`label[for^="opt"]`)

let total = quizQuestions.length


allInputss.forEach(inpt => {
    inpt.addEventListener("change", () => {
        savedAnswers[currentQuesNo] = inpt.id

        checkAnswer()
    })
})
console.log(quizQuestions.length);

function showQuestion() {
    console.log("Ques No", currentQuesNo);

    console.log("unattemp", unattempted);
    if (currentQuesNo === quizQuestions.length - 1) {
        scoreSaver()
        unattempted = total - (score + galatAns)

        localStorage.setItem("scoreKitna", score)
        localStorage.setItem("galatKitna", galatAns)
        localStorage.setItem("unattemp", unattempted)

        // console.log("hua calculate", score);
        // console.log("score", score);
        // console.log("galat", galatAns);
    }

    if (currentQuesNo >= quizQuestions.length) {
        currentQuesNo = 0;


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


    allLabels.forEach(l => {
        l.style.backgroundColor = "";
        l.style.color = "black"
    });

    clearInterval(myInterval);
    sec = 3;
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


// let allLabels = document.querySelectorAll(`label[for^="opt"]`)
// let allInputss = document.querySelectorAll('input[name=opt]')

// allInputss.forEach(inpt => {
//     inpt.addEventListener("change", () => {
//         savedAnswers[currentQuesNo] = inpt.id

//         checkAnswer()
//     })
// })




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

            } else if (savedAnswers[i] != q.correct && savedAnswers[i] !== null) {
                galatAns++
            }
        });
        localStorage.setItem("galatKitna", galatAns)
        localStorage.setItem("scoreKitna", score)
        location.href = "./result.html"
    } else {
        currentQuesNo++
        showQuestion()
        clearInterval(myInterval)
        myInterval = setInterval(timer, 1000)
    }

})


backBtn.addEventListener("click", back)
function back() {
    if (currentQuesNo === 0) {
        return
    }
    // allLabels.forEach(l => {
    //     l.style.backgroundColor = "";
    //     l.style.color = "black"
    // });

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

    allLabels.forEach(l => l.style.backgroundColor = "");
    let correctInput = document.getElementById(correctAns);

    // if (currentQuesNo >= quizQuestions.length - 1) {
    //     quizQuestions.forEach((q, i) => {
    //         let saveds = savedAnswers[i]


    //         if (saveds === q.correct) {
    //             score++

    //         } else if (saveds != q.correct && savedAnswers[i] !== null) {
    //             galatAns++
    //         }
    //     });
    //     localStorage.setItem("scoreKitna", score)
    //     localStorage.setItem("galatKitna", galatAns)
    //     localStorage.setItem("unattemp", unattempted)
    // }


    if (selectedOpt.id === correctAns) {
        labelSel.style.backgroundColor = "green"

    } else {
        labelSel.style.backgroundColor = "red"
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

        // let total = quizQuestions.length
        // let unattempted = total - (score + galatAns)


        quizQuestions.forEach((q, i) => {
            let saveds = savedAnswers[i]
            if (saveds != null && saveds !== "") {

                if (saveds === q.correct) {
                    score++

                } else if (saveds != q.correct && savedAnswers[i] !== null) {
                    galatAns++
                }

            }

        });
        localStorage.setItem("scoreKitna", score)
        localStorage.setItem("galatKitna", galatAns)
        localStorage.setItem("unattemp", unattempted)


        location.href = "./result.html"

    }
})

function timer() {
    sec--
    countDown.innerHTML = sec

    //  quizQuestions.forEach((q, i) => {
    //         if (savedAnswers[i] === q.correct) {
    //             score++
    //         } else if (savedAnswers[i] != q.correct && savedAnswers[i]!== null) {
    //             galatAns++
    //         }
    //     });
    if (sec <= 0) {
        clearInterval(myInterval)
        currentQuesNo++
        sec = 3
        showQuestion()
    }
}

function scoreSaver() {
    quizQuestions.forEach((q, i) => {
        let saveds = savedAnswers[i]
        if (saveds != null && saveds !== "") {

            if (saveds === q.correct) {
                score++

            } else if (saveds != q.correct && savedAnswers[i] !== null) {
                galatAns++
            }

        }

    });
}