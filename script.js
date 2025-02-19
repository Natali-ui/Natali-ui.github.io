const text = "Дюкова Наталья";
const typedTextElement = document.getElementById("typed-text");
let index = 0;

function typeText() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();