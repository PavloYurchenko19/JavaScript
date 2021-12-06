// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let f1 = document.forms.f1;
let f2 = document.forms.f2;

let btn = document.getElementById("btn");
btn.onclick = function () {
    console.log(`${f1.input1.value} ${f1.input2.value}`);
    console.log(`${f2.input1.value} ${f2.input2.value}`);
};
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let f3 = document.forms.f3;
f3.onsubmit = function (e) {
    e.preventDefault();
    let line = this.line.value;
    let calls = this.cells.value;
    let text = this.text.value;
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    for (let i = 0; i < line; i++) {
        let tr = document.createElement("tr");
        tr.style.border = "1px solid black";
        table.append(tr);
        for (let j = 0; j < calls; j++) {
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.innerText = text;
            table.append(td);
        }
    }
    document.body.append(table)
};
// Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let swearWords = ["гівнюк", "пацюк", "свинота"];
let swearW = document.forms.swearW;
swearW.onsubmit = function (e) {
    e.preventDefault();
    let swear = this.swear.value;
    for (const word of swearWords) {
        if (swear.includes(word)) {
            alert("WOw stop men")
        }
    }
    console.log(swear);

};

