

let params = new URLSearchParams(window.location.search)
let category = params.get("category")
console.log(params);
console.log(category);
let storedCatName = localStorage.getItem("selectedCat")
if (!category) {
    category = storedCatName
}
// console.log(category);


let quizQuestions = allQuestions[category]

// console.log(allQuestions);
// console.log(quizQuestions);




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
localStorage.setItem("totalKitna", total)
// console.log(nayaVal);
// console.log(total);



let ttlQues = document.querySelector(".ttlQues")
ttlQues.innerHTML = total

allInputss.forEach(inpt => {
    inpt.addEventListener("change", () => {
        savedAnswers[currentQuesNo] = inpt.id
        allLabels.forEach(o => o.disabled = true);
        allInputss.forEach(ip => ip.disabled = true);

        checkAnswer()
    })
})



function showQuestion() {

    console.log(currentQuesNo);
    console.log(quizQuestions.length - 1);
    let quesAbhi = document.querySelector(".quesAbhi")
    quesAbhi.innerHTML = currentQuesNo + 1

    if (currentQuesNo === quizQuestions.length - 1) {

        console.log("point:-", score);
        clearInterval(myInterval);

        // scoreSaver()
        // unattempted = total - (score + galatAns)
        // let percent = (score / total) * 100
        // console.log("percent:", percent);

        // localStorage.setItem("percentKitna", percent)
        // localStorage.setItem("scoreKitna", score)
        // localStorage.setItem("galatKitna", galatAns)
        // localStorage.setItem("unattemp", unattempted)

        nextBtn.style.visibility = "visible"
        nextBtn.style.background = "grey"
        nextBtn.disabled = true;
        //  countDown.style.visibility = "hidden"


        // console.log("hua calculate", score);
        // console.log("score", score);
        // console.log("galat", galatAns);
    } else {
        nextBtn.style.visibility = "visible"
        nextBtn.disabled = false;
        nextBtn.style.background = "blue"
        //  countDown.style.visibility = "visible"



    }


    // if (currentQuesNo >= quizQuestions.length) {
    //     currentQuesNo = 0;
    //     location.href = "./result.html"
    //     return
    // }
    if (currentQuesNo === 0) {
        backBtn.disabled = true;
        backBtn.style.background = "grey"
    } else {
        backBtn.disabled = false;
        backBtn.style.background = "blue"

        backBtn.style.visibility = "visible";
    }



    // quesNo.innerText = (currentQuesNo + 1) + (".")
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

   
         allLabels.forEach(o => o.disabled = false);
        allInputss.forEach(ip => ip.disabled = false);
    


    clearInterval(myInterval);
    sec = 19;
    myInterval = setInterval(timer, 1000);


    let saved = savedAnswers[currentQuesNo];
    // console.log("Ye wala",saved)
    if (saved) {
        let savedInput = document.getElementById(saved);
        if (savedInput) {
            savedInput.checked = true;
        allInputss.forEach(ip => ip.disabled = true);

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
    } else {
        nextBtn.style.visibility = "visible";

        currentQuesNo++
        showQuestion()
        clearInterval(myInterval)
        myInterval = setInterval(timer, 1000)
    }

});


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
        labelSel.style.color = "white"
        // allLabels.forEach(lbl => lbl.disabled=true)


    } else {
        labelSel.style.backgroundColor = "red"
        labelSel.style.color = "white"

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


        // quizQuestions.forEach((q, i) => {
        //     let saveds = savedAnswers[i]
        //     if (saveds != null && saveds !== "") {

        //         if (saveds === q.correct) {
        //             score++

        //         } else if (saveds != q.correct && savedAnswers[i] !== null) {
        //             galatAns++
        //         }

        //     }

        // });
        // localStorage.setItem("scoreKitna", score)
        // localStorage.setItem("galatKitna", galatAns)
        // localStorage.setItem("unattemp", unattempted)
        scoreSaver()
        unattempted = total - (score + galatAns)
        let percent = (score / total) * 100
        console.log("percent:", percent);

        localStorage.setItem("percentKitna", percent)
        localStorage.setItem("scoreKitna", score)
        localStorage.setItem("galatKitna", galatAns)
        localStorage.setItem("unattemp", unattempted)

        location.href = "./result.html"

    }
})

function timer() {
    sec--
    countDown.innerHTML = sec
    if (sec <= 0) {
        clearInterval(myInterval)
        if (currentQuesNo === quizQuestions.length - 1) {
            clearInterval(myInterval)
        } else {
            currentQuesNo++
            sec = 19
            showQuestion()
        }

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