/*
Remove The Elements
remove elements matching a target value from an array using in-place operations and minimal extra space. 

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

const arr = [0,1,2,2,3,0,4,2];
const val = 2;
function removeElements(arr,val){
    let x =0;
    for(let i = 0; i < arr.length;i++){
        // Shift the elements to left if it is not equal to val 
        if(arr[i] !== val){
            arr[x] = arr[i];
            x = x+ 1;
        }
    }
    return x;
}
console.log(removeElements(arr,val))