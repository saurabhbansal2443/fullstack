let nameInput = document.querySelector(".PropertyName")
let priceInput = document.querySelector(".Price");
let locationInput = document.querySelector(".Location");

let createBtn = document.querySelector(".create");
let deleteBtn = document.querySelector(".delete");

let mainCont = document.querySelector(".mainContainer");

let flag = false;

window.addEventListener("load",function(){
    if(this.localStorage.getItem("obj")){

        let obj = JSON.parse(localStorage.getItem("obj"));
        let arr = obj.arr;

        

        for(let i=0;i<arr.length-2;i+=3){
            let ele = this.document.createElement("div");
            ele.innerHTML = `<div  class="ticket" >

            <h2 >${arr[i]} </h2>
            <p  >${arr[i+1]}</p>
            <p  >${arr[i+2]}</p>
          
           </div>`
          
              ele.addEventListener("dblclick", function () {
                  if (flag == true) {
                      mainCont.removeChild(ele);
                  }
              })
          
              mainCont.appendChild(ele)
        }
    }
})

deleteBtn.addEventListener("click", function () {
    flag = !flag;

    if (flag == true) {
        deleteBtn.style.color = "red"
    } else {
        deleteBtn.style.color = "black"
    }
})

createBtn.addEventListener("click", ticketCreator)

function ticketCreator() {
    let ele = document.createElement("div");

    let ticketDetails = localStorage.getItem("obj");

    console.log(ticketDetails);

    if (ticketDetails == undefined) {
        let obj = { arr: [nameInput.value,priceInput.value, locationInput.value]}
        localStorage.setItem("obj",JSON.stringify(obj));
    }
    else{
        let obj = JSON.parse(ticketDetails);
        let arr = obj.arr;
        let narr = [...arr , nameInput.value,priceInput.value, locationInput.value]
        let newobj = {arr:narr};
        localStorage.setItem("obj",JSON.stringify(newobj));
    }


    ele.innerHTML = `<div  class="ticket" >

  <h2 >${nameInput.value} </h2>
  <p  >${priceInput.value}</p>
  <p  >${locationInput.value}</p>

 </div>`

    ele.addEventListener("dblclick", function () {
        if (flag == true) {
            mainCont.removeChild(ele);
        }
    })

    mainCont.appendChild(ele)
}

