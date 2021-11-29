// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//

class car {
    constructor(model,producer,year,maxSpeed,engine) {
        this.model = model;
        this.producer = producer;
        this.year =year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Модель автомобіля  - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкысть${this.maxSpeed}, об'єм двигуна ${this.engine}`);
    }
    // increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Їдемо зі новою швидкістю ${this.maxSpeed} на годину`);

    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.year = newValue
        console.log(`рік випуску змінено на ${this.year}`);
    }
    // addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
       switch (driver) {
           case "Pavlo":
               driver = {
                   name: 'Pavlo',
                   age: 19
               }
               return driver;


           case "Ivan":
               driver = {
                   name: 'Ivan',
                   age: 29
               }
               return driver;
       }

    }




}
let bmw =new car("BMW","WW",1999,250,3.5);
console.log(bmw);
bmw.drive(250)
bmw.info()
bmw.increaseMaxSpeed(15);
bmw.changeYear(2002);
bmw.drive = bmw.addDriver("Pavlo")
console.log(bmw);




// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function funCar(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {

        console.log(`Їдемо зі швидкістю ${car2.maxSpeed} на годину`);

    }
// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log(`Модель автомобіля  - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкысть${this.maxSpeed}, об'єм двигуна ${this.engine}`);
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Їдемо зі новою швидкістю ${this.maxSpeed}  на годину`);
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue
        console.log(`рік випуску змінено на ${this.year}`);
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    this.addDriver = function (driver) {
        switch (driver) {
            case "Pavlo":
                driver = {
                    name: 'Pavlo',
                    age: 19
                }
                return driver;


            case "Ivan":
                driver = {
                    name: 'Ivan',
                    age: 29
                }
                return driver;
        }
    }
}
let car2 = new funCar("BMW","WW",1999,250,3.5);
console.log(car2);

car2.drive()
car2.info()
car2.increaseMaxSpeed(10);
car2.changeYear(3654)
car2.drive = car2.addDriver("Pavlo")
console.log(car2);

class Popelyshka {

    constructor(name, age, sizeFeet) {
        this.name = name;
        this.age = age;
        this.sizeFeet = sizeFeet;
    }
}
let popelyshka1 = new Popelyshka("olya",18,36);
let popelyshka2 = new Popelyshka("anna",19,37);
let popelyshka3 = new Popelyshka("katya",20,38);
let popelyshka4 = new Popelyshka("lida",21,39);
let popelyshka5 = new Popelyshka("ira",22,40);
let popelyshka6 = new Popelyshka("sasha",23,41);
let popelyshka7 = new Popelyshka("ivanna",24,42);
let popelyshka8 = new Popelyshka("marta",25,43);
let popelyshka9 = new Popelyshka("solomiya",26,44);
let popelyshka10 = new Popelyshka("ulyana",27,45);
let arrWithGirls = [];
arrWithGirls.push(popelyshka1,popelyshka2,popelyshka3,popelyshka4,popelyshka5,popelyshka6,popelyshka7,popelyshka8,popelyshka9,popelyshka10);
console.log(arrWithGirls);
class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince("pavlo", 19,39);
console.log(prince);
//
let findeFun = (shoeSize, feetSize, popelyshka) => {
    for (const shoeSizeElement of popelyshka) {
        if (shoeSizeElement.sizeFeet === shoeSize){
            console.log(shoeSizeElement);
        }
    }
};


findeFun(prince.shoe, arrWithGirls.sizeFeet, arrWithGirls);
// console.log(f);


let find = arrWithGirls.find(value => value.sizeFeet === prince.shoe)
console.log(find);