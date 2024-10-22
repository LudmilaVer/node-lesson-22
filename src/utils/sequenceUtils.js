"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = isPrime;
exports.generateFibonacci = generateFibonacci;
// Указываем тип массива как number[]
const primes = [];
// Функция для проверки, является ли число простым
function isPrime(num) {
    // Проверяем, является ли num простым
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    for (const prime of primes) {
        if (num % prime === 0) {
            return false; // Если делится на простой, то не простое
        }
    }
    // Добавляем num в массив простых чисел
    primes.push(num);
    return true;
}
// Функция для генерации последовательности Фибоначчи
function generateFibonacci(n) {
    const fib = [0, 1]; // Начальные значения
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Генерация следующего числа
    }
    return fib.slice(0, n); // Возвращаем первые n чисел Фибоначчи
}
// Пример использования функции isPrime
console.log(isPrime(7)); // true
console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
