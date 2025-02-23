/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/
 */
var minimumOperationsToMakeEqual = function(x, y) {
    if (x === y) return 0;

    let queue = [[x, 0]];
    let visited = new Set();
    visited.add(x);

    while (queue.length) {
        let [current, ops] = queue.shift();
        let nextSteps = [];

        if (current % 11 === 0) nextSteps.push(current / 11);
        if (current % 5 === 0) nextSteps.push(current / 5);
        nextSteps.push(current - 1);
        nextSteps.push(current + 1);

        for (let next of nextSteps) {
            if (next === y) return ops + 1;
            if (!visited.has(next) && next > 0) {
                visited.add(next);
                queue.push([next, ops + 1]);
            }
        }
    }

    return -1;
};
