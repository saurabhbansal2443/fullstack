

function makeDough(material, callback) {
    setTimeout(() => {
        let dough = "dough  is ready ";
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback2) {
    setTimeout(() => {
        let pizza = "baked Pizza is ready ";
        callback2(pizza);

    }, 2000);
}

function addTopings(pizza, callback3) {
    setTimeout(() => {
        let food = "pizza is ready ";
        callback3(food);
    }, 2000);
}

console.log("Make a pizza ")


makeDough("maida", (dough) => {
    console.log(dough);
    bakePizza(dough, (pizza) => {
        console.log(pizza);
        addTopings(pizza, (food) => {
            console.log(food);
        })
    })
});

console.log("Pizza is ready ");


// function apicall(callback){
//     setTimeout(() => {
//         //console.log("result")
//         callback("result")
//     }, 2000);
// }

// apicall(callback)

// function callback(result){
//     console.log(result);
// }




