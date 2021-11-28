// Дано натуральное число n. Выведите все числа от 1 до n.

let numberN = (n) => {
    for (let i = 1; i <=n ; i++) {
        document.write(`<div>`);
        document.write(i);
        document.write(`</div>`);
    }
};
numberN(10);



document.write(`<hr>`);
// Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let twoMumber = (a, b) => {
    for (let i = a; i <=b ; i++) {
        document.write(`<div>`);
        document.write(i);
        document.write(`</div>`);
    }
};
twoMumber(10,20);
document.write(`<hr>`);

let reversTwoNumber = (a, b) => {
    for (let i = a ; i >= b; i--) {
        document.write(`<div>`);
        document.write(i);
        document.write(`</div>`);
    }
};
reversTwoNumber(30,20);
document.write(`<hr>`);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let arrEmpty = [];
let pushNumberInArr = (arr,len) => {
    for (let i = 0; i < len; i++) {
        let rundom = Math.round(Math.random()*3);

        if( rundom === 0){
            nul = rundom;
            arr.push(nul);

        }else {
             arr.unshift(rundom)
        }
    }

    document.write(arr);
};

document.write(`<div>`);
pushNumberInArr(arrEmpty,30);
document.write(`</div>`);


let fr = [11, 22, 33, 44];
let foo = (arr, item) => {

};
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


let pushOneMore = (arr, i) => {
    let g =arr.splice(i,1)
    i+=1
   arr.splice(i,0,g)
    console.log(arr.flat());
};
pushOneMore([9,8,0,4], 0);
pushOneMore([9,8,0,4], 1);
pushOneMore([9,8,0,4], 2);