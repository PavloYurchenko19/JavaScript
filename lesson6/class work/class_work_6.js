// - Дано список імен.?
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let funChengStr = (str,sym) => {
    let f1 = str.replace(sym, ',').replaceAll(sym,"").replace(',',' ');
    console.log(f1);
};
funChengStr(n1, ".");
funChengStr(n2, "-");
funChengStr(n3, "_");


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let emptyArrWithNum = [];
let randomFunGenerat = (arr) => {
    for (let i = 0; i < 10; i++) {

        let rundomNum = Math.round(Math.random()*100);
        arr.push(rundomNum);
    }
 return arr;
};
console.log(randomFunGenerat(emptyArrWithNum));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

emptyArrWithNum.sort(( a, b ) =>  a - b);
console.log(emptyArrWithNum)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

emptyArrWithNum.filter(num => {if (num % 2 === 0) {
    console.log(num);
}});


// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let map = emptyArrWithNum.map(num => {
    return num.toString();
});

console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let sortNums = (arr,direction) => {
    if (direction === '>') {
        arr.sort((a, b) => {
            return a - b;
        })
    }else if(direction === '<') {
        arr.sort((a, b) => {
            return b - a;
        })
    }
    else {
        return console.log("imput corect value");
    }
    return arr;
};
let d = sortNums(emptyArrWithNum,'<');
console.log(d);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let showcoursesAndDurationArray = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(showcoursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(moreThenfive => moreThenfive.monthDuration > 5));