// unordered data-structures, stored in key-value pairs!

// useful when order doesn't matter
// useful when you need faster access, insertion, updation and removal
let person = {
  id: 1,
  firstName: "Naruto",
  surName: "Uzumaki",
};

// O(n)
Object.keys(person);

// O(n)
Object.values(person);

// O(n)
Object.entries(person);

// O(1)
console.log(person.hasOwnProperty("id"));
