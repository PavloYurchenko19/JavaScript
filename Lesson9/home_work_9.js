// Все робити за допомоги js.
// - створити блок,
let divElement = document.createElement("div");
//     - додати йому класи wrap, collapse, alpha, beta
divElement.classList.add("wrap", "collapse", "alpha", "beta");
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divElement.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, perferendis!";
divElement.style.background = "silver";
divElement.style.height = "50px";
divElement.style.marginBottom = "10px";
divElement.style.color = "red";
divElement.style.fontSize = "25px";
// - додати цей блок в body.
document.body.appendChild(divElement);
// - клонувати його повністю, та додати клон в body.
let childDiv = document.body.appendChild(divElement.cloneNode(true));
document.body.appendChild(childDiv)

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let element of coursesAndDurationArray) {
    let div = document.createElement("div");
    div.innerText = `${element.title} ${element.monthDuration}`;
    document.body.appendChild(div)
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const item of coursesAndDurationArray) {
    let div = document.createElement("div");
    div.classList.add("item");
    let h1 = document.createElement("h1");
    h1.innerText = item.title;
    h1.classList.add("heading");
    let p = document.createElement("p");

    p.innerText = item.monthDuration;
    p.classList.add("decsription");


    div.appendChild(h1);
    div.appendChild(p);
    console.log(div);

}


