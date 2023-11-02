let obj1 = {
    name :"Saurabh",
    age : 23 ,
   
}
function describe(college , address , pincode ){
    console.log(this.name , this.age , college , address , pincode);
}
let obj2 = {
    name : "Nikhil",
    age : 21,
    college : "IPS" 
}

describe.call(obj1,"Mait","Delhi","56789");
describe.apply(obj2,["IPS","Gwalior","987654"]);

let myfunc = describe.bind(obj2,"IPS","Gwalior","987654");

obj2={}

myfunc();