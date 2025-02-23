/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * https://leetcode.com/problems/search-a-2d-matrix/
 */
const divMod = (x, y) => [Math.floor(x / y), x % y];
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let columns = matrix[0].length;

    let left = 0, right = rows * columns - 1;

    while (left <= right) {
        let mid = Math.floor ((left + right) / 2);
        let [rowPos, colPos] = divMod(mid, columns);
        let matrixMidValue = matrix[rowPos][colPos];
        if (matrixMidValue === target) {
            return true;
        } else if (matrixMidValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};
