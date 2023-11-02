


// function calc(a,b , callback){
//     return callback(a,b);
// }

// function mult(a,b){
//     return a*b;
// }

// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }


function num(n){
    return function(){
        return n++;
    }
}

// let i = num(2);

// console.log(i);
// console.log(i());

let name = "saurabh";
let age = 23 ;

function details(name , age ){
    console.log(  `My name id ${name} . My age is ${age}`);
}

details(name , age );