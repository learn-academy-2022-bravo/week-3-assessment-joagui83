// ASSESSMENT 3: Coding Practical Questions with Jest

// const { number, array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.



describe("fibArr", () => {
    it("takes a number greater than 2 and returns Fibonacci sequence in an array", () => {
        const num1 = 6
        const num2 = 10
        

    expect(fibArr(num1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibArr(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    
})
})


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// FAIL  ./code-challenges.test.js
// fibArr
//   ✕ takes in a string and logs the index of the first vowel
// findFirstVowel
//   ✕ takes in a string and logs the index of the first vowel

// ● fibArr › takes in a string and logs the index of the first vowel

//   ReferenceError: fibArr is not defined








//----------------------------- PSEUDO CODE

// create a function called fibArr 
// create empty array 
// set up a for loop
// use fibonacci number sequence in JS


// b) Create the function that makes the test pass.


const num1 = 6
const num2 = 10
const  fibArr= (n) => {

    const result = [1, 1];
    for (let i = 2; i < n; i++) 
        if (n>2) {
            result.push(result[i-2] + result[i-1] );
    }
    return result; 
}

// PASS  ./code-challenges.test.js
// fibArr
//   ✓ takes a number greater than 2 and returns Fibonacci sequence in an array (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.141 s, estimated 1 s

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("lowHiNeg", () => {
    it("takes in an array and returns an new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

        

    expect(lowHiNeg(fullArr1, "number")).toEqual([-9, 7, 9, 199])
    expect(lowHiNeg(fullArr2, "number")).toEqual([-823, 7, 23])
    
})
})


// FAIL  ./code-challenges.test.js
// fibArr
//   ✓ takes a number greater than 2 and returns Fibonacci sequence in an array (1 ms)
// lowHiNeg
//   ✕ takes in an array and returns an new array of only odd numbers sorted from least to greatest

// ● lowHiNeg › takes in an array and returns an new array of only odd numbers sorted from least to greatest

// b) Create the function that makes the test pass.


//-------------------------------------- PSEUDO CODE
// create a function called hiloNeg that takes in array
// use .filter to filter dataType of numbers then filter the odd numbers 
// use sort to sort new array from lowest to highest 



const lowHiNeg = (array, dataType) => {

    let final = array.filter((value) => {
        return typeof value === dataType})
            let finalArr = final.filter((value) => value % 2 != 0)
                .sort((a,b) => a-b)
                return finalArr
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.



describe("cumulativeSum", () => {
    it("takes in an array of accumulating sum", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        const numbersToAdd2 = [0, 7, -8, 12]
        const numbersToAdd3 = []

    expect(cumulativeSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(cumulativeSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(cumulativeSum(numbersToAdd3)).toEqual([])

    
})
})



// PASS  ./code-challenges.test.js
// fibArr
//   ✓ takes a number greater than 2 and returns Fibonacci sequence in an array (1 ms)
// lowHiNeg
//   ✓ takes in an array and returns an new array of only odd numbers sorted from least to greatest
// cumulativeSum
//   ✓ takes in an array of accumulating sum (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total





// b) Create the function that makes the test pass.

//------------------------- Pseudo 

// create function cumulativeSum
// use arr paramater
// resourced cumalative sum that can return an empty array. !== [undefined]


const numbersToAdd1 = [2, 4, 45, 9];
const numbersToAdd2 = [0, 7, -8, 12];
const numbersToAdd3 = [];

const cumulativeSum = (arr) =>
    arr.map(
        (
            (sum) => (value) =>
                (sum += value)
        )(0)
    );
//console.log(accumulate(numbersToAdd3))
