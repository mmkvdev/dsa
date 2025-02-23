/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-palindrome/description/
 */
var isPalindrome = function(s) {
    let transformedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = transformedString.length - 1;

    while (left < right) {
        if (transformedString[left] !== transformedString[right]) return false;
        left++;
        right--;
    }

    return true;
};
