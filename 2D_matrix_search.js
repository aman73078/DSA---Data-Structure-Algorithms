// 🧩 Problem: Search in 2D Matrix
// 📄 Description

// You are given an m x n integer matrix with the following properties:

// Each row is sorted in ascending order
// The first integer of each row is greater than the last integer of the previous row

// Given an integer target, return true if the target exists in the matrix, otherwise return false.

// 📥 Input
// A 2D array matrix of size m x n
// An integer target
// 📤 Output
// true → if target is found
// false → otherwise
// 🧪 Example
// Input:
// matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 36, 60]
// ]
// target = 10

// Output:
// true
// ❌ Another Example
// Input:
// matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 36, 60]
// ]
// target = 13

// Output:
// false
// ⚡ Constraints
// 1 ≤ m, n ≤ 100
// -10^4 ≤ matrix[i][j] ≤ 10^4
// All rows are sorted
// Matrix follows the row-wise sorted + next row greater property

const matrix = [[1,3,5,7], [10,11,16,20], [23, 30, 36, 60]];

function searchIn2DMatrix(target, matrix){
    let left = 0;
    let right = (matrix.length * matrix[0].length) - 1;
    const row = matrix.length;
    const column = matrix[0].length;

    while(left <= right){
        let midIndex = Math.floor(left + (right-left)/2);
        let midElement = matrix[Math.floor(midIndex/column)][Math.floor(midIndex%column)];
        if(midElement === target){
            return true;
        }else if(midElement > target){
            right = midIndex - 1;
        }else {
            left = midIndex + 1;
        }
    }
    return false;
}

console.log(`Result of searchIn2DMatrix : ${searchIn2DMatrix(10, matrix)}`);
console.log(`Result of searchIn2DMatrix : ${searchIn2DMatrix(13, matrix)}`);
