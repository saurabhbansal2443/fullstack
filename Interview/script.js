let inputBar = document.querySelector("input");
let dropdown = document.querySelector("select");
let button = document.querySelector("button");

let main = document.querySelector(".mainContainer");

window.addEventListener("load",function(){
   let arr = this.localStorage.getItem("myobj");

   if(arr){

   arr = JSON.parse(arr);

let n = arr.N;
let type=arr.t;

    main.innerHTML="";
    
    for(let i=1;i<=n;i++){
        let myele = document.createElement("div");

        myele.classList.add(type);

        main.appendChild(myele);
    }
    
}
})


button.addEventListener("click",function(){
    let n = inputBar.value;
    let type = dropdown.value;

    let arr = {N:n,t:type};

    arr= JSON.stringify(arr);

    localStorage.setItem("myobj",arr);

    main.innerHTML="";
    
    for(let i=1;i<=n;i++){
        let myele = document.createElement("div");

        myele.classList.add(type);

        main.appendChild(myele);
    }

})


