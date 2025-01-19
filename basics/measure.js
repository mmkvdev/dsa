// write a function that calculates the sum of all numbers from 1 upto (and including) some number n

function addUpTo (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

const t1 = performance.now();
addUpTo(5000000000);
const t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)


// write a function that calculates the sum of all numbers from 1 upto (and including) some number n

const addUpTo_opt = (n) => n * (n + 1) / 2;

const t1_opt = performance.now();
addUpTo_opt(5000000000);
const t2_opt = performance.now();
console.log(`Time elapsed: ${(t2_opt - t1_opt) / 1000} seconds.`)