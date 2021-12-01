// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"
let content = document.getElementById("content");
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"
let accTextRules = document.getElementById("rules");
console.log(accTextRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi delectus eos est fugiat impedit iste nemo nisi, numquam quam.";
console.log(content.innerText);
// -- замініть текст параграфа з id 'rules' на будь-який інший
accTextRules.innerText = "some text";
console.log(accTextRules.innerText);
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу к олір тексту на синій
let xxx = document.body.children
for (const xxx1 of xxx) {
    xxx1.classList.add("red")
    console.log(xxx1);

}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log


for (const allClasses of accTextRules.classList) {
    console.log(allClasses);
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName("fc_rules");
for (const fcRule of fcRules) {
    fcRule.classList.add("redElement");
}



