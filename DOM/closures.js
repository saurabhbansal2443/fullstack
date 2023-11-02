

function count() {
    let i = 0;

    return {
        inc: function () {
            i++;
            console.log(i);
        },
        dec: function () {
            i--;
            console.log(i);
        }
    }
}

let mycount = count();

mycount.inc();
mycount.inc();

mycount.inc();

mycount.dec();

let yourcount = count();

yourcount.inc();