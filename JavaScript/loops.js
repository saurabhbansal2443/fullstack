

for(let i=0;i<=10;i++){
    console.log(i);
}

let n = 5 ;

let ans = 1 ;

for(let i=1 ; i<=n ;i++){
    ans*=i;
}

console.log(ans);

let k = 7 ;

let ft = 0 ;
let st = 1 ;

while(k>0){
    let tt = ft + st ;
    console.log(ft);

    ft = st ;
    st = tt ;

    k--;

}