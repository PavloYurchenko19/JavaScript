// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
document.write(`<div>`);
let emptyArr =  [];
for (i = 0; i <= 50; i++){
    if (i % 2 === 0 && i !==0){

        emptyArr.push(`${i}`);

    }

}
// 2. Вивести за допомогою console.log кожен третій елемен

for (let j =0 ; j <= emptyArr.length ; j+=3) {
    if (j !== 0){

        console.log(emptyArr[j]);

    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let j =0 ; j <= emptyArr.length ; j+=3) {
    if (j !== 0 && emptyArr[j] % 2 === 0){

        console.log(emptyArr[j]);
            // document.write(emptyArr[j], "," );

    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let emptyArrPush = [];
for (let j =0 ; j <= emptyArr.length ; j+=3) {
    if (j !== 0 && emptyArr[j] % 2 === 0){
        emptyArrPush.push(emptyArr[j]);

    }
}
document.write(`<div>`);
// document.write(emptyArrPush);
document.write(`</div>`);

document.write(emptyArr);

document.write(`</div>`);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 0; i <= emptyArr.length-1 ; i++) {
    if(emptyArr[i+1] % 2 === 0){
        document.write(`--- ${emptyArr[i]}---`)
    }

}

// // b. заповнити його 50 непарними числами за допомоги циклу.


document.write(`<div>`);
let emptyArr13 =  [];
for (i = 0; i <= 50; i++){
    if (i % 2 !== 0 && i !==0) {

        emptyArr13.push(`${i}`);

    }


}

// 2. Вивести за допомогою console.log кожен третій елемен
for (let j =0 ; j <= emptyArr.length ; j+=3) {
    if (j !== 0){

        console.log(emptyArr[j]);

    }
}


//
document.write(emptyArr);

document.write(`</div>`);

document.write(`</div>`);
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// document.write(`<div>`);
let emptyArr2 =  [];
for (let i = 0; i <20; i++){
    let rand = Math.round(Math.random()*10);
    emptyArr2.push(rand)

}
// 2. Вивести за допомогою console.log кожен третій елемен
for (let j =0 ; j <= emptyArr2.length ; j+=3) {
    if (j !== 0){

        console.log(emptyArr2[j]);
        // document.write(emptyArr2[j])

    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
document.write(`<div>`);
for (let j =0 ; j <= emptyArr2.length ; j+=3) {
    if (j !== 0 && emptyArr2[j] % 2 === 0){
        // document.write(emptyArr2[j] , "," )
        console.log(emptyArr2[j]);
    }

}
document.write(`</div>`);

document.write(emptyArr2);

document.write(`</div>`);
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let emptyArrPush1 = [];
for (let j =0 ; j <= emptyArr2.length ; j+=3) {
    if (j !== 0 && emptyArr2[j] % 2 === 0){
        emptyArrPush1.push(emptyArr2[j]);

    }
}
document.write(`<div>`);
document.write(emptyArrPush1);
document.write(`</div>`);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 0; i <= emptyArr2.length-1 ; i++) {
    if(emptyArr2[i+1] % 2 === 0 && emptyArr2[i+1] !==0){
        document.write(`--- ${emptyArr2[i]}---`)
    }

}

// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
document.write(`<div>`);
let emptyArr3 =  [];
for (let i = 0; i <20; i++){
    let rand = Math.round(Math.random()*732)+8;
    emptyArr3.push(rand)

}
document.write(emptyArr3 ,);

document.write(`</div>`);
// // 2. Вивести за допомогою console.log кожен третій елемен
for (let j =0 ; j <= emptyArr3.length ; j+=3) {
    if (j !== 0){

        console.log(emptyArr3[j]);
        // document.write(emptyArr3[j] , "," )

    }
}
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
document.write(`<div>`);
for (let j =0 ; j <= emptyArr3.length ; j+=3) {
    if (j !== 0 && emptyArr3[j] % 2 === 0){
        // document.write(emptyArr3[j], "," )
        console.log(emptyArr3[j] );
    }

}
document.write(`</div>`);
// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let emptyArrPush2 = [];
for (let j =0 ; j <= emptyArr3.length ; j+=3) {
    if (j !== 0 && emptyArr3[j] % 2 === 0){
        emptyArrPush2.push(emptyArr3[j]);

    }
}
document.write(`<div>`);
document.write(emptyArrPush2);
document.write(`</div>`);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 0; i <= emptyArr3.length-1 ; i++) {
    if(emptyArr3[i+1] % 2 === 0){
        document.write(`--- ${emptyArr3[i]}---`)
    }

}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let sum = +"";
let price = [100, 250, 50, 168, 120, 345, 188];
for ( i = 0; i <= price.length-1 ; i++) {
    sum += price[i] ;
}
sum = sum / i;
console.log(sum);



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let a = Math.round(Math.random()*100)
let q = Math.round(Math.random()*100)
let w = Math.round(Math.random()*100)
let e = Math.round(Math.random()*100)
let r = Math.round(Math.random()*100)

let arrRandom = [q, a, w, e, r,];
console.log(arrRandom);
let emptyRandomArr =[];
for (let i = 0; i <=arrRandom.length-1; i++) {
    let randomPush = arrRandom[i] *5
    emptyRandomArr.push(randomPush)
}
console.log(emptyRandomArr);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let mixArr = [Math.round(Math.random()*100),Math.round(Math.random()*100),'str1',false,'str2',Math.round(Math.random()*100),true];
let mixArr1 = [];
for (let i = 0; i <=mixArr.length-1 ; i++) {
    if (typeof (mixArr[i]) === 'number'){

        mixArr1.push(mixArr[i]);

    }
}
console.log(mixArr1);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
//
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    for (let city of citiesWithId){
        if (city.user_id === user.id){
            user.city = city;
        }
    }
    console.log(usersWithId);

}
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let emptyArr11 =  [];
for (i = 0; i <= 10; i++){
    if (i % 2 === 0 && i !==0){

        emptyArr11.push(`${i}`);

    }
}
console.log(emptyArr11);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let emptyArr12 = [];
for ( v = 0; v<=arrey.length-1; v++) {
    emptyArr12.push(`${arrey[v]}`);

}
console.log(emptyArr12);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arra = [ 'a', 'b', 'c'] ;
let word = '';
for ( i = 0; i <= arra.length-1 ; i++) {
    word += arra[i] ;



}
console.log(word);
let word2 = '';
let wf = 0;
while (wf<= arra.length-1){


    word2 += arra[wf] ;

    wf++;
}
console.log(word2);
let word3 =''
for (let string of arra) {
    word3 += string;
}
console.log(word3);

