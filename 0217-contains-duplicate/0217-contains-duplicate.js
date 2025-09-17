/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let num=new Set()
    for(let grill of nums){
        if (num.has(grill)){
            return true
        }
        else{
            (num.add(grill))
            
        }
    }
    return false
};