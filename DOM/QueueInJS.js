

function myQueue(){
    let arr = [];

    return{
        add:function(ele){
            arr.push(ele);
        },
        remove:function(){
            return arr.shift();
        },
        top:function(){
            return arr[arr.length-1];
        },
        size:function(){
            return arr.length
        },
        display:function(){
            console.log(arr);
        }

    }
}

let que = myQueue();

que.add(1);
que.add(2);
que.add(3);
que.add(4);

que.display();

console.log(que.remove());

que.display();