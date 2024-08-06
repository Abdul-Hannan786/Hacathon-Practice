// let str = "the quick brown fox jumps over the lazy dog."
// let str1 = "nawaz sharif takla hai."
// let str2 = "Shahbaz Sharif bhi takla or in dono ne hamara mulk kha liya hai."

// function reversedStr(para){

// let reversedStr = ""

// for(let i = para.length - 1; i >= 0; i--){
//     reversedStr += para[i]
// }

// console.log(reversedStr)
// }

// reversedStr(str)
// reversedStr(str1)
// reversedStr(str2)

// function checkPalindrome(str) {
//   let palindrome = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     palindrome += str[i];
//   }

//   if (str === palindrome) {
//     console.log(`${str} ----> Congrats its a palindrome`);
//   } else {
//     console.log(`${str} ----> Oops its not a palindrome`);
//   }
// }

// checkPalindrome("mom");
// checkPalindrome("eye");
// checkPalindrome("mother");
// checkPalindrome("kayak");
// checkPalindrome("pappa");
// checkPalindrome("wow");

// const arr = [10, 100, 35, 55, 36, 85,68, 123, 458, 30]

// function sum(array){

//    let add = array.reduce((total, item) => (
//     total + item
//    ), 0)
//    console.log(add)
// }

// sum(arr)

// const arr = [10, 100, 35, 55, 36, 85, 68, 123, 458, 30, 1000];

// let highestVal = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if(highestVal < arr[i] ){
//         highestVal = arr[i]
//     }
// }
// console.log(highestVal)

// const arr = [10, 100, 35, 55, 36, 85, 68, 123, 458, 30, 1000, 2];
// let lowestVal = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (lowestVal > arr[i]) {
//     lowestVal = arr[i];
//   }
// }
// console.log(lowestVal)

// const userNum = prompt("Write a number and check whetherr it is a prime number or not")
// let isPrimeNum = true

// function primeNumCheck(number){
//   if(number <= 1){
//     return console.log(`${number} ----> is not a prime number`)
//   }
//   else if(number > 1){
//     for(let i = 2; i < number; i++){
//         if(number % i === 0){
//           isPrimeNum = false
//           break
//         }
//         else{
//            isPrimeNum = true
//         }
//     }

//     if(isPrimeNum){
//         console.log(`${number} ----> its a prime number`)
//     }
//     else{
//         console.log(`${number} ----> its not a prime number`)
//     }
//   }
// }

// primeNumCheck(userNum)

// function simpleArraySum(numArr){
//   let sum = 0
//   for(let i = 0; i < numArr.length; i++){
//     sum += numArr[i]
//   }
//   console.log(sum)
// }
// simpleArraySum([1, 3, 6, 56, 85, 96])

// function simpleArraySum(numArr) {
//   let sum = numArr.reduce((total, num) => {
//     return total + num;
//   }, 0);
//   console.log(sum)
// }
// simpleArraySum([1, 3, 6, 56, 85, 96]);

// function compareTriplets(a, b){
//  let points = [0, 0]
//  for(let i = 0; i < a.length; i++){
//   if(a[i] > b[i]){
//      points[0]++
//   }
//   else if(a[i] < b[i]){
//     points[1]++
//   }
//  }
//  console.log(points)
// }

// compareTriplets([5, 6, 7], [3, 6, 6])

// function fizzBuzz(num) {

//   for (let i = 1; i <= num; i++) {
    
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0 && i % 5 !== 0) {
//       console.log("Fizz");
//     }
//     else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log("Buzz");
//     }
//     else{
//       console.log(i)
//     }
//   }
// }

// fizzBuzz(15);


console.log(4.0 + 4.0 + ".0")