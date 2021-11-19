// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
let addItem = '';
function mixArgumet() {
    for (const argument of arguments) {

        if (arguments.length <=1 ){
            document.write(argument);
        }else if (arguments.length >= 2){
            addItem = arguments[0] + arguments[1] ;
        }
        return addItem;
    }

}

let show = mixArgumet(755);
document.write(`<div>`);
document.write(show);
document.write(`</div>`);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];
let arr3 = [];
function addArr(arr1, arr2, emptyArr) {
    for (const arr1Key in arr1) {
        let index = arr1Key;
        for ( let arr2Key in arr2){
            let index2 = arr2Key;
            if (index === index2){
                // emptyArr += arr1[arr1Key] + arr2[arr2Key];
                emptyArr.push( arr1[arr1Key] + arr2[arr2Key]);

            }
        }
    }

    document.write(emptyArr);


}

addArr(arr1, arr2, arr3);



// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrObject = [ {name: 'Pavlo', age: 19},{model:'BMW'}];
let arrEmpty = [];
function returnArr(arr,empty) {
    for (const arrElement of arr) {
        empty.push(Object.keys(arrElement));
    }



    return empty;

}
let objecktArr = returnArr(arrObject,arrEmpty);
document.write(`<div>`);
document.write(objecktArr);
document.write(`</div>`);
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let objArr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let emptArr2 = [];
function addValue(arr, empt) {
    for (const arrKey of arr) {
        empt.push(Object.values(arrKey));

    }
return empt;
}


let val = addValue(objArr,emptArr2);
document.write(`<div>`);
document.write(val);
document.write(`</div>`);
