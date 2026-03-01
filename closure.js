//* closure
// function outer() {
//     let a = 0;
//     function inner() {
//         a++;
//         console.log(a);
//     }
//     return inner;
// }

// let fn = outer();
// fn(); // 0
// fn(); // 1
// fn(); // 2
// fn(); // 3

function outer(studentName) {
    let l = 3;

    return () => {
        if(l > 0) {
            l--;
            console.log(`Welcome ${studentName}, you have ${l} attempts left.`);
        }
        else if(l === 0) {
            console.log(`Sorry ${studentName}, you have no attempts left.`);
        }
    };
}
const alvi = outer('Alvi');
alvi(); // Welcome Alvi, you have 3 attempts left.
alvi(); // Welcome Alvi, you have 2 attempts left.
alvi(); // Welcome Alvi, you have 1 attempts left.
alvi(); // Sorry Alvi, you have no attempts left.

const ali = outer('Ali');
ali(); // Welcome Ali, you have 3 attempts left.
ali(); // Welcome Ali, you have 2 attempts left.
ali(); // Welcome Ali, you have 1 attempts left.
ali(); // Sorry Ali, you have no attempts left.