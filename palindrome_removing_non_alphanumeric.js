//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//Input: s = "A man, a plan, a canal: Panama"
//Output: true
//Explanation: "amanaplanacanalpanama" is a palindrome.


var isPalindrome = function(s) {

    const palindrome = s.split('').reverse().join('');
    const res = palindrome.replace(/[^a-z0-9]/gi, '').toLowerCase();
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    return res === s
 
 
     
 };


 //with two pointer approach we have this 

 var isPalindrome = function(s) {

    s=s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left=0;
    let right = s.length-1;
    while(left<right){
      if(s[left] !== s[right]){
          return false;
      }else{
          left ++;
          right--;
      }
    }
    return true
  
      
  };