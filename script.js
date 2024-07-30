
const quizData = [
    
    
    {

        question: "1) Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "2) What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "3) What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "4) What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "5) Which is the most important head in html?",
        a: "h1",
        b: "<h1>",
        c: "h5",
        d: "<h4>",
        correct: "b",
    },
    {
        question: "6) Which is the least important heading in html?",
        a: "h1",
        b: "<h1>",
        c: "<h6>",
        d: "<h7>",
        correct: "c",
    },
    {
        question: "7) which is inline level element?",
        a: "<span>",
        b: "<h1>",
        c: "</h1>",
        d: "<div>",
        correct: "a",
    },
    {
        question: "8) which is block level element?",
        a: "<span>",
        b: "<strong>",
        c: "<address>",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "9) how many components used in box model for CSS?",
        a: "2",
        b: "7",
        c: "4",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "10) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    {
        question: "11) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    
    {
        question: "12) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    
    {
        question: "13) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    
    {
        question: "14) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    
    {
        question: "15) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    
    {
        question: "16) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    
    {
        question: "17) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    
    {
        question: "18) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    {
        question: "19) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    {
        question: "20) which is correct syntax of CSS?",
        a: "{font-size: 1.2em}",
        b: "P[font-size: 1.2em]",
        c: "P{font-size ,1.2em}",
        d: "P{font-size: 1.2em}",
        correct: "d",
    },
    
    
]
    

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
