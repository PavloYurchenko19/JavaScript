// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let lenghtStr = (str) => {return str.length};
console.log(lenghtStr('hello world'));
console.log(lenghtStr('lorem ipsum'));
console.log(lenghtStr('javascript is cool'));

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let bigLetter = (str) => {return str.toUpperCase()};
console.log(bigLetter('hello world'));
console.log(bigLetter('lorem ipsum'));
console.log(bigLetter('javascript is cool'));

// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let smallLetter = (str) => {return str.toLowerCase()};
console.log(smallLetter('HELLO WORLD'));
console.log(smallLetter('LOREM IPSUM'));
console.log(smallLetter('JAVASCRIPT IS COOL'));

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   ';
let  s = strDirty.trim();
console.log(s);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let strToArr = 'Каждый охотник желает знать';

let stringToArray = (str) => {return str.split(' ');};
console.log(stringToArray(strToArr));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let strDelete = 'Каждый охотник желает знать';
let delete_charcters = (str, length) => {
    let ret2 = str.substring(0, length);
    let ret = str.slice(0,length);
    console.log(ret);
    console.log(ret2);
};
delete_charcters(strDelete,7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let strUperAndR = "HTML JavaScript PHP";
let insertDash = (str) => {return str.toUpperCase().replaceAll(' ','-');};
console.log(insertDash(strUperAndR));

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let arrSmallLeter = 'приймає рядок як аргумент і перетворює регістр першого символу ';
let funReternSmallToBigFirstLetter = (arr) => {
    let firstLeter = arr[0].toUpperCase();
    let nonfirstleter = arr.substring(1);
    return firstLeter + nonfirstleter
};
console.log(funReternSmallToBigFirstLetter(arrSmallLeter));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let retStrIfFirstLetterBig = (str) => {
    if (str[0] === str[0].toUpperCase()) {
        console.log(str);
    }
};
retStrIfFirstLetterBig('asdasdasd');
retStrIfFirstLetterBig('Asdasdas54654654654d');
retStrIfFirstLetterBig('Fdasdas54654d');