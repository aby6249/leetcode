/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let spell = 0
    for(let i=s.length-1;i>=0;i--){
        if(s[i] !== " "){
            spell ++;
            
        }else{
            if(spell !==0)break
        }
    }
    return spell
};