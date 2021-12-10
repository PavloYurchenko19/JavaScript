// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let f1 = document.forms.f1;
let btn1 = document.getElementById("btn1");
f1.onclick = function (e) {
    e.preventDefault();
    let us = `${f1.name.value} ${f1.age.value}`
    btn1.onclick = function () {
        localStorage.setItem("user", JSON.stringify(us));
    };

};

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let arr =[]
let btn2 = document.getElementById("btn2");
localStorage.setItem("car",JSON.stringify(arr));
let itemCar = localStorage.getItem("car");
let parseCar = JSON.parse(itemCar);

let f2 = document.forms.f2;

f2.onclick = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = {model, type, volume};
    btn2.onclick = function () {
        parseCar.push(car);
        localStorage.setItem("car", JSON.stringify(parseCar));
        console.log(parseCar);
    }

};


