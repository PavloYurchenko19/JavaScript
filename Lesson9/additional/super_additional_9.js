let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];







// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let emptyAddresArr = [];
for (const userAddress of users) {
    emptyAddresArr.push(userAddress.address);
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
console.log(emptyAddresArr);
for (const user of users) {
    let userDiv = document.createElement("div");
    userDiv.innerText = `${user.name}  ${user.age}  ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
    document.body.appendChild(userDiv);
}
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (let user2 of users) {
    let userDiv = document.createElement("div");
    let nameDiv = document.createElement("div");
    nameDiv.innerText = user2.name;
    let ageDiv = document.createElement("div");
    ageDiv.innerText = user2.age;
    let statusDiv = document.createElement("div");
    statusDiv.innerText = user2.status;
    let addressDiv = document.createElement("div");
    addressDiv.innerText = `${user2.address.city} ${user2.address.country} ${user2.address.street} ${user2.address.houseNumber}`;

    userDiv.append(nameDiv, ageDiv, statusDiv, addressDiv);

    document.body.appendChild(userDiv);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let user3 of users) {
    let userDiv = document.createElement("div");
    userDiv.style.border = "1px solid black";
    let nameDiv = document.createElement("div");
    nameDiv.innerText = user3.name;
    let ageDiv = document.createElement("div");
    ageDiv.innerText = user3.age;
    let statusDiv = document.createElement("div");
    statusDiv.innerText = user3.status;
    let addressDiv = document.createElement("div");
    let cityDiv = document.createElement("div");
    cityDiv.innerText = user3.address.city;
    let countryDiv = document.createElement("div");
    countryDiv.innerText = user3.address.country;
    let streetDiv = document.createElement("div");
    streetDiv.innerText = user3.address.street;
    let houseNumberDiv = document.createElement("div");
    houseNumberDiv.innerText = user3.address.houseNumber;
    addressDiv.append(cityDiv, countryDiv, streetDiv, houseNumberDiv);
    userDiv.append(nameDiv, ageDiv, statusDiv, addressDiv);

    document.body.appendChild(userDiv);
}

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

for (const rule of rules) {
    let mainDiv = document.createElement("div");
    let titleDIv = document.createElement("div");
    titleDIv.style.fontSize = "28px";
    titleDIv.style.fontWeight = "bold";
    titleDIv.innerText = rule.title;
    let bodyDiv = document.createElement("div");
    bodyDiv.style.lineHeight = "30px";
    bodyDiv.innerText = rule.body;
    mainDiv.append(titleDIv, bodyDiv);
    document.body.appendChild(mainDiv);
}