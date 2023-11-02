

let arr = [11, 12, 13, 14, 15, 16];

// arr.forEach((ele, index, array) => {
//     console.log(ele, index, array);
// })

// arr.map((value,index,array)=>{
//     console.log(value,index,array);
// })

// function multiply2(ele){
//     return ele*2;
// }

// function multiply5(ele){
//     return ele*5;
// }


// let ans = arr.map(multiply5)

// console.log(ans);

//  function even(ele){
//     return ele%2==0
//  }
// let ans = arr.filter(even)

// console.log(ans)
function sum(acc,val){
    return acc + val ;
}
let sum2 = arr.reduce((acc,val)=>{
    return acc *2;
},10);

console.log(sum2);