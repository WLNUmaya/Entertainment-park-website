const quizData = [
    
    
    { 
        question:"What is the world largest indoor water park? ",
        a:"Beach park-Brazil",
        b:"Siam park-Spain",
        c:"Tropical island resort-Germany",
        d:"West side water park-Australia",
        correct:"c"
    },

    { 
        question:"What is the largest arcade in the world",
        a:"Joypolis",
        b:"Club-sega",
        c:"Sega republic",
        d:"Funspot Laconia",
        correct:"d"
    },

    { 
        question:"where funspot located?",
        a:"Japan",
        b:"USA",
        c:"Dubai",
        d:"Australia",
        correct:"b"
        },

    { 
        question :"which year VR games started?",
        a:"1980",
        b:"1990",
        c:"1979",
        d:"1960",
        correct:"a"
    },

    { 
        question:"who invented VR games?",
        a:"Ralph Baer",
        b:"Ivan Sutherland",
        c:"Douglas Engelbart",
        d:"Nick Holonyak",
        correct:"b"
    },

    { 
        question:"What is the first VR game?",
        a:"Beat Saber",
        b:"Superhot VR",
        c:"Sword of Damocles",
        d:"Half-Life",
        correct:"c"
    },

    {
        question:"What is the meaning of TPS in game shooting?",
        a:"Third person shooter",
        b:"Boomer Shooter",
        c:"Tractical shooter",
        d:"Looter shooter",
        correct:"a"
    },

    {
        question:"which one is the real VR game?",
        a:"Beat Saber",
        b:"Superhot VR",
        c:"Sword of Damocles",
        d:"Half-Life",
        correct:"d"
        },

   {
        question:"What is the former name of Funspot",
        a:"Double dragon",
        b:"Weirs sport cente",
        c:"Donkey kong",
        d:"Frogger",
        correct:"b"
   },

   {
        question:"Which one is the VR headset equipment?",
        a:"Oculus Quest",
        b:"Controller",
        c:"mouse",
        d:"none of the above",
        correct:"a"
}

    
];


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