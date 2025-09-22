/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let ston = {}
    let count = 0

    for (let jel of jewels) {
        ston[jel] = true

    }
    for (let jel of stones) {
        if (jel in ston) {
            count += 1
        }
    }
    return count

};