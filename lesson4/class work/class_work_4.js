
// - створити функцію яка приймає три числа та виводить найменьше.
function minNum(a, b, c) {
    if (a<b && a<c){
        document.write(a)
    }else    if (b<c && b<a){
        document.write(b)
    }
    else    if (c<b && c<a){
        document.write(c)
    }

}
// створити функцію яка приймає три числа та виводить найбільше.
document.write(`<div>`);
minNum(4,5,2)
document.write(`</div>`);
function maxNum(a, b, c) {
    if (a>b && a>c){
        document.write(a)
    }else    if (b>c && b>a){
        document.write(b)
    }
    else    if (c>b && c>a){
        document.write(c)
    }

}
document.write(`<div>`);
maxNum(111,2,21)
document.write(`</div>`);

// - створити функцію яка повертає найбільше число з масиву
let numArr = [11, 22, 44, 55,   77, 88, 99, 1];
function maxNumArr(arr) {
    let maxNumAr = arr[0];
    for (const maxNumElement of arr) {
        if (maxNumElement > maxNumAr){
            maxNumAr = maxNumElement
        }

    }
    return maxNumAr;
}
document.write(`<div>`);
document.write(`Найбільше число це ${maxNumArr(numArr)}`)
document.write(`</div>`);
// - створити функцію яка повертає найменьше число з масиву
function minNumArr(arr) {
    let minNumAr = arr[0];
    for (const minNumElement of arr) {
        if (minNumElement < minNumAr){
            minNumAr = minNumElement
        }

    }
    return minNumAr;
}
document.write(`<div>`);
document.write(`Найменше число це ${minNumArr(numArr)}`)
document.write(`</div>`);

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumAddInArr = +'';
function addNumInArr(arr) {
    for (i = 0; i <= arr.length - 1; i++) {
        sumAddInArr += arr[i]
    }


}
addNumInArr(numArr);
console.log(sumAddInArr);

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arithmetic = +'';
function arithmeticArr(arr) {
    for (let i = 0; i <= arr.length-1 ; i++) {
        arithmetic += arr[i] ;

    }
    arithmetic /= i;
};
arithmeticArr(numArr);
console.log(arithmetic);

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let retMaxNam = '';
function maxMinArr() {
    let muxNumIn= arguments[0];

    for (const argument of arguments) {
        if (argument > muxNumIn) {
            muxNumIn = argument;
        }
    }
    document.write("Max num in arr ----" + muxNumIn);
    let minInArr = arguments[0];

    for (const minNumInArr of arguments){
        if (minNumInArr < minInArr){
            minInArr = minNumInArr;
        }
        return minInArr;

    }

}


let x = maxMinArr(11, 22, 33, 44, 55, 66, 77, 888, 99);
document.write(`<div>`);
document.write("Min number in array ----"+x);
document.write(`</div>`);

// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let emptyArrEnterRandom = [];

function addInArrRandomNum(arr) {
    for (let i = 0; i < 20; i++) {
        r = Math.round(Math.random()*100)
        arr.push(r) ;
    }
    return arr;
}
let result = addInArrRandomNum(emptyArrEnterRandom);
document.write(`<div>`);
document.write(result)
document.write(`</div>`);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let emptyArrEnterRandom1 = [];

function addInArrRandomNum1(arr , limit) {
    for (let i = 0; i < 20; i++) {
        r = Math.round(Math.random()*limit)
        arr.push(r) ;
    }
    return arr;
}
let result1 = addInArrRandomNum1(emptyArrEnterRandom1 , 10);
document.write(`<div>`);
document.write(result1)
document.write(`</div>`);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrNotRevers = [1, 2, 3];
let emptyar = [];
function arrRevers(arr,empty) {
    for (let i = arr.length-1; i >=0; i--) {

        empty.push(arr[i]);
    }
    return empty;


}
let arrR = arrRevers(arrNotRevers,emptyar);
console.log(arrR);