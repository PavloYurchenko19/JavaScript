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

// function sleep(yes = true) {
//    return  new Promise(((resolve, reject) => {
//        setTimeout(() => {
//
//         if (yes) {
//
//                 // console.log("then i go to sleep");
//                 resolve("then i go to sleep")
//
//         }
//
//             reject("opps");
//        },3001);
//
//
//    }));
// }
// function youtube(watch = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             if (watch) {
//
//                 // console.log("in the evening i watch youTube ");
//                 resolve("in the evening i watch youTube ")
//         }
//
//             reject("opps")
//
//         }, 3000);
//
//
//     });
//
// }
// function wakeUp(yes = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             if (yes) {
//
//                 // console.log("I wake up ");
//                 resolve ("I wake up ")
//         }
//
//             reject("ops");
//
//         },2040);
//
//     });
// }
// function study(yes =true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             if (yes) {
//
//                 // console.log("and i study smt");
//                 resolve("and i study smt")
//             }
//                 reject('opsss')
//         },2600);
//
//     });
//
//
// }
// function chill(yes = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             if (yes) {
//
//                 // console.log("after work i go home and have chill");
//                 resolve("after work i go home and have chill")
//         }
//             reject("ooppss")
//         },2000);
//
//     });
// }
// function goJob(yes = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             if (yes) {
//
//                 // console.log("then i go to my favorite job");
//                 resolve("then i go to my favorite job")
//         }
//             reject("eror")
//
//         },1400);
//
//     });
//
// }
// function dinner(yes = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             if (yes) {
//
//                 // console.log("during working i have mini pause for dinner");
//                 resolve("during working i have mini pause for dinner")
//             }
//
//                 reject("ops");
//
//         },1800);
//
//     });
//
//
// }
//
// function breakFast(yes = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//         if (yes) {
//             // console.log("After i have breakfast");
//             resolve("After i have breakfast")
//         }else {
//             reject("ops")
//         }
//         }, 725);
//
//     });
//
// }
//
// function wash(yes = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             if (yes) {
//
//                 // console.log("then i go wash my face and brush teeth");
//                 resolve("then i go wash my face and brush teeth")
//         }
//             reject("ops")
//         }, 500);
//
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

//
// wakeUp()
//     .then(value0 => {
//     console.log(value0);
//     return wash();
//
//     })
//     .then(value => {
//         console.log(value);
//         return breakFast()
//     })
//     .then(value1 => {
//         console.log(value1);
//         return goJob()
//     })
//     .then(value2 => {
//         console.log(value2)
//
//         return dinner()
//     })
//     .then(value3 => {
//         console.log(value3);
//         return chill()
//
//     })
//     .then(value4 => {
//         console.log(value4);
//         return study()
//
//
//     })
//     .then(value5 => {
//         console.log(value5);
//         return youtube()
//
//     })
//     .then(value6 => {
//         console.log(value6);
//         return sleep()
//     })
//     .then(value7 => {
//         console.log(value7);
//
//     });


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

async function routDay() {
    try {
        let wake1 = await wakeUp();
        let wash2 = await wash();
        let breakF3 = await breakFast();
        let job4 = await goJob(false);
        let dinner4 = await dinner();
        let chill5 = await chill();
        let study6 = await study();
        let yb7 = await youtube();
        let sleep8 = await sleep();
        console.log(wake1);
        console.log(wash2);
        console.log(breakF3);
        console.log(job4);
        console.log(dinner4);
        console.log(chill5);
        console.log(study6);
        console.log(yb7);
        console.log(sleep8);

    }catch (err) {
        console.log("error");
    }


}
routDay()

// function sleep(yes = true, cb) {
//     setTimeout(() => {
//
//         if (yes) {
//
//             // console.log("then i go to sleep");
//             cb(null,"then i go to sleep")
//             return
//
//         }
//
//         cb("opps");
//     }, 3001);
//
//
// }
//
// function youtube(watch = true, cb) {
//     setTimeout(() => {
//
//         if (watch) {
//
//             // console.log("in the evening i watch youTube ");
//             cb(null,"in the evening i watch youTube ")
//             return
//         }
//
//         cb("opps")
//
//     }, 3000);
//
//
// }
//
// function wakeUp(yes = true, cb) {
//     setTimeout(() => {
//
//         if (yes) {
//
//             // console.log("I wake up ");
//             cb(null,"I wake up ")
//             return
//         }
//
//         cb("ops");
//
//     }, 2040);
//
// }
//
// function study(yes = true, cb) {
//     setTimeout(() => {
//
//         if (yes) {
//
//             // console.log("and i study smt");
//             cb(null,"and i study smt")
//             return
//         }
//         cb('opsss')
//     }, 2600);
//
//
// }
//
// function chill(yes = true, cb) {
//
//     setTimeout(() => {
//
//         if (yes) {
//
//             // console.log("after work i go home and have chill");
//             cb(null, "after work i go home and have chill");
//             return
//         }
//
//         cb("ooppss")
//     }, 2000);
//
// }
//
// function goJob(yes = true, cb) {
//     setTimeout(() => {
//
//         if (yes) {
//
//             // console.log("then i go to my favorite job");
//             cb(null, "then i go to my favorite job");
//             return
//         }
//         cb("eror")
//
//     }, 1400);
//
//
// }
//
// function dinner(yes = true, cb) {
//     setTimeout(() => {
//
//         if (yes) {
//
//             // console.log("during working i have mini pause for dinner");
//             cb(null, "during working i have mini pause for dinner");
//             return
//         }
//         cb("ops");
//
//     }, 1800);
//
// }
//
//
// function breakFast(yes = true, cb) {
//
//     setTimeout(() => {
//
//         if (yes) {
//
//             // console.log("After i have breakfast");
//             cb(null, "After i have breakfast");
//             return;
//
//         }
//
//             cb("ops")
//
//     }, 725);
//
//
// }
//
// function wash(yes = true, cb) {
//     setTimeout(() => {
//
//         if (yes) {
//
//             // console.log("then i go wash my face and brush teeth");
//             cb(null,"then i go wash my face and brush teeth")
//             return
//         }
//         cb("ops")
//     }, 500);
//
//
// }
//
// wakeUp(true, (err,morning) => {
//     if (err) {
//
//         console.log(err);
//         return;
//
//     }
//
//     console.log(morning);
//     wash(true, (err, washF) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//
//         console.log(washF);
//
//         breakFast(true, (err, breakF) => {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             console.log(breakF);
//
//             goJob(true, (err, work) => {
//                 if (err) {
//                     console.log(err);
//                     return
//                 }
//                 console.log(work);
//
//                 dinner(true, (err, eat) => {
//                     if (err) {
//                         console.log(err);
//                         return
//                     }
//                     console.log(eat);
//
//                     chill(true, (err, chillHome) => {
//                         if (err) {
//                             console.log(err);
//                             return
//                         }
//                         console.log(chillHome);
//
//                         study(true, (err, learn) => {
//                             if (err) {
//                                 console.log(err);
//                                 return
//                             }
//                             console.log(learn);
//
//                             youtube(true, (err, youT) => {
//                                 if (err) {
//                                     console.log(err);
//                                     return
//                                 }
//                                 console.log(youT);
//
//                                 sleep(true, (err, dream) => {
//                                     if (err) {
//                                         console.log(err);
//                                         return
//                                     }
//                                     console.log(dream);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });