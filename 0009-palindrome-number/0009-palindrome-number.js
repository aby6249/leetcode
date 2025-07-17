/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;

    const grill=x.toString()
    const reverse=grill.split('').reverse().join('')
    return grill===reverse
};