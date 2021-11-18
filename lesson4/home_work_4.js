document.write(`<div class="header">`);
document.write(`<h1>Home work  lesson 4</h1>`);
document.write(`</div>`);
document.write(`<div class="wrap">`);
document.write(`<div class="first">`);
document.write(`<div class="exe">`);
document.write(`<span class="num">1</span> <br> створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б`);
// 1 створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const pi = 3.14;
function sqRectangle(a,b) {
    let squareR = a * b;
    return squareR
}
let exe = sqRectangle(12,10);
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);

document.write(exe);
document.write(`</div> `);
document.write(`<div class="exe">`);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
document.write(`<span class="num">2</span> <br> створити функцію яка обчислює та повертає площу кола з радіусом r`);
function sqCircle(r) {


    let s = pi * (r**2);
    return s
}
let exe1 = sqCircle(5);
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);
document.write(exe1);
document.write(`</div>`);
document.write(`<div class="exe">`);
document.write(`<span class="num">3</span> <br> створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r`);
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sqСylinder( r , h) {

    let squareCyl = 2 * pi * r * h;
    return squareCyl
}
let exe2 = sqСylinder(5 ,5);
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);
document.write(exe2);
document.write(`</div>`);
//- створити функцію яка приймає масив та виводить кожен його елемент    njn
document.write(`<div class="exe">`);
document.write(`<span class="num">4</span> <br> створити функцію яка приймає масив та виводить кожен його елемент`);
let firstArr = [11, 22, 33, 44, 55, 66, 77, 88, 99 ];

function acceptArr(arr) {
    for (let i = 0; i <= arr.length-1; i++) {
        let item = arr[i];
        document.write(item +", ");
    }
}
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);
let exe3 = acceptArr(firstArr);
document.write(`</div>`);
document.write(`</div>`);
document.write(`<div class="second">`);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`<div class="exe w600">`);
document.write(`<span class="num">5</span> <br> створити функцію яка створює параграф з текстом. Текст задати через аргумент`);
function creatP(p , p1) {
    document.write(`<div>`);

    document.write(`<p>${p} <hr> ${p1}</p>`)
    document.write(`</div>`);
    document.write(`<div>`);
    document.write(`<p>${p} <hr>${p1}</p>`)
    document.write(`</div>`);
}
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);

creatP("First paragraph"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus saepe, tempora. At dolorem dolores libero minus omnis rerum vero voluptatem.");
document.write(`<hr>`);


creatP("Second paragraph","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet optio pariatur perferendis saepe similique voluptatum? Animi aperiam assumenda nisi quisquam!"    )
document.write(`<hr>`);


creatP("Third paragraph","Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda, iusto nisi pariatur quaerat quam sint temporibus? Ducimus iste, voluptates.")

document.write(`</div>`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<div class="exe w600">`);
document.write(`<span class="num">6</span> <br> створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий`);

function ulfunc(p) {

    document.write(`<ul>`);

    document.write(`<li><hr>${p} <hr></li>`);
    document.write(`<li>${p}<hr></li>`);
    document.write(`<li>${p}</li>`);
    document.write(`</ul>`);
}
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);
ulfunc("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, laboriosam?")
document.write(`</div>`);
document.write(`</div>`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`</div>`);
document.write(`<div class="footer wrap">`);
document.write(`<div class="exe w100">`);

document.write(`<span class="num">7</span> <br> створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий`);

function ulFuncFor(amount, p) {

    for (let i = 0; i <= amount-1; i++) {
        document.write(`<ul>`);
        document.write(`<li>${i}  ${p}</li>`);
        document.write(`<li>${i}  ${p}</li>`);
        document.write(`<li>${i}  ${p}</li>`);
        document.write(`</ul>`);
    }
}
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);
ulFuncFor(10, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, reiciendis.")
document.write(`</div>`);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(`<div class="wrap">`);
document.write(`<div class="exe w600">`);

document.write(`<span class="num">7</span> <br> створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список`);
let array = [1, 'a', true, 'a' , 5 , false]
function accArr(arr) {
    document.write(`<ul>`);
    for (const arrKey in arr) {
        document.write(`<li>${arr[arrKey]}</li>`);
    }
    document.write(`</ul>`);
}
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);
accArr(array);
document.write(`</div>`);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write(`<div class="exe w600">`);

document.write(`<span class="num">8</span> <br> створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.`);

let arrList = [{id: 1, name:"Pavlo",age: 19},{id: 2, name:"Petro",age: 20},{id: 3, name:"Pavlina",age: 11}];
function accFun(arr) {
    for (const arrKey of arr) {
        document.write(`<div>`);
        document.write(`id --${arrKey.id}  name ${arrKey.name} age  ${arrKey.age} `)
        document.write(`</div>`);

    }
}
document.write(`<hr>`);
document.write(`<h3>Answer</h3>`);
accFun(arrList);
document.write(`</div>`);
document.write(`</div>`);
document.write(`</div>`);
