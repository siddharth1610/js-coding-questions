//11----------------find the sum
const findSum=(num)=>{
    let sum=0
    while(num>0){
        lastDigit=num%10
        sum+=lastDigit
        num=Math.floor(num/10)
    }
    return sum
}

console.log(findSum(1234));

//12---------------------remove duplicates

const duplicates=(arr)=>{
    let digits = arr.filter((index,item)=>arr.indexOf(index)===item)
    return digits.sort((a,b)=>a-b)


}

console.log(duplicates([23,4,34,1,2,3,2,1,5]));

//13-------------------------count vowels

const countVowel =(str)=>{
    let vowels =["a","e","i","o","u"]

    let arr=str.toLowerCase().split("")
   
    

    let count =0
    for(let char of arr){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(countVowel("helloo world"));

//14--------------------is poweroftwo
const isPowerOfTwo=(num)=>{
    let op=false
    for(let i=1;i<=num;i++){
        if(2**i==num){
            op=true
        }
    }
    return op
}

console.log(isPowerOfTwo(8));

//15----------sumOfSquare

const sumOfSquare =(arr)=>{
    let sum =0
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i]*arr[i]
       
        
    }
    return sum
}

console.log(sumOfSquare([1,2,3]));
