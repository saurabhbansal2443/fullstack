

function sum(...args){
    let  sum = 0 ;
    for(let i =0 ; i<args.length;i++){
        sum+=args[i];
    }
    return sum;
}

// console.log(sum(3,4,3,4,5,6,7,8,9))

let arr1 = [1,2,3,4,5];
let arr2 = [5,6,8,7,9];

let res = [];

let res2 = [...arr1 , ...arr2];

for(let i=0;i<arr1.length;i++){
    res.push(arr1[i]);
}

for(let i=0;i<arr2.length;i++){
    res.push(arr2[i]);
}

console.log(sum(...res2));