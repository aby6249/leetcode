/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let x = s.split(" ").map(letter => letter.split("").reverse().join(""))
    return x.join(" ")
};