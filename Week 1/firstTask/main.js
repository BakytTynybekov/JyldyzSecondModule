// 1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере

let message = "Hello";
document.write(message + '<hr/>');

// 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение

let msg = "Hello World";
document.write('<br/>' + msg)
msg = 'I have changed the message'
document.write('<br/>' + msg + '<hr/>')


// 3 Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.
let myName = "Name: Bakyt";
let myEmail = 'Email: bakyt.tynybekov.ss@gmail.com';

document.write('<br/>' + myName + '<br/>' + myEmail + '<hr/>' );

// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

// let souvenirs = prompt("How many souvenirs did you bought?")

// let toys = prompt("How many toys did you bought?")

// document.write(`Total weight of your purchases: ${((souvenirs * 75) + (toys * 112))/1000} kg `)



// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций:    
// - сумма a и b;     
// - разница между a и b;
// - произведение a и b; 
// - частное от деления a на b; 
// - остаток от деления a на b;  
// - результат возведения числа a в степень b

let a = +prompt("Type any number for a value")

let b = +prompt("Type any number for b value")

document.write(`
сумма a и b: ${a + b} <br/>
разница между a и b: ${a - b} <br/>
произведение a и b: ${a * b} <br/>
частное от деления a и b: ${a / b} <br/>
остаток от деления a и b: ${a % b} <br/>
результат возведения числа a в степень b: ${a ** b} <br/>
`)