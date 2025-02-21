// implementing stacks using ararys

// LIFO / FILO

// [important]: direction of insertion / deletion is important,
// as we're not trying to access data but we're trying to track the order of insertion (preferred to use linkedlist)

// LIFO using push() and pop() methods => efficient
const items = [];

items.push("ps5");
items.push("bullet");
items.push("thar");

// won't pop these items as they're my dream :) but syntax: array_instance.pop()

// FILO using shift() and unshift() methods => costly as it involves re-indexing of array elements
const newItems = [];
newItems.unshift("awesome");
newItems.unshift("mmk!");

// won't shift (removing from the start) these items again as I'm genuinely awesome :) but syntax: array_instance.shift()
