// створити функцію яка обчислює та повертає площу прямокутника висотою

// let sqRectangle = (a, b) => {return a * b;};
// console.log(sqRectangle(12, 10));

//- створити функцію яка обчислює та повертає площу кола

const PI =  3.14;
let sqCircle = (PI, r) => {
    return PI * (r**2)
};
document.write(sqCircle(PI, 7));


// створити функцію яка обчислює та повертає площу циліндру
//
// let sqCylinder = (PI, r, h) => {
//     return 2 * PI * r * h;
// };
// document.write(`<div>`);
// document.write(`Площа циліндра - ${sqCylinder(PI, 5, 5)}`);
// document.write(`</div>`);


////- створити функцію яка приймає масив та виводить кожен його елемент

// let firstArr = [11, 22, 33, 44, 55, 66, 77, 88, 99 ];
// let acceptArr = (arr) => {
//     // for (let i = 0; i < arr.length ; i++) {
//     //             document.write(`<div>`);
//     //             document.write(arr[i]);
//     //             document.write(`</div>`);
//     // }
//
//     // АБО ТАК
//
//     for (const arrElement of arr) {
//         document.write(`<div>`);
//         document.write(arrElement);
//         document.write(`</div>`);
//     }
//
// };
// acceptArr(firstArr);

// створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let createP = (p) => {document.write(p);};
//
// createP('asdajshdkljahsdlkjahsflkjh 554asj')
//  

// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ulFun = (text) => {
//     document.write("<ul>");
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//     document.write('</ul>');
// }
// ulFun(1111111)

// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ulFun1 = (text,amount) => {
//     document.write("<ul>");
//     for (let i = 0; i <amount ; i++) {
//
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write('</ul>');
// }
// ulFun1('sadassad',10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1, 'a', true, 'a' , 5 , false]
// let accArr = (arr) => {
//     document.write(`<ul>`);
//     for (const arrItem of arr){
//         document.write(`<li>`);
//         document.write(arrItem);
//         document.write(`</li>`);
//     }
//     document.write(`</ul>`);
// };
// accArr(array)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arrList = [{id: 1, name:"Pavlo",age: 19},{id: 2, name:"Petro",age: 20},{id: 3, name:"Pavlina",age: 11}];
// let accArrName = (arr) => {
//     for (const arrKey of arr) {
//         document.write(`<div>`);
//         document.write(`id --${arrKey.id}  name ${arrKey.name} age  ${arrKey.age} `)
//         document.write(`</div>`);
//
//     }
// };
// accArrName(arrList);