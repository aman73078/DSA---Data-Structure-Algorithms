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


// 🧩 PART 3: 2D Matrix Search (Q121–Q180)
// 🟢 Linear Search in Matrix

// Q121. Search element in matrix
/*📄 Problem
        Given a 2D matrix and a target value, return true if the target exists in the matrix, otherwise return false.

        You can assume:

        Matrix can be any size (m x n)
        Elements are not necessarily sorted
        🧪 Example
        Input:
        matrix = [
        [1, 2, 3],
        [4, 5, 6]
        ]
        target = 5

        Output:
        true
*/

const searchElementInMatrix = (target, matrix) => {
    let left = 0;
    let right = (matrix.length * matrix[0].length)-1;
    const row = matrix.length;
    const column = matrix[0].length;

    while(left <= right){
        let midIndex = Math.floor(left + (right-left)/2);
        let midElement = matrix[Math.floor(midIndex/column)][Math.floor(midIndex%column)];
        if(midElement === target){
            return true;
        }else if(midElement < target){
            left = midIndex + 1;
        }else {
            right = midIndex - 1;
        }
    }
    return false;
}

console.log(`Result of searchElementInMatrix : ${searchElementInMatrix(5,[[1,2,3],[4,5,6]])}`);
console.log(`Result of searchElementInMatrix : ${searchElementInMatrix(8,[[1,2,3],[4,5,6]])}`);

// Complexity
// Time -- O(m*n)
// Space -- O(1)

const searchElementInMatrix1 = (target, matrix, left=0, right=(matrix.length*matrix[0].length)-1) => {
    if(left > right) return false;
    let column = matrix[0].length;
    let midIndex = Math.floor(left + (right-left)/2);
    let midElement = matrix[Math.floor(midIndex/column)][Math.floor(midIndex%column)];
    return midElement === target ? true : midElement < target ? searchElementInMatrix1(target, matrix, midIndex+1, right) : searchElementInMatrix1(target, matrix, left, midIndex-1);
}

console.log(`Result of searchElementInMatrix1 : ${searchElementInMatrix1(5,[[1,2,3],[4,5,6]])}`);
console.log(`Result of searchElementInMatrix1 : ${searchElementInMatrix1(8,[[1,2,3],[4,5,6]])}`);

// Complexity
// Time -- O(logm*n)
// Space -- O(logm*n)

// Q122. Count occurrences
/*  📄 Problem
            Given a 2D matrix and a target value, return the number of times the target appears in the matrix.

            Matrix is not necessarily sorted
            You need to count all occurrences
            🧪 Example
            Input:
            matrix = [
            [1, 2, 3],
            [2, 2, 4]
            ]
            target = 2

            Output:
            3
*/

// Q123. Find max element
// Q124. Find min element
// Q125. Row-wise sum
// Q126. Column-wise sum
// Q127. Count even numbers
// Q128. Count odd numbers
// Q129. Count positives/negatives
// Q130. Check if element exists

// 🟡 Binary Search in Matrix

// Q131. Search in 2D matrix (flattened)
// Q132. First occurrence in matrix
// Q133. Last occurrence in matrix
// Q134. Count occurrences
// Q135. Recursive binary search matrix
// Q136. Find row containing target
// Q137. Find column containing target
// Q138. Closest element in matrix
// Q139. Range of element in matrix
// Q140. Search insert position matrix

// 🔵 Row-wise / Column-wise Sorted Matrix

// Q141. Search in row-wise sorted matrix
// Q142. Search in column-wise sorted matrix
// Q143. Start from top-right search
// Q144. Count elements less than target
// Q145. Count elements greater than target
// Q146. Find max in each row
// Q147. Find min in each column

// 🟣 Recursive Matrix

// Q148. Recursive matrix traversal
// Q149. Recursive search
// Q150. Recursive sum
// Q151. Recursive count
// Q152. Recursive max
// Q153. Recursive min
// Q154. Recursive diagonal sum
// Q155. Recursive boundary traversal

// 🔥 Mixed Practice

// Q156. Flatten matrix and search
// Q157. Convert matrix to 1D array
// Q158. Check sorted matrix
// Q159. Find duplicate in matrix
// Q160. Find missing element in matrix