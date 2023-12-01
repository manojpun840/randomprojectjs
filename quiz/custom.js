const quizData = [
    {
        question:"Which is the capital city of Nepal?",
        a:"Kathmandu",
        b:"Pokhara",
        c:"Butwal",
        d:"Dhading",
        correct:"a",
    },
    {
        question:"What is the full form of HTML?",
        a:"HyperText Markup Langauge",
        b:"HyperText Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Helicopter Terminals Motorboats Lamborghinis",
        correct:"a",
    },
    {
        question:"When was JavaScript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct:"b",
    },
    {
        question:"Which language runs in a web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d",
    },
    {
        question:"What does CSS stands for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars Subs Sailboats",
        correct:"b",
    },
];
 
// console.log(quizData);

const quiz = document.getElementById("quiz");
// console.log(quiz);
const answerEls = document.querySelectorAll(".answer");
// console.log(answerEls);
const questionEl = document.getElementById("question");
// console.log(questionEls);
const a_text = document.getElementById("a_text");
// console.log(a_text);
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
// console.log(submitBtn);

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
     
    const currentQuizData = quizData[currentQuiz];
    // console.log(currentQuizData);

    questionEl.innerText = currentQuizData.question;
    // console.log(questionEl.innerText);
    a_text.innerText = currentQuizData.a; 
    // console.log(a_text.innerText);
    b_text.innerText = currentQuizData.b; 
    c_text.innerText = currentQuizData.c; 
    d_text.innerText = currentQuizData.d; 
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false})
}
 
function getSelected() {
    let answer;  // Create a variable to store the selected answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;  // If an element is checked, store its 'id' in the 'answer' variable
        }
    });
    return answer;  // Return the 'id' of the selected answer or 'undefined' if none is selected
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
            <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})





