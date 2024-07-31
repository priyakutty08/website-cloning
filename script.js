
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
        question: "11) Which HTML tag is used to create a hyperlink?",
        a: "<a>",
        b: "<link>",
        c: "<href>",
        d: "<url>",
        correct: "a",
    },
    
    {
        question: "12) What is the correct HTML element for inserting a line break?",
        a: "<lb>",
        b: "<break>",
        c: "<br>",
        d: "<newline>",
        correct: "d",
    },
    
    {
        question: "13) How can you apply a CSS style to an HTML element with the class (example) ?",
        a: ".example { }",
        b: "#example { }",
        c: "example { }",
        d: "*example { }",
        correct: "a",
    },
    
    {
        question: "14) Which property is used to change the background color of an element in CSS?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "background",
        correct: "c",
    },
    
    {
        question: "15) How can you make text bold in CSS?",
        a: "font-weight: bold;",
        b: "text-weight: bold;",
        c: "font-style: bold;",
        d: "text-style: bold;",
        correct: "a",
    },
    
    {
        question: "16) What will the following code output? 'console.log(typeof 42);'?",
        a: "number",
        b: "integer",
        c: "float",
        d: "42",
        correct: "a",
    },
    
    {
        question: "17) Which method is used to write data to the browser console in JavaScript?",
        a: "console.log()",
        b: "print()",
        c: "document.write()",
        d: "alert()",
        correct: "a",
    },
    
    {
        question: "18) How do you declare a variable in JavaScript",
        a: "var variableName;",
        b: "variable variableName;",
        c: "declare variableName;",
        d: "let variableName;",
        correct: "a",
    },
    {
        question: "19) What attribute is used to provide an alternative text for an image in HTML?",
        a: "src",
        b: "title",
        c: "alt",
        d: "longdesc",
        correct: "c",
    },
    {
        question: "20) What is the default display property of a <div> element?",
        a: "inline",
        b: "block",
        c: "flex",
        d: "none",
        correct: "b",
    },
    {
        question: "21) What CSS property is used to change the font size of text?",
        a: "text-size",
        b: "font-size",
        c: "text-font",
        d: "font-style",
        correct: "b",
    },
    {
        question: "22) How can you center a block element horizontally using CSS?",
        a: "text-align: center;",
        b: "margin: auto;",
        c: "align: center;",
        d: "center: block;",
        correct: "b",
    },
    {
        question: "23) What CSS property controls the space between the border and the content of an element?",
        a: "padding",
        b: "margin",
        c: "border-spacing",
        d: "outline",
        correct: "a",
    },
    {
        question: "24) How do you create a function in JavaScript?",
        a: "function myFunction() { }",
        b: "create function myFunction() { }",
        c: "func myFunction() { }",
        d: "function: myFunction() { }",
        correct: "a",
    },
   
    {
        question: "25) How do you check if a variable 'x' is an array in JavaScript?",
        a: "Array.isArray(x)",
        b: "x.isArray()",
        c: "typeof x === 'array'",
        d: "x instanceof Array",
        correct: "a",
    },
    {
        question: "26) Which JavaScript keyword is used to define a constant variable?",
        a: "const",
        b: "let",
        c: "var",
        d: "static",
        correct: "a",
    },
    {
        question: "27)  What will the following code output? 'console.log(5 + '5');'?",
        a: "10",
        b: "55",
        c: "TypeError",
        d: "undefined",
        correct: "b",
    },
    {
        question: "28) Which HTML tag is used to include JavaScript in a web page?",
        a: "<script>",
        b: "<js>",
        c: "<javascript>",
        d: "<code>",
        correct: "a",
    },
    {
        question: "29) How do you create a numbered list in HTML?",
        a: "<ul>",
        b: "<list>",
        c: "<list>",
        d: "<dl>",
        correct: "c",
    },
    {
        question: "30) What is the correct HTML element to define important text?",
        a: "<strong>",
        b: "<important>",
        c: "<b>",
        d: "<em>",
        correct: "a",
    },
    {
        question: "31) Which attribute is used to specify the destination URL for a link?",
        a: "href",
        b: "src",
        c: "link",
        d: "url",
        correct: "a",
    },
    {
        question: "32) How do you apply a CSS style to all <p> elements in a document?",
        a: "p { }",
        b: "paragraph { }",
        c: "*p { }",
        d: "#p { }",
        correct: "a",
    },
    {
        question: "33) Which property is used to control the visibility of an element in CSS?",
        a: "visibility",
        b: "display",
        c: "opacity",
        d: "visibility: hidden;",
        correct: "a",
    },
    {
        question: "34)  How can you apply a CSS style to an element with the id 'header'?",
        a: ".header { }",
        b: "header { }",
        c: "#header { }",
        d: "*header { }",
        correct: "c",
    },
    {
        question: "35) What is the purpose of the z-index property in CSS?",
        a: "To define the stack order of positioned elements",
        b: "To set the zoom level of an element",
        c: "To specify the font size of an element",
        d: "To control the opacity of an element",
        correct: "a",
    },
    {
        question: "36) How do you comment a single line in JavaScript?",
        a: "<!-- This is a comment -->",
        b: "/ This is a comment",
        c: "/* This is a comment */",
        d: "# This is a comment",
        correct: "b",
    },
    {
        question: "37) What will the following code return? Boolean('false')",
        a: "false",
        b: "true",
        c: "undefined",
        d: "NaN",
        correct: "b",
    },
    {
        question: "38) How do you create an array in JavaScript?",
        a: "var arr = [1, 2, 3];",
        b: "var arr = (1, 2, 3);",
        c: "var arr = {1, 2, 3};",
        d: "var arr = array(1, 2, 3);",
        correct: "a",
    },
    {
        question: "39) What does the alert() function do in JavaScript?",
        a: "Sends a message to the server",
        b: "Logs a message to the console",
        c: "Changes the text of an HTML element",
        d: "Displays a message in a pop-up dialog box",
        correct: "d",
    },
    {
        question: "40) Which operator is used to compare both value and type in JavaScript?",
        a: "==",
        b: "===",
        c: "!=",
        d: "!==",
        correct: "b",
    },
    {
        question: "41) What is the purpose of the data- attribute in HTML5?",
        a: "To apply CSS styles",
        b: "To create unique identifiers",
        c: "To link JavaScript files",
        d: "To store custom data for an element",
        correct: "d",
    },
    {
        question: "42) How can you add a comment in CSS??",
        a: "/* This is a comment */",
        b: "<!-- This is a comment -->",
        c: "// This is a comment",
        d: "# This is a comment",
        correct: "a",
    },
    {
        question: "43) What does event.preventDefault() do in JavaScript??",
        a: "Logs the event object to the console",
        b: "Stops the event from bubbling up the DOM tree",
        c: "Prevents the default action of an event",
        d: "Cancels the current animation frame",
        correct: "c",
    },
    {
        question: "44) Which of the following CSS properties would you use to add space between the content and the border of an element?",
        a: "margin",
        b: "padding",
        c: "border-spacing",
        d: "outline",
        correct: "b",
    },
    {
        question: "45) How do you get the value of an input element with the id username in JavaScript?",
        a: "document.getElementById('username').value",
        b: "document.getElementById('username').value",
        c: "document.getElementById('username').innerHTML",
        d: "document.getElementById('username').textContent",
        correct: "a",
    },
    {
        question: "46) What is the result of the following JavaScript expression: null == undefined?",
        a: "false",
        b: "true",
        c: "null",
        d: "undefined",
        correct: "b",
    },
    {
        question: "47) Which property is used to control the text alignment in CSS?",
        a: "text-align",
        b: "text-position",
        c: "align-text",
        d: "text-aligning",
        correct: "a",
    },
    {
        question: "48) What is the default value of the position property in CSS?",
        a: "absolute",
        b: "relative",
        c: "fixed",
        d: "static",
        correct: "d",
    },
    {
        question: "49) How do you define a form in HTML?",
        a: "<input>",
        b: "<field>",
        c: "<form>",
        d: "<submit>",
        correct: "c",
    },
    {
        question: "50) Which HTML tag is used to create a table?",
        a: "<table>",
        b: "<tab>",
        c: "<tbl>",
        d: "<tr>",
        correct: "a",
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
