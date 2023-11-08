let nameInput = document.querySelector(".PropertyName")
let priceInput = document.querySelector(".Price");
let locationInput = document.querySelector(".Location");

let createBtn = document.querySelector(".create");
let deleteBtn = document.querySelector(".delete");

let mainCont = document.querySelector(".mainContainer");

const u = new ShortUniqueId({ length: 10 });



let flag = false;

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


    let uid = u.rnd();

    ele.innerHTML = `<div uid=${uid} class="ticket" id=${uid}>

  <h2 uid=${uid} >${nameInput.value} </h2>
  <p  uid=${uid} >${priceInput.value}</p>
  <p  uid=${uid} >${locationInput.value}</p>

 </div>`

    //  ele.addEventListener("dblclick",function(){
    //     if(flag==true){
    //         mainCont.removeChild(ele);
    //     }
    //  })

    mainCont.appendChild(ele)
}

mainCont.addEventListener("dblclick", function (event) {
    let tar = event.target;

    let id = tar.getAttribute("uid");

    let ele = document.getElementById(`${id}`)

      document.removeChild(ele);

    console.log(ele)
})

