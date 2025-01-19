// write a function that calculates the sum of all numbers from 1 upto (and including) some number n

function addUpTo (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

addUpTo(5);

// more concise way
const addUpTo_opt = (n) => n * (n + 1) / 2;


addUpTo_opt(5);
addUpTo_opt(6);