const introText = "Прийом. Чуєте мене? Ви щойно перетнули горизонт подій сектора Erythros. Забудьте все, що ви знали про фізику: тут гравітація — це лише примха, а природа має власний розум. Я буду вашим провідником у цьому червоному пеклі... Ми починаємо занурення у Виворіт. Ласкаво просимо додому, кадет.";

const diveBtn = document.getElementById('dive-btn');
const heroContent = document.getElementById('hero-content');
const introOverlay = document.getElementById('intro-overlay');
const typewriterElement = document.getElementById('typewriter');
const confirmBtn = document.getElementById('confirm-entry');
const introAudio = document.getElementById('intro');
const radioNoise = document.getElementById('radio-noise');
const erythrosEntrance = document.getElementById('erythros-entrance');

introAudio.volume = 0.25;
radioNoise.volume = 0.15;

diveBtn.addEventListener('click', () => {
    heroContent.classList.add('fade-out');

    setTimeout(() => {
        introOverlay.classList.add('show-overlay');
        radioNoise.play();
        erythrosEntrance.play();
        typeEffect(typewriterElement, introText, () => {
            confirmBtn.classList.remove('hidden'); // Показуємо кнопку в кінці
        });
        
        
        //startTypewriter();
    }, 1000);
});

confirmBtn.addEventListener('click', () => {
    window.location.href = "forest.html"; // перехід
});