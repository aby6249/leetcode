/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let n=0
    for(let i=1;i<s.length;i++){
    n+=Math.abs(s.charCodeAt(i-1)-s.charCodeAt(i))
};
return n
}