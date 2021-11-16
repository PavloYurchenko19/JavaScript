// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr1 = [0, 1, 2, 3, 4 ];
let arr2 = ["Pavlo", "Andriy", "Vasya", "Dima", "Vika"];
let arr3 = ['sring', true , "sring2", false, "sring3"];
console.log(arr1);
console.log(arr2);
console.log(arr3);
document.write(`<div class="home ">`);
document.write(`<div class = "exise1 box">`);
document.write(`<h2>Exise 1</h2>`);
document.write(`<div class="df"><h3>First array :  </h3>  ${arr1}</div>`);
document.write(`<div class="df"><h3>Second array :  </h3>  ${arr2}</div>`);
document.write(`<div class="df"><h3>Third array :  </h3>  ${arr3}</div>`);
document.write(`</div>`);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
document.write(`<div class="exise2 box">`);
document.write(`<h2>Exise 2</h2>`);
let empty  = [];
empty.splice(0 , 0, "first item");
empty.splice(0 , 0, "second item");
empty.splice(0 , 0, "third item");
empty.splice(0 , 0, 0, 1, 5, 2, 7, 8, 26);
empty.splice(5,0, true, false, 5 ,true);
document.write(` This is empty array   :   ${empty}`);
console.log(empty);
document.write(`</div>`);
document.write(`</div>`);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


document.write(`<h2 class="center"> Exise 3</h2>`)
document.write(`<div class="home__part_2">`);
for (i = 0; i <= 9; i++){
    document.write(`<div class="box__min"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iste officiis quo quos repellat similique. Cumque ducimus officia praesentium sunt?</div>`)
}
document.write(`</div>`);




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h2 class="center"> Exise 4</h2>`);
document.write(`<div class="  exise3">`);
for (q = 0; q <= 9; q++){
    document.write(`<div class="box__min ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto at commodi dolorum, earum est magni nesciunt officiis reiciendis sed suscipit veniam veritatis vero voluptate.<br>
    Index ${q}
</div>`);
}


document.write(`</div>`);
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<h2 class="center"> Exise 5</h2>`);
document.write(`<div class="while ">`);
let w = 1;
while (w <=20){
    document.write(`<div class="box__min_2">
<h1>This is some box</h1>
</div>`);
    w++;
}

document.write(`</div>`);
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<h2 class="center"> Exise 6</h2>`);
document.write(`<div class="while ">`);
let e = 1;
while (e <= 20){
    document.write(`<div class="box__min_2"> <h1>This is ${e} box</h1></div>`);
    e++;
}
document.write(`</div>`);
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
document.write(`<h2 class="center"> Exise 7</h2>`);
let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrStr = ["zero","one","two","three","four", "five", "six","seven","eight", "nine"]
document.write(`<div class="exise7 df">`)
for (let number in arrNum) {
    document.write(`<div class="num"> ${number}</div>`);

    console.log(number);
}
document.write(`</div>`);
document.write(`<div class="exise7 df">`);
for (let s of arrStr) {
    document.write(`<div class="num"> ${s}</div>`);
    console.log(s);

}
document.write(`</div>`);
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
document.write(`<h2 class="center"> Exise 8</h2>`);
let arrMix = [0, 1, 2, 3, 4, "zero", "one", "two", "three", "four"];
document.write(`<div class="exise7 df">`);
for(let r of arrMix){
    document.write(`<div class="num"> ${r}</div>`)
    console.log(r);
}

document.write(`</div>`);
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
document.write(`<h2 class="center"> Exise 9</h2>`);
let arrMix2 = [1, true, 2, false, 'dfadf', true, true, 'fdf', 'ldfd', false];
document.write(`<h2 class="center"> Only boolean</h2>`);
document.write(`<div class="bol">`);

for (let t of arrMix2){
    if (typeof t === 'boolean'){
        document.write(`<div class="box3"><h3>There is only boolean ${t}</h3></div>`);
        console.log(t);
    }
}
document.write(`</div>`);
document.write(`<h2 class="center"> Only string</h2>`);
document.write(`<div class="bol">`);
for (let t of arrMix2){
    if (typeof t === 'string'){
        document.write(`<div class="box3"><h3>There is only boolean ${t}</h3></div>`);
        console.log(t);
    }
}
document.write(`</div>`);
document.write(`<h2 class="center"> Only number</h2>`);
document.write(`<div class="bol">`);
for (let t of arrMix2){
    if (typeof t === 'number'){
        document.write(`<div class="box3"><h3>There is only boolean ${t}</h3></div>`);
        console.log(t);
    }
}
document.write(`</div>`);
// - Створити порожній масив. Наповнити й ого 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
document.write(`<h2 class="center"> Exise 10</h2>`);
let emptyArr2 = [];
emptyArr2.push(2,5, 'Olya');
emptyArr2.splice(1, 0 , "some text", 5, true, false, 'end')
emptyArr2.unshift('pavlo', 'Peter')
document.write(`<div class="box3 arr2"> Empty Array [${emptyArr2}]</div>`)
console.log(emptyArr2);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

document.write(`<h2 class="center"> Exise 11</h2>`);
document.write(`<div class="df bol">`);
for (let t = 1; t<= 10; t++){
    console.log(t);
    document.write(`<div class="num "> ${t}</div>`);
}
document.write(`</div>`);

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<h2 class="center"> Exise 12</h2>`);
document.write(`<div class="df bol fxw  ">`);
for (let y = 1; y<= 100; y++){
    console.log(y);
    document.write(`<div class="num  "> ${y},</div>`);
}
document.write(`</div>`);

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write(`<h2 class="center"> Exise 13</h2>`);
document.write(`<div class="df bol fxw  ">`);
for (let u = 1; u<= 100; u+=2){
    console.log(u);
    document.write(`<div class="num  "> ${u},</div>`);
}
document.write(`</div>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

document.write(`<h2 class="center"> Exise 14</h2>`);
document.write(`<div class="df bol fxw  ">`);
for (let o = 0; o<= 100; o+=2){
    console.log(o);
    document.write(`<div class="num  "> ${o},</div>`);
}
document.write(`</div>`);
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write(`<h2 class="center"> Exise 15</h2>`);
document.write(`<div class="df bol fxw  ">`);
debugger;
for (let a = 1; a<= 100;a++){
    if (a % 2 !== 0){


        console.log(a);
        document.write(`<div class="num  "> ${a},</div>`);}
}
document.write(`</div>`);