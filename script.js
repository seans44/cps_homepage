const buttons = document.querySelectorAll('.tab-button');

// Найдём первую видимую кнопку
const firstVisibleButton = Array.from(buttons).find(btn => {
    return btn.offsetParent !== null;
});

if (firstVisibleButton) {
    firstVisibleButton.classList.add('active');
}

// Обработчик кликов, как у тебя было
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});