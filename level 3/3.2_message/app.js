'use script';

let btn = document.querySelector('button');
btn.addEventListener('click', clickHandler);

/**
 * Обработчик клика по кнопке btn
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    getMessage(event);
    playAudio(event);
}

/**
 * Функция, которая выводит сообщение
 * @param {MouseEvent} event 
 */
function getMessage(event) {
    let message = document.querySelector('.message');
    let messageHeight = message.clientHeight;
    message.style.transform = `translateY(-${messageHeight + 15}px)`;
}

/**
 * Функция проигрывания аудио
 * @param {MouseEvent} event 
 */
function playAudio(event) {
    let audioEl = new Audio('notification.mp3');
    audioEl.play();
}