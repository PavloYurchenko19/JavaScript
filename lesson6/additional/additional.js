// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let arrEmpty = []
let cutString = (str,n ) => {
    for (let i = 0; i <str.length ; i+=n) {
        let slice = str.slice(i,n+i)
        arrEmpty.push(slice)
    }
    console.log(arrEmpty);
};
cutString('наслаждение',3);


// Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validator = (str) => {
    if (str.endsWith("@gmail.com") && (str.startsWith("someemail@") || (str.startsWith("someeMAIL@")))) {
        console.log(str);
    }


};
validator("someemail@gmail.com")
validator("someeMAIL@gmail.com")
validator("someeMAIL@i.ua")
validator("some.email@gmail.com")

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//

let sortFn = (arr) => {
    arr.sort((a,b)=>
    {
        return b.modules.length - a.modules.length;
    })
    console.log(arr);
};
sortFn(coursesArray);

//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
    let kil = 0;
let count = (str,stringsearch) => {
    for (const strElement of str) {
        if (strElement === stringsearch){

            let amount = strElement.length;
            kil += amount
        }
    }

    console.log(kil);
};
count(str,"о"); // 5
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutStr = (str,n) => {
    let ff =str.split(" ")
    ff.splice(n)
    document.write(ff.toString().replaceAll(",", " "));
};
 cutStr("Сила тяжести приложена к центру масс тела",5)