# cypress-testing
<br>
<br>


palindrome:

 /**
 * @param {number} x
 * @return {boolean}
   */
 var isPalindrome = function(x) {
     x=121;
    let s=x.toString()
    let start=0;
    let end=s.length-1
    while(start<end){
        if(s[start]!==s[end]){
            return false
        }
        start++
        end--
    }
    return true
 };