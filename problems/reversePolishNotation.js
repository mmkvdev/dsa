/** https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let token of tokens) {
        if (token === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (token === '-') {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '/') {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(parseInt(first/second));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[0];
};
