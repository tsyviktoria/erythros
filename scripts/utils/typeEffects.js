// Функція друку тексту
function typeEffect(element, text, callback) {
    let i = 0;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 40);
        } else if (callback) {
            callback();
        }
    }
    type();
}
