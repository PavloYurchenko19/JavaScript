//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// 1 version

// setTimeout(() => {
//     console.log("I wake up ");
//     setTimeout(() => {
//         console.log("then i go wash my face and brush teeth");
//         setTimeout(() => {
//             console.log("After i have breakfast");
//             setTimeout(() => {
//                 console.log("then i go to my favorite job");
//                 setTimeout(() => {
//                     console.log("during working i have mini pause for dinner");
//                     setTimeout(() => {
//                         console.log("after work i go home and have chill");
//                         setTimeout(() => {
//                             console.log("and i study smt");
//                             setTimeout(() => {
//                                 console.log("in the evening i watch youTube ");
//                                 setTimeout(() => {
//                                     console.log("then i go to sleep");
//                                     setTimeout(() => {
//                                         console.log("unexpected situation 1");
//                                         setTimeout(() => {
//                                             console.log("unexpected situation 2");
//                                             setTimeout(() => {
//                                                 console.log("unexpected situation 3");
//                                             },Math.round(Math.random()*5000));
//                                         },Math.round(Math.random()*5000));
//                                     },Math.round(Math.random()*5000));
//                                 },3000);
//                             },4000);
//                         },600);
//                     },5000);
//                 },300);
//             },3000);
//         },500);
//     },1000);
// },1400);




//2 version

// setTimeout(() => {
//     console.log("then i go to sleep");
// },3001);
// setTimeout(() => {
//     console.log("in the evening i watch youTube ");
// },3000);
// setTimeout(() => {
//     console.log("I wake up ");
// },140);
// setTimeout(() => {
//     console.log("and i study smt");
// },2600);
// setTimeout(() => {
//     console.log("after work i go home and have chill");
// },2000);
// setTimeout(() => {
//     console.log("then i go to my favorite job");
// },1400);
// setTimeout(() => {
//     console.log("during working i have mini pause for dinner");
// },1800);
// setTimeout(() => {
//     console.log("After i have breakfast");
// },725);
// setTimeout(() => {
//     console.log("then i go wash my face and brush teeth");
// },500);
// setTimeout(() => {
//     console.log("unexpected situation 1");
// },Math.round(Math.random()*5000));
// setTimeout(() => {
//     console.log("unexpected situation 2");
// },Math.round(Math.random()*5000));
// setTimeout(() => {
//     console.log("unexpected situation 3");
// },Math.round(Math.random()*5000));

// function sleep() {
//    return  new Promise((resolve => {
//
//
//         setTimeout(() => {
//             // console.log("then i go to sleep");
//             resolve("then i go to sleep")
//
//         },3001);
//     }));
// }
// function youtube() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // console.log("in the evening i watch youTube ");
//             resolve("in the evening i watch youTube ")
//         }, 3000);
//
//     });
//
// }
// function wakeUp() {
//     return new Promise(resolve => {
//
//         setTimeout(() => {
//            // console.log("I wake up ");
//            resolve ("I wake up ")
//         },2040);
//     });
// }
// function study() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // console.log("and i study smt");
//             resolve("and i study smt")
//         },2600);
//     });
//
//
// }
// function chill() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // console.log("after work i go home and have chill");
//             resolve("after work i go home and have chill")
//         },2000);
//     });
// }
// function goJob() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // console.log("then i go to my favorite job");
//             resolve("then i go to my favorite job")
//         },1400);
//     });
//
// }
// function dinner() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // console.log("during working i have mini pause for dinner");
//             resolve("during working i have mini pause for dinner")
//         },1800);
//     });
//
//
// }
// function breakFast() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // console.log("After i have breakfast");
//             resolve("After i have breakfast")
//         },725);
//     });
//
// }
// function wash() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // console.log("then i go wash my face and brush teeth");
//             resolve("then i go wash my face and brush teeth")
//         },500);
//     });
//
// }

function uxs1() {


    setTimeout(() => {
        console.log("unexpected situation 1");
    },Math.round(Math.random()*5000));
}
function uxs2() {

    setTimeout(() => {
        console.log("unexpected situation 2");
    },Math.round(Math.random()*5000));
}

function uxs3() {

    setTimeout(() => {
        console.log("unexpected situation 3");
    }, Math.round(Math.random() * 5000));
}


function sleep() {


        setTimeout(() => {
            console.log("then i go to sleep");

        },3001);
}
function youtube() {
        setTimeout(() => {
            console.log("in the evening i watch youTube ");
        }, 3000);


}
function wakeUp() {

        setTimeout(() => {
            console.log("I wake up ");
        },2040);
}
function study() {
        setTimeout(() => {
            console.log("and i study smt");
        },2600);


}
function chill() {
        setTimeout(() => {
            console.log("after work i go home and have chill");
        },2000);
}
function goJob() {
        setTimeout(() => {
            console.log("then i go to my favorite job");
        },1400);

}
function dinner() {
        setTimeout(() => {
            console.log("during working i have mini pause for dinner");
        },1800);


}
function breakFast() {
        setTimeout(() => {
            console.log("After i have breakfast");
        },725);

}
function wash() {
        setTimeout(() => {
            console.log("then i go wash my face and brush teeth");
        },500);

}
// how todo this??????????
function promFn(text) {
    return new Promise(resolve => {
        setTimeout(() => {

            console.log(text);
            resolve = wash()

        }, 1000);
    })



}

promFn("I wake up")
    .then(value => {
        value()
        return  dinner
    })
    .then(value1 => {
        value1()
        return goJob
    })
    .then(value2 => {
        value2()

        return breakFast
    })
    .then(value3 => {
        value3();
        return chill

    })
    .then(value4 => {
        value4();
        return study


    })
    .then(value5 => {
        value5();
        return youtube

    })
    .then(value6 => {
        value6();
        return sleep
    })
    .then(value7 => {
        value7()

    });


    // function dailyRou(trr) {
    //     let err = " error"
    //     if (!trr) {
    //         console.log(err);
    //     }else {
    //         console.log("I wake up");
    //         if (!trr) {
    //             console.log(err);
    //         }else {
    //             console.log("then i go wash my face and brush teeth");
    //             if (!trr) {
    //                 console.log(err);
    //             }else {
    //                 console.log("After i have breakfast");
    //                 if (!trr) {
    //                     console.log(err);
    //                 }else {
    //                         console.log("then i go to my favorite job");
    //                     if (!trr) {
    //                         console.log(err);
    //                     }else {
    //                         console.log("during working i have mini pause for dinner");
    //                         if (!trr) {
    //                             console.log(err);
    //                         }else {
    //                             console.log("after work i go home and have chill");
    //                             if (!trr) {
    //                                 console.log(err);
    //                             }else {
    //                                 console.log("and i study smt");
    //                                 if (!trr) {
    //                                     console.log(err);
    //                                 }else {
    //                                     console.log("in the evening i watch youTube");
    //                                     if (!trr) {
    //                                         console.log(err);
    //                                     }else {
    //                                         console.log("then i go to sleep");
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // dailyRou(true)

// async function routDay() {
//     let wake1 = await wakeUp();
//     let wash2 = await wash(wake1);
//     let breakF3 = await breakFast();
//     let job4 = await goJob();
//     let dinner4 = await dinner();
//     let chill5 = await chill();
//     let study6 = await study();
//     let yb7 = await youtube();
//     let sleep8 = await sleep();
//     console.log(wake1);
//     console.log(wash2);
//     console.log(breakF3);
//     console.log(job4);
//     console.log(dinner4);
//     console.log(chill5);
//     console.log(study6);
//     console.log(yb7);
//     console.log(sleep8);
//
// }
// routDay()