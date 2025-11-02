/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const grill =[];

   for(let i=0; i<s.length;i++){
    let x = s.charAt(i);
    switch(x){
        case '(': grill.push(')');
        break;
        case '{': grill.push('}');
        break;
        case '[': grill.push(']');
        break;
        default:
        if(x !== grill.pop()){
            return false
        }

    }
   }
   return grill.length === 0
};