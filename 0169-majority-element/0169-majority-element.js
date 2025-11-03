/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0
    let x = []
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            x = nums[i]
            count = 1
        } else if (x === nums[i]) {
            count++
        } else {
            count--
        }
    }
    return x
};