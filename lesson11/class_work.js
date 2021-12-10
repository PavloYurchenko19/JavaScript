// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let favorite = [];
localStorage.setItem('favorite',JSON.stringify(favorite));
let item = localStorage.getItem('favorite');
let parse = JSON.parse(item);
console.log(parse);
for (let user of users) {
    let btn = document.createElement("button");
    btn.innerText = "add to favorite";
    btn.id = "favorite";
    let userDiv = document.createElement("div");
    let innerText = `${user.name} ${user.age} ${user.status}`;
    userDiv.append(innerText, btn);
    document.body.appendChild(userDiv);
    btn.onclick = function (e) {
        e.preventDefault()
        favorite.push(innerText)
        localStorage.setItem("favorite", JSON.stringify(favorite));
    };
}

// let btn = document.getElementsByTagName("button");
