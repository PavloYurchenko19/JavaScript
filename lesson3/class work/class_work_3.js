// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
document.write(`<div class="head">`);
document.write(`<h1>Calss work lesson 3</h1>`);
document.write(`</div>`);
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>1. перебрати його циклом while</h2>`)
document.write(`</div>`);

document.write(`<div class="exise1">`);
let i = 0;
while (i < arr.length){
    document.write(`${arr[i]},   `);
    i++;
}
// 2. перебрати його циклом for
document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>2. перебрати його циклом for</h2>`)
document.write(`</div>`);
document.write(`<div class="exise1">`);
for (let i = 0; i <= arr.length -1; i++){
    document.write(`${arr[i]},   `);
}
document.write(`</div>`);

document.write(`</div>`);
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>3. перебрати циклом while та вивести  числа тільки з непарним індексом</h2>`)
document.write(`</div>`);
document.write(`<div class="exise1">`);
let w = 0;
while ( w <= arr.length -1){
    if (w % 2 !==0){

        document.write(`${arr[w]}    , `);
    }
    w++;
}
document.write(`</div>`);
document.write(`</div>`);


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>4. перебрати циклом for та вивести  числа тільки з непарним індексом</h2>`)
document.write(`</div>`);
document.write(`<div class="exise1">`);
for (let i = 0; i <= arr.length; i++){
    if (i % 2 !==0){
        document.write(`${arr[i]}     ,`)
    }
}
document.write(`</div>`);
document.write(`</div>`);


// 5. перебрати циклом while та вивести  числа тільки парні  значення


document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>5. перебрати циклом while та вивести  числа тільки парні  значення</h2>`);
document.write(`</div>`);

document.write(`<div class="exise1">`);
let e = 0;

while (e <= arr.length-1){
    if (arr[e] % 2 === 0){
      document.write(`${arr[e]}     ,`);
    }

    e++;
}
document.write(`</div>`);
document.write(`</div>`);

// 6. перебрати циклом for та вивести  числа тільки парні  значення


document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>6. перебрати циклом for та вивести  числа тільки парні  значення</h2>`);
document.write(`</div>`);
document.write(`<div class="exise1">`);
for (let i = 0; i <= arr.length-1; i++){
    if (arr[i] % 2 ===0){
        document.write(`${arr[i]}     ,`);
    }
}
document.write(`</div>`);
document.write(`</div>`);


// 7. замінити кожне число кратне 3 на слово "okten"

document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>7. замінити кожне число кратне 3 на слово "okten"</h2>`);
document.write(`</div>`);
document.write(`<div class="exise1">`);
for (let i = 0; i <= arr.length-1; i++){
    if (arr[i] % 3 === 0){
        arr.splice(`${i}` , 1 ,"Okten");
        document.write(`${arr[i]}     ,`);
    }
}
document.write(`</div>`);
document.write(`</div>`);


// 8. вивести масив в зворотньому порядку.


let arrReverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>8. вивести масив в зворотньому порядку.</h2>`);
document.write(`</div>`);
document.write(`<div class="exise1">`);
for (let j = arrReverse.length-1; j >= 0 ; j--) {
    document.write(`${arrReverse[j]}             ,`);

}

document.write(`</div>`);
document.write(`</div>`);


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
document.write(`<h2 class="center">9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)</h2>`);
document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2 class="center">1. перебрати його циклом while (reverse)</h2>`);
document.write(`</div>`);
document.write(`<div class="exise1">`);
let u = arrReverse.length-1;
while (u >= 0){

    document.write(`${arrReverse[u]},   `);
    u--;
}

document.write(`</div>`);
document.write(`</div>`);


// 2. перебрати його циклом for (reverse)

document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2 class="center"> 2. перебрати його циклом for (reverse)</h2>`);
document.write(`</div>`);
document.write(`<div class="exise1">`);
for ( let i = arrReverse.length -1; i >=0; i--){
    document.write(`${arrReverse[i]}     ,`);
}

document.write(`</div>`);
document.write(`</div>`);

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом(reverse)

document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>3. перебрати циклом while та вивести  числа тільки з непарним індексом (reverse)</h2>`)
document.write(`</div>`);
document.write(`<div class="exise1">`);
let y = arrReverse.length;
while ( y >= 0){
    if (y % 2 !==0){

        document.write(`${arrReverse[y]}    , `);
    }
    y--;
}
document.write(`</div>`);
document.write(`</div>`);

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>4. перебрати циклом for та вивести  числа тільки з непарним індексом(reverse)</h2>`)
document.write(`</div>`);
document.write(`<div class="exise1">`);
for (let i = arrReverse.length; i >= 0; i--){
    if (i % 2 !==0){
        document.write(`${arrReverse[i]}     ,`)
    }
}
document.write(`</div>`);
document.write(`</div>`);


// 5. перебрати циклом while та вивести  числа тільки парні  значення


document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>5. перебрати циклом while та вивести  числа тільки парні  значення(reverse)</h2>`);
document.write(`</div>`);

document.write(`<div class="exise1">`);
let a = arrReverse.length-1;

while (a >= 0){
    if (arrReverse[a] % 2 === 0){
        document.write(`${arrReverse[a]}     ,`);
    }

    a--;
}
document.write(`</div>`);
document.write(`</div>`);

// 6. перебрати циклом for та вивести  числа тільки парні  значення


document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>6. перебрати циклом for та вивести  числа тільки парні  значення(reverse)</h2>`);
document.write(`</div>`);
document.write(`<div class="exise1">`);
for (let i = arrReverse.length-1; i >= 0; i--){
    if (arrReverse[i] % 2 ===0){
        document.write(`${arrReverse[i]}     ,`);
    }
}
document.write(`</div>`);
document.write(`</div>`);


// 7. замінити кожне число кратне 3 на слово "okten"

document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="main">`);
document.write(`<div class="main__left">`);
document.write(`<h2>7. замінити кожне число кратне 3 на слово "okten" (reverse)</h2>`);
document.write(`</div>`);
document.write(`<div class="exise1">`);
for (let i = arrReverse.length-1; i >= 0; i--){
    if (arrReverse[i] % 3 === 0){
        arrReverse.splice(`${i}` , 1 ,"Okten");
        document.write(`${arrReverse[i]}     ,`);
    }
}
document.write(`</div>`);
document.write(`</div>`);