/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num >= 10) {

        let grill = num.toString().split('').map(Number)
        num = grill.reduce((a, b) => a + b, 0)
    }

    return num
};