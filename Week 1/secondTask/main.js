// 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**

let a = 'ddd@bbb@ccc';
let b = a.replace(/@/g, '!');

console.log(b)

// 2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.

let jsUpper = 'js';
console.log(jsUpper.toUpperCase())

//3 Дана строка 'JS'. Сделайте из нее строку 'js'.

let jsLower = 'JS';
console.log(jsLower.toLowerCase())

// 4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.

let string = 'I am a hero!';

console.log(string.length)

// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
// Пример: "Номер вашей карты: **********1245"

let card = prompt('Номер вашей карты?');

let lastNumbers = card.slice(-4);
let anonPart = card.slice(0, -4).split('');

let anonConvert = anonPart.map(x => {
  return '*'
})

let result = anonConvert.join('') + lastNumbers;

console.log(result )

