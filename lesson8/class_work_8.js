// Взяти файл template_2.html та працювати в ньому


// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let changeClassName = document.getElementById("main_header");
changeClassName.classList.add("sep-2021");

console.log(changeClassName);
// b) робить шириниу елементу ul 400px
let ulist = document.getElementsByTagName('ul');
for (const ulistElement of ulist) {
    ulistElement.style.width = "400px"
}


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthLinkList = document.getElementsByClassName("linkList");
for (const widthLinkListElement of  widthLinkList) {
    widthLinkListElement.style.color = "red"
    widthLinkListElement.style.width = "50%"
}
console.log(widthLinkList);
// d) отримує текст який зберігається в елементі з класом listElement2
function addText(text) {
    let elementsByClassName = document.getElementsByClassName("listElement2");
    elementsByClassName.innerText = text
}
addText('sdfsdfsdfsdfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
// e) отримує всі елементи li та змінює ім колір фону на сірий
let elementsByTagName = document.getElementsByTagName("li");
for (var elementsByTagNameElement of elementsByTagName) {
    elementsByTagNameElement.style.background = "silver";
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let elementsByTagName1 = document.getElementsByTagName('a');
for (const elementsByTagName1Element of elementsByTagName1) {
    elementsByTagName1Element.classList.add("anchor")
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const elementsByTagName1Element of elementsByTagName1) {
    if (elementsByTagName1Element.innerText === 'link3') {
        elementsByTagName1Element.style.fontSize = "40px"
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const elementsByTagName1Element of elementsByTagName1) {
    let text = elementsByTagName1Element.innerText = "xxx"
    elementsByTagName1Element.classList.add(text);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName("sub-header");
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.background = prompt("enter your color")
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const subHeaderElement of subHeader) {
if (subHeaderElement.innerText === "content 2 segment") {
    // subHeaderElement.style.color = prompt("enter your color")
}

}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName("content_1");
// content1.innerText = prompt("enter your text");
// l) отримати елементи p та змінити їм padding на 20px

let tagP = document.getElementsByTagName("p");
for (const tagPElement of tagP) {
    tagPElement.style.padding = "20px"
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elementsByClassName = document.getElementsByClassName("text2");
elementsByClassName.innerText = "sep-2021";
