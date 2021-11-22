
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNum = (a, b, c) => {
        if (a<b && a<c){
            document.write(a)
        }else    if (b<c && b<a){
            document.write(b)
        }
        else    if (c<b && c<a){
            document.write(c)
        }


};
document.write(`<div>`);
document.write(`Min num -`);
minNum(1,3,5)
document.write(`</div>`);
// створити функцію яка приймає три числа та виводить найбільше.
let maxNum = (a, b, c) => {


    if (a>b && a>c){

        document.write(a)
    }else    if (b>c && b>a){
        document.write(b)
    }
    else    if (c>b && c>a){
        document.write(c)


    }
};
document.write(`<div>`);
document.write(`Max num -`);
maxNum(1,5,7)
document.write(`</div>`);

// створити функцію яка повертає найбільше число з масиву

let numArr = [11, 22, 44, 55,   77, 88, 99, 1];
let maxNumArr = (arr) => {
    let maxNumAr = arr[0];
    for (const maxNumElement of arr) {
        if (maxNumElement > maxNumAr){
            maxNumAr = maxNumElement
        }

    }
    return maxNumAr;
};
document.write(`<div>`);
document.write(`Найбільше число це ${maxNumArr(numArr)}`)
document.write(`</div>`);

// - створити функцію яка повертає найменьше число з масиву

let minNumArr = (arr) => {
    let minNumAr = arr[0];
    for (const minNumElement of arr) {
        if (minNumElement < minNumAr){
            minNumAr = minNumElement
        }

    }
    return minNumAr;
};
document.write(`<div>`);
document.write(`Найменше число це ${minNumArr(numArr)}`)
document.write(`</div>`);

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumAddInArr = 0;
let addArr = (arr) => {
    for (i = 0; i < arr.length ; i++) {
        sumAddInArr += arr[i]
    }
    return sumAddInArr;
};
document.write(`<div>`);
document.write(addArr(numArr));
document.write(`</div>`);

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arithmetic = 0;
let arithmeticArr = (arr) => {
    for (let i = 0; i <arr.length ; i++) {
        arithmetic += arr[i];

    }
    return arithmetic / 2;
};
document.write(`<div>`);
document.write(arithmeticArr(numArr));
document.write(`</div>`);

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


let maxMinArr = (...someNum) => {
    let muxNumIn = someNum[0];

    for (const argument of someNum) {
        if (argument > muxNumIn) {
            muxNumIn = argument;
        }
    }
    document.write("Max num in arr ----" + muxNumIn);
    let minInArr = someNum[0];

    for (const minNumInArr of someNum){
        if (minNumInArr < minInArr){
            minInArr = minNumInArr;
        }
    }

    return minInArr;

}


let x = maxMinArr(111, 22, 33, 5, 44, 55, 66, 77, 8884487, 99);
document.write(`<div>`);
document.write("Min number in array ----" + x);
document.write(`</div>`);



// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let EmptyArr = [];

let acceptFun = (arr) => {
    for (let i = 0; i < 10 ; i++) {
        r = Math.round(Math.random()*100)
        arr.push(r) ;
    }
    return arr;
};

let somEmptyArr = acceptFun(EmptyArr);
document.write(somEmptyArr);


// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let EmptyArr1 = [];

let acceptFun1 = (arr,limit) => {
    for (let i = 0; i < 10 ; i++) {
        r = Math.round(Math.random()*limit+100)
        arr.push(r) ;
    }
    return arr;
};

let somEmptyArr1 = acceptFun1(EmptyArr1,250);
document.write(`<div>`);
document.write(somEmptyArr1);
document.write(`</div>`);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let revArr = [1, 2, 3];
let emp = [];
let revFun = (arr, emptA) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        emp .push(arr[i])
    }

};
revFun(revArr);
document.write(`<div>`);
document.write(emp);
document.write(`</div>`);