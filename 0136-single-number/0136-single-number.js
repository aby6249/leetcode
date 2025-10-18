/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let grill = 0
    for (let number of nums) {
        grill ^= number

    }
    return grill
};