'use strict';
/**
 * Функция сложения 2 переменных
 */
function addNumbers(a, b) {
    return a + b;
}

/**
 * Функция вычитания 2 переменных
 */
function substractNumbers(a, b) {
    return a - b;
}

/**
 * Функция умножения 2 переменных
 */
function multiplyNumbers(a, b) {
    return a * b;
}
/**
 * Функция деления 2 переменных
 */
function splitNumbers(a, b) {
    return a / b;
}

/**
 * Функция, позволяющая совершить выбранное математическое действие
 * @param {number} arg1 значение аргумента 1
 * @param {*number} arg2 значение аргумента 2
 * @param {*string} operation строка с названием действия
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addNumbers(arg1, arg2);
        case "-":
            return substractNumbers(arg1, arg2);
        case "*":
            return multiplyNumbers(arg1, arg2);
        case "/":
            return splitNumbers(arg1, arg2);
    }
}
let arg1 = +prompt("Ввведите первое число");
let arg2 = +prompt("Введите второе число");
let operation = prompt("Выберите математическое действие, которое вас интересует и введите соотвествующий знак: +, -, * или /");
if (arg2 === 0 && operation === "/") {
    alert("На ноль делить нельзя");
} else {
    let result = +mathOperation(arg1, arg2, operation);
    let check = isNaN(result);
    if (check == false) {
        alert("Ваш результат " + result);
    } else {
        alert("Необходимо было ввести один из предлагаемых знаков.");
    }
}

