// closure
function outer() {
    let a = 0;
    function inner() {
        a++;
        console.log(a);
    }
    return inner;
}

let fn = outer();
fn(); // 0
fn(); // 1
fn(); // 2
fn(); // 3