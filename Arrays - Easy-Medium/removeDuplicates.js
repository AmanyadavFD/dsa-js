/*
Remove Duplicates 
arr : [0,0,1,1,1,2,2,3,3,4];
*/

const arr = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates(arr){
 let x = 0;
 for(let i = 0; i < arr.length; i++){
    // console.log(arr[i])
    if(arr[i] > arr[x]){
        x = x + 1;
        arr[x] = arr[i];
    }
 }
 return x + 1;

//  for(let j = 0; j <= x; j++){
//     console.log(arr[j])
//  }
}
const result =  removeDuplicates(arr);
console.log(result);