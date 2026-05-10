const warningMessage = "Тут якийсь будинок...Він може бути небезпечний. Вирішуй сам...";
const alarmMessage = "Реальність розпадається...Тікай!";

const introOverlay = document.getElementById('intro-overlay');
const typewriterElement = document.getElementById('typewriter');
const mansionScene = document.getElementById('mansion-scene');
const speechBoxElement = document.getElementById('speech-text');
const house = document.getElementById('house');
const song = document.getElementById('song');
const warningSpeech = document.getElementById('warning-speech');
const alarmSpeech = document.getElementById('alarm-speech');
const subjectMissingSpeech = document.getElementById('subject-missing');

window.onload = () => {
    typeEffect(speechBoxElement, warningMessage);
    warningSpeech.play();
};

house.addEventListener('click', () => {
    // Додаємо клас анімації
    house.classList.add('active-portal');
    
    alarmSpeech.play();

    // Змінюємо текст
    typeEffect(speechBoxElement, alarmMessage, () => {
        // Через 3 секунди перекидаємо на нову локацію
        setTimeout(() => {
            // переходимо на іншу сторінку
            house.classList.remove('active-portal');
            house.classList.add('hidden');

            document.querySelector('.speech-bubble').classList.add('hidden');
            
            mansionScene.style.backgroundImage = "url('../images/mansion-broken.png')";
        }, 3000);

        setTimeout(() => {
            song.pause();
            mansionScene.style.backgroundImage = 'none';
            introOverlay.classList.add('show-overlay')
            typeEffect(typewriterElement, "Неможливо встановити зв'язок з об'єктом Кадет...");
            subjectMissingSpeech.play();

        }, 10000);
    });   
});