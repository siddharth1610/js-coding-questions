//1------------find the longest word

// let longWord=(str)=>{
// if(str.trim().length===0){
//     return false
// }
// let word = str.split(" ")
// word=word.sort((a,b)=>b.length-a.length)
// // console.log(word);
// return word[0]
// }

// console.log(longWord("hello i am siddharth"));

//2---------------hashTagGenerator

// const hashTage=(str)=>{
//     if(str.length>280 || str.trim().length===0){
//         return false
//     }

//     let word = str.split(" ")
//     word=word.map((ele)=>{
//         return ele.charAt(0).toUpperCase() + ele.slice(1)
//     })
//     console.log(word)
//     word = `#${word.join(" #")}`

//     return word

// }

// console.log(hashTage("hello i am siddhaRT"))

//3------Count the occurence of alphabet

// const countOc = (word, char)=>{
// let w = word.toLowerCase()
// let c = char.toLowerCase()

// let count =0
// for(let i=0;i<=w.length;i++){
//     if(w[i]=== c){
//         count++
//     }
// }
// return count
// }
// console.log(countOc("HELLOo","o"));

//4----------checkTriangleType

// const checkTriangle=(a,b,c)=>{
// if(a===b && b===c && c===a)return "Equilateral"
// if(a===b || b===c || c===a)return "isoceles"
// return "scalene"
// }
// console.log(checkTriangle(4,4,0));
// console.log(checkTriangle(4,5,4));
// console.log(checkTriangle(1,2,3));

//5---------------sort an array

// const sort=(ar,a)=>{
//     let arr = [...ar,...a]
//bubble sort
//     for(let j=0;j<arr.length;j++){
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){

//                 let temp = arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//             }
//         }
//     }
//     return arr
// }

// console.log(sort([54,432,32,8],[89,4,34]));

//6------------------plaindrome

const findPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(findPalindrome("naman"));

//7--------------- findMax
const findMax = (num) => {
  let highest = 0;
  for (let i = 0; i <= num.length; i++) {
    if (num[i] > highest) {
      highest = num[i];
    }
  }
  return highest;
};

console.log(findMax([32, 546, 67, 89]));

//8----------------gcd (factorial)

const fact = (a, b) => {
  let ans = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      ans = i;
    }
  }
  return ans;
};
console.log(fact(24, 28));

//9----------------------calcAvg

const calcAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAvg([5, 10, 2, 8]));

//10------------------------------array are equal

const arrEqual = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]){
        return false
    } 
  }
  return true;
};

console.log(arrEqual([1,1,1],[1,2,1]));
