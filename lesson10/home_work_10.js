// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let divIdText = document.createElement("div");
divIdText.style.width = "200px";
divIdText.style.height = "200px";
divIdText.style.border = "1px solid black";
let textP = document.createElement("p");
textP.innerText = "Lorem ipsum dolor sit amet.";
textP.id = "text";
divIdText.append(textP);
document.body.append(divIdText);
let btnDisapp = document.getElementById("text_disapp");
btnDisapp.onclick = function () {
    textP.remove();
};

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hiddenDiv = document.createElement("div");
hiddenDiv.style.width = "200px";
hiddenDiv.style.height = "200px";
hiddenDiv.style.background = "black";
hiddenDiv.onclick = function () {
    hiddenDiv.style.display = "none";
};
document.body.append(hiddenDiv);
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form1 = document.forms.form_age;
form1.onsubmit = function (e) {
    e.preventDefault();
    let age = this.age.value;
    if (age >= 18) {
        console.log(`${age} is bigger or equal  18`);
    }else if (age < 18) {
        console.log(`you are small )) your age is ${age} `);
    }else {
        console.log("input correct age!!!!!");
    }
};
//- Создайте меню, которое раскрывается/сворачивается при клике
let menuDiv = document.createElement("div");
menuDiv.style.width = "200px";
menuDiv.style.height = "auto";
menuDiv.style.border = "1px solid black";
let ul = document.createElement("ul");
for (let i = 1; i < 6; i++) {
    let li = document.createElement("li");
    let menuDish = `this is ${i} dish`;
    li.append(menuDish);
    ul.append(li);
}
let roll = document.getElementById("roll");
let rollMenu = document.getElementById("roll");
rollMenu.onclick = function () {
    ul.classList.toggle("roll_self");
};
menuDiv.append(ul, roll);
document.body.append(menuDiv);

// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentsArr = [
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem5', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem6', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem7', body:'lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},

];
for (let comment of commentsArr) {
    let divComment = document.createElement("div");
    divComment.style.display = "flex";
    let p = document.createElement("p");
    p.innerText = `${comment.title} ${comment.body}`;
    let button = document.createElement("button");
    button.innerText = `  roll up this comment`;
    button.onclick = function () {
        p.classList.toggle("roll_self");
    };
    divComment.append(p, button);
    document.body.append(divComment);
}
console.log(commentsArr);



