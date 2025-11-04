/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let arr=[]

    for(let word of words){
        let arr1= word.split(separator)
        for(let grill of arr1){
            if (grill !== ''){
                arr.push(grill)

            }
        }
    }
    return arr
};