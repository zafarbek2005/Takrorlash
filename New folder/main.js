 // N 1

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)



// function getSum(n){
//     if(n < 0) {
//         return 0;
//     }
//     let multiples = [];
//     for (let i = 1; i < n; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             multiples.push(i);
//         }
//     }
//     return multiples.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(getSum(15)); 


// N 2

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// function reverseWords(str) {
//     return str.split(' ').map(word => {
//         if (word.length >= 5) {
//             return word.split('').reverse().join('');
//         } else {
//             return word;
//         }
//     }).join(' ');
// }

// console.log(reverseWords("Hey fellow warriors"));

// N 3

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


// function createPhoneNumber(numbers) {
//         const areaCode = numbers.slice(0, 3).join('');
//     const firstPart = numbers.slice(3, 6).join('');
//     const secondPart = numbers.slice(6, 10).join('');
    
//     return `(${areaCode}) ${firstPart}-${secondPart}`;
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   const phoneNumber = createPhoneNumber(numbers);
//   console.log(phoneNumber);    


// N 4

// Xush kelibsiz. Ushbu katada sizdan raqamning har bir raqamini kvadratga kiritish va ularni birlashtirish so'raladi.

// Masalan, funksiya orqali 9119 ni ishlatsak, 811181 chiqadi, chunki 9 2 81 va 1 2 1. (81-1-1-81)

// 2-misol: 765 kiritilishi 493625 ni qaytaradi/kerak, chunki 7 2 49, 6 2 36 va 5 2 25. (49-36-25)

// Eslatma: Funktsiya butun sonni qabul qiladi va butun sonni qaytaradi.

let sum =[]
function squareDigits(num){
 for(let i=1; i<num; i++){
    sum=i**2
 }
 return sum
  }
  console.log(squareDigits(215));


// N 5


// Multiply

// function multiply(a, b){
//     return a*b
//    }
//    console.log(multiply(5,8))