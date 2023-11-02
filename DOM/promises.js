function makeDough(material) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dough = "dough  is ready ";
            resolve(dough);
            // reject("Dough is not ready");
        }, 2000);
    })
}

function bakePizza(dough) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let pizza = "baked Pizza is ready ";
            res(pizza);

        }, 2000);
    })
}

function addTopings(pizza) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let food = "pizza is ready ";
            res(food);
        }, 2000);
    })
}

console.log("Pizza is started ")

// makeDough().then((dough) => {
//     console.log(dough);
//     return bakePizza(dough);
// }).then((pizza) => {
//     console.log(pizza);
//     return addTopings(pizza);
// }).then((food) => {
//     console.log(food);
// }).catch((err) => {
//     console.log(err);
// })

async function makePizza(){
    let dough = await makeDough();
    console.log(dough);
    let pizza = await bakePizza(dough);
    console.log(pizza);
    let food = await addTopings(pizza);
    console.log(food);
}

makePizza();

console.log("Pizza is end")