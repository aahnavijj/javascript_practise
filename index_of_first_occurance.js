

//find the index of the first occurance in a string
//haystack = "sadbutsad", needle = "sad"
//Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0

var strStr = function(haystack, needle) {
    let sub = ''
for(let i=0; i<haystack.length; i++){
    if(haystack[i]===needle[0]){
     sub = haystack.substring(i,needle.length+i)
     if(sub===needle){
        return i
     }

    }
}
return -1;


};