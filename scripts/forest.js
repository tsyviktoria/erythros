const welcomeMsg = "Вітаю, досліднику. Ми щойно увійшли в атмосферу Erythros. Готуйся, зараз почнеться найцікавіше... Перехід у червоний сектор ініційовано.";
const forestMsg = "Ми на місці... Зачекай! Прийом! Аномалія лісу надто потужна! Зв'язок розривається! Мені потрібна твоя допомога!";
const warningMsg = "Фух... Зв'язок стабільний. Але слухай уважно: на цій планеті істоти можуть проникати у твою свідомість. Єдиний спосіб врятуватись — музика. Візьми ці навушники, це твій єдиний шанс.";
const choiseRejectMessage = "Я тебе попереджав, досліднику... але ти мене не послухав. Наслідки будуть на твоїй совісті. Рушаймо, якщо наважишся.";
const choiseConfirmMessage = "Розумний вибір. Вмикаю захисний протокол 'Kate Bush'. Тепер ми можемо йти далі.";


const welcomeElement = document.getElementById('welcome-text');
const forestElement = document.getElementById('forest-text');
const spaceScreen = document.getElementById('space-screen');
const forestScreen = document.getElementById('forest-screen');
const glitchLayer = document.getElementById('glitch-overlay');
const repairBox = document.getElementById('repair-box');
const headphonesBox = document.getElementById('headphones-choice');
const continueBtn = document.getElementById('continue-btn');
const kateBushAudio = document.getElementById('kate-bush-song');
const radioNoise = document.getElementById('radio-noise');
const redSectorEntranceSpeachAudio = document.getElementById('red-sector-entrance');
const signalRepairSpechAudio = document.getElementById('signal-repair-request');
const warningSpeachAudio = document.getElementById('warning-speach');
const choiseRefuseAudio = document.getElementById('choise-refuse');
const choiseConfirmAudio = document.getElementById('choise-confirm');


radioNoise.volume = 0.15;

let clickCount = 0;
let playerHasHeadphones = false;

// 1. Автоматичний старт при завантаженні сторінки
window.onload = () => {
    redSectorEntranceSpeachAudio.play();
    typeEffect(welcomeElement, welcomeMsg, () => {
        // Чекаємо 2 секунди після привітання і переносимо в ліс автоматично
        setTimeout(goToForest, 2000);
    });
};

function goToForest() {
    spaceScreen.style.opacity = '0';
    setTimeout(() => {
        spaceScreen.classList.add('hidden');
        forestScreen.classList.remove('hidden');
        
        // Починаємо розмову в лісі
        signalRepairSpechAudio.play();
        typeEffect(forestElement, forestMsg, () => {
            // Вмикаємо перешкоди і гру
            glitchLayer.classList.add('glitch-active');
            repairBox.classList.remove('hidden');
        });
    }, 1500);
}


// // Оновлюємо логіку після ремонту
document.getElementById('repair-btn').addEventListener('click', () => {
   clickCount++;
    document.getElementById('count').innerText = clickCount;
    if (clickCount === 5) {
        document.getElementById('glitch-overlay').classList.remove('glitch-active');
        repairBox.classList.add('hidden');
        
        radioNoise.pause();
        radioNoise.currentTime = 0;

        // Космонавт попереджає про розум
        warningSpeachAudio.play();
        typeEffect(forestElement, warningMsg, () => {
            setTimeout(() => {
                headphonesBox.classList.remove('hidden');
            }, 1000);
        });
    }
});

function handleHeadphones(choice) {
    headphonesBox.classList.add('hidden');
    playerHasHeadphones = choice;

    if (choice) {
        choiseConfirmAudio.play();
        typeEffect(forestElement, choiseConfirmMessage, () => {
            // Вмикаємо музику через 2 секунди
            setTimeout(() => {
                kateBushAudio.play();
                choiseConfirmAudio.pause();
                continueBtn.classList.remove('hidden');
            }, 2000);
        });

    } else {
        choiseRefuseAudio.play();
        typeEffect(forestElement, choiseRejectMessage, () => {
            continueBtn.classList.remove('hidden');
        });
    }
}

// // Кнопка продовження шляху
continueBtn.addEventListener('click', () => {
    if (!playerHasHeadphones) {
        // Логіка для Векни (перезавантаження)
        window.location.href = "/upsidedown.html"
    } else {
        //alert("Ви прямуєте глибше в ліс під звуки Running Up That Hill...");
        // Тут перехід до наступної сцени
        window.location.href = "/castle.html"
    }
});