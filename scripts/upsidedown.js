const questions = [
    {
        q: "Скільки ударів годинника ти чуєш перед тим, як я приходжу за тобою?",
        options: ["3", "4", "11", "12"],
        correct: 1 // Індекс правильної відповіді (4)
    },
    {
        q: "Я був першим. Я був початком. Під яким номером мене знали в лабораторії?",
        options: ["008", "010", "001", "011"],
        correct: 2
    },
    {
        q: "Тільки один звук може розірвати цей транс і повернути тебе до світла. Яка пісня врятувала Макс Мейфілд з моїх обіймів?",
        options: ["Should I stay or should I go", "Running up that hill", "Every Breathe you take", "Master of Puppets"],
        correct: 1
    },
    {
        q: "Пам’ять — це важка ноша. Хто грав на гітарі в самому серці Зворотного боку, щоб відволікти моїх демокажанів?",
        options: [" Dustin Henderson", "Steve Harrington", "Mike Wheeler", "Eddie Munson"],
        correct: 3
    },
];

let currentQ = 0;
const sceneBox = document.getElementById('vecna-scene');
const speechElement = document.getElementById('speech-text');
const questionBox = document.getElementById('question-box');
const optionsContainer = document.getElementById('options-container');
const continueBtn = document.getElementById('continue-btn');
const clockAudio =  document.getElementById('clock');
const screamAudio = document.getElementById('scream');
const vecnaVoice1 = document.getElementById('vecna-voice-1');
const vecnaVoice2 = document.getElementById('vecna-voice-2');


// Початок сцени: Векна говорить першим
window.onload = () => {
    setTimeout(() => {
        startQuiz();
    }, 2000);
};

function startQuiz() {
    vecnaVoice1.play();
    typeEffect(speechElement, "Ти не можеш втекти від минулого...", () => {
        questionBox.classList.remove('hidden');
         loadQuestion();
    });   
}

function loadQuestion() {
    const data = questions[currentQ];
    document.getElementById('question-text').innerText = data.q;
    optionsContainer.innerHTML = "";

    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQ].correct) {
        currentQ++;
        if (currentQ < questions.length) {
            loadQuestion();
        } else {
            vecnaVoice2.play();
            typeEffect(speechElement, "Цього разу тобі пощастило... Біжи!", () => {
                questionBox.classList.add('hidden');

                // Показати кнопку Далі - перехід до фіналу
                clockAudio.pause();
                continueBtn.classList.remove('hidden');                 
            });
        }
    } else {
        // Помилка: Векна захоплює розум
        speechElement.innerHTML = "ТВІЙ ЧАС ВИЧЕРПАНО!";
        sceneBox.style.backgroundImage = 'none';
        document.body.style.backgroundColor = "#ff0000";
        
        clockAudio.pause();
        screamAudio.play();
        
        questionBox.innerHTML = "<h2 style='color:white'>ВЕКНА ЗАХОПИВ ТВІЙ РОЗУМ</h2>";
        
        setTimeout(() => {
            // Смерть головного героя - перехід на початок
            window.location.href = "index.html"; 
        }, 3000);
    }
}

// // Кнопка продовження шляху
continueBtn.addEventListener('click', () => {
    window.location.href = "mansion.html"
});