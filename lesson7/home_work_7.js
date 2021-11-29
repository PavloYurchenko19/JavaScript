// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User  {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }



}

let emptyArr = [];
let user1 = new User(1,"Pavlo","Yurchenko", "yurchenkopavlo@gmail.com","+380984902226");
let user2 = new User(2,"Petro","Surota", "yurchenkopavlo@gmail.com","+3803545464654");
let user3 = new User(3,"Andriy","jgjg", "yurchenkopavlo@gmail.com","+380984845454");
let user4 = new User(4,"Vitaliy","Youds", "yurchenkopavlo@gmail.com","+38098484846");
let user5 = new User(5,"Olya","Zelen", "yurchenkopavlo@gmail.com","+380984846555");
let user6 = new User(6,"Vasya","Chtos", "yurchenkopavlo@gmail.com","+380959849846");
let user7 = new User(7,"Kolya","Shooo", "yurchenkopavlo@gmail.com","+3809865+6");
let user8 = new User(8,"Igor","Neznayko", "yurchenkopavlo@gmail.com","+386595902226");
let user9 = new User(9,"Lida","Petrova", "yurchenkopavlo@gmail.com","+3809846546");
let user10 = new User(10,"Masha","Yurcuk", "yurchenkopavlo@gmail.com","+38099846546");
emptyArr.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)

console.log(emptyArr);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);
// console.log(user6);
// console.log(user7);
// console.log(user8);
// console.log(user9);
// console.log(user10);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let coupleNum = emptyArr.filter(user =>user.id % 2 ===0);
console.log(coupleNum);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// в мене було по зростаню я зробив по спаданню

let sortDecrease = emptyArr.sort((a, b) => {
    return b.id - a.id;
});
console.log(sortDecrease);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);

        this.order = order;
    }
}

let client1 = new Client(1, "Pavlo", "Yurchenko", "yurchenkopavlo@gmail.com", "+380984902226",  ["smth", "sadasd" ,"sadas"]);
let client2 = new Client(2,"Petro","Surota", "yurchenkopavlo@gmail.com","+3803545464654",["smth", "sadasd" , "sadasd", "sadasd" , 10]);
let client3 = new Client(3,"Andriy","jgjg", "yurchenkopavlo@gmail.com","+380984845454", ["smth" ,  205]);
let client4 = new Client(4,"Vitaliy","Youds", "yurchenkopavlo@gmail.com","+38098484846", ["smth", "sadasd" , 40]);
let client5 = new Client(5,"Olya","Zelen", "yurchenkopavlo@gmail.com","+380984846555", ["smth" ,"sadasd" ,"sadasd","sadasd" , 68]);
let client6 = new Client(6,"Vasya","Chtos", "yurchenkopavlo@gmail.com","+380959849846", ["smth" , "sadasd" , "sadasd", "sadasd" , "sadasd" ,"sadasd", "sadasd" ,  70]);
let client7 = new Client(7,"Kolya","Shooo", "yurchenkopavlo@gmail.com","+3809865+6", ["smth" ,  27]);
let client8 = new Client(8,"Igor","Neznayko", "yurchenkopavlo@gmail.com","+386595902226", ["smth","sadasd" , "sadasd", "sadasd" , 544, 42]);
let client9 = new Client(9,"Lida","Petrova", "yurchenkopavlo@gmail.com","+3809846546", ["smth", "sadasd" ,"sadasd","sadasd" , "sadasd" , "sadasd", "sadasd"  ,  58]);
let client10 = new Client(10,"Masha","Yurcuk", "yurchenkopavlo@gmail.com","+38099846546", ["smth" ,  77]);


let emptyArr2 = [];
emptyArr2.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(emptyArr2);
// console.log(client1);
// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


let sort = emptyArr2.sort((a, b) => {
    return a.order.length - b.order.length
});
console.log(sort);
// emptyArr2.forEach((order) => {
//     let fff = Object.values(order.order);
//     console.log(fff.length);Z
//     fff.sort((a, b) => {
//         return b - a ;
//     });
//     return fff;
//
// });

