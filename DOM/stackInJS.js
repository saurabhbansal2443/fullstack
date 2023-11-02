

function mystack(){
    let arr = [];

    let obj = {
        push : function(ele){
            arr.unshift(ele);
        },
        pop : function(){
            return arr.shift();
        }, 
        peek : function(){
            return arr[0];
        },
        size : function(){
            return arr.length;
        },
        display : function(){
           
                console.log(arr);
            
        }

       
    }
    return obj;
}

let stack = mystack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

 stack.display();

console.log(stack.pop());
console.log(stack.pop());