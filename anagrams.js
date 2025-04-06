//check if the twostrings are anagrams or not 

//solution 1


const checkAnagrams=(str1, str2)=>{
    for(let i =0; i<str2.length; i++){
        if(!str1.includes(str2[i])){
            return false;
        }
    } 
    return true
 }
 console.log(checkAnagrams("listen", "silent"))



 //............................................................................................................................................................................
 //solution2 

 const checkAnagrams2 = (str1, str2) => {
   return str1.split('').sort().join('') === str2.split('').sort().join('');

 }
 console.log(checkAnagrams2("listen", "silent"))
