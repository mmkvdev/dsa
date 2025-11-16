// ordered lists

// useful when you need order
let names = ["Naruto", "Itachi", "Sasuke", "Kakashi", "Pain"];

let values = [true, {}, [], 2];

// O(1)
values.push(4);

// O(1)
values.pop();

// O(n)
values.shift();

// O(n)
values.unshift(4);

// O(n)
values.concat(names);

// O(n)
values.slice(1, 2);

// O(n)
values.splice(1, 0, 3);

// O(n * log n)
values.sort();

// O(n)
values.forEach();
values.map();
values.filter();
values.reduce();
