

// 
// nested objects 


let obj2 = {
    name : "Captain America ",
    age : 300 ,
    movies : ["Avenger1" , "End Game "],
    Address : {
        city : "New York",
        country : " USA ",
        Pincode : "456789",
        LandMark : "Phool Bagh ",
    }
}
// shallow copy 


// deep copy 

let objString = JSON.stringify(obj2) ;

console.log(objString);

let obj4 = JSON.parse(objString);



obj4.name = "Iron man ";

// console.log("obj2", obj2);

// console.log("obj4" , obj4); 

