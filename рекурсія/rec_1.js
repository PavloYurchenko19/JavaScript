// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.
let a = Math.round(Math.random() * 50);
let b = Math.round(Math.random() * 50);

let recFun = function (a, b) {
console.log(a);

    if (a < b) {
        a++
         recFun(a, b);

    }else if (b < a) {
        b++
        recFun(a, b);
    }
};
recFun(a, b);

// Точная степень двойки
// Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
// let n = Math.round(Math.random() * 100);
// // console.log(n);
// let recPower = function (n) {
//     let num = n / 2;
//     if (num === 1) {
//         console.log("Yes");
//         if (num === 1) {
//             return
//         }
//     }
//     else if (num === 0) {
//         console.log("no")
//         if (num === 0) {
//             return
//         }
//     }
//     recPower(num);
// };
//
// recPower(64)

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
// let result = 0;
// let sumFun = function (num) {
//     let f = 0;
//     if (num > 10) {
//         let lastNum = num % 10;
//         let numM = (num - lastNum) / 10;
//         result += lastNum
//         sumFun(numM);
//         // console.log(result);
//     } else if (num < 10) {
//          result += num ;
//
//     }
//     // console.log(f);
// };
//
//
//
// sumFun(23141);
// console.log(result);

// Цифры числа справа налево
// Дано натуральное число N.
//     Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
//     При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
// Разрешена только рекурсия и целочисленная арифметика.

// let sumFun = function (num) {
//     let result = 0;
//     let f = 0;
//     if (num > 10) {
//         let lastNum = num % 10;
//         let numM = (num - lastNum) / 10;
//
//         return numM
//         // console.log(result);
//     } else if (num < 10) {
//         let finisch = num + f;
//         return  num
//
//     }
//     console.log(f);
//     document.write(result);
//     console.log(result);
//
//
// };
// console.log(sumFun(2314));

// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
//
// let recPalindrom = function (word) {
//     let length = word.length;
//     if (word[0] === word[length-1] && length !== 1 && typeof word[0] !== "undefined") {
//
//         let slice = word.slice(1);
//         let newWord = slice.split("").reverse().join("").slice(1);
//         recPalindrom(newWord);
//
//     } else if (length === 0 ) {
//         console.log("Yes, This word is palindrome");
//     } else {
//         console.log("No,This word is not palindrome");
//     }
// };
// recPalindrom("кит на морі романтик  китнамор іром ан тик");

// Вывести нечетные числа последовательности
// Дана последовательность натуральных чисел (одно число в строке), завершающаяся числом 0. Выведите все нечетные числа из этой последовательности, сохраняя их порядок.
//     В этой задаче нельзя использовать глобальные переменные и передавать какие-либо параметры в рекурсивную функцию. Функция получает данны

// let recOddNumbers =function (num) {
//
//     if ( num[0] % 2 === 0 && num.length >= 1  ){
//             let newNum = num.slice(1);
//             // console.log(num[0]);
//             recOddNumbers(newNum)
//     }else  {
//         if (num.length !== 0){
//             let newNum = num.slice(1);
//             recOddNumbers(newNum)
//             console.log(num[0]);
//         }else {
//             return
//         }
//     }
// }
// recOddNumbers("1234567890");
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
// let onef =  0;
// let oneNumber = function (one) {
//     if (+one[0] === 1 ) {
//         let newStringNum = one.slice(1);
//         onef++
//         oneNumber(newStringNum);
//     }else if (+one[0] + +one[1] !== 0) {
//         let newStringNum = one.slice(1);
//         oneNumber(newStringNum);
//     }else {
//     }
// }
// oneNumber("5488187110705114251232140055545465446");
// console.log(onef);
// Заданная сумма цифр
// Даны натуральные числа k и s. Определите, сколько существует k-значных натуральных чисел, сумма цифр которых равна s. Запись натурального числа не может начинаться с цифры 0.
// В этой задаче можно использовать цикл для перебора всех цифр, стоящих на какой-либо позиции.

// let s = 9;
//
// let k = 0;
//
// function num(...num) {
//     for (let i = 0; i < num.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (num[i] + num[j] === s) {
//                 console.log(num[i]);
//                 console.log(num[j]);
//                 // console.log(num[i] + num[j]);
//                 k++
//                 console.log("yes");
//             }
//         }
//     }
// }
//
// num(1, 2, 3, 4, 5, 6,4, 7, 9, 1, 6, 9, 2);
// console.log(k);

// Без двух нулей
// Даны числа a и b. Определите, сколько существует
// последовательностей из a нулей и b единиц, в которых никакие два нуля не стоят рядом.

//
// let recF = (a, b) => {
//     if (a > b + 1) {
//         return 0;
//     }
//     if (a === 0 || b === 0) {
//         return 1
//     }
//     return recF(a, b - 1) + recF(a - 1, b - 1);
//
//
// };
// console.log(recF(2, 3));;