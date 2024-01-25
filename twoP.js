/** 
Problem 1 
Implement a function that checks if a given array of integers is sorted in non-decreasing order. Use the two pointers approach to solve this problem efficiently.
 * @param {number[]} nums
 * @returns {boolean}

*/
function isSorted(nums) {
    for (let i = 1;i < nums.length; i++){
        if (nums[i-1] > nums[i]){
            return false
        }
    }
return true
}



// Example
console.log(isSorted([1, 2, 3, 4, 5]));  // Should return true
console.log(isSorted([5, 3, 7, 8, 10]));  // Should return false

/**  
Problem 2 
Given a sorted array of distinct integers and a target sum, find a pair of elements in the array that add up to the target sum. Implement the solution using the two pointers technique.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSumPair(nums, target) {
    let left = 0
    let right = nums.length - 1
while (left < right){
    let sum = nums[left] + nums[right]
    if (sum === target){
        pair = [nums[left], nums[right]]
        return pair  
} else if (sum < target){
    left++
} else if (sum > target){
    right--
}
}
}




// Example
console.log(twoSumPair([1, 2, 3, 4, 5], 9));  // Should return [4, 5]
console.log(twoSumPair([-1, 0, 2, 5, 7], 5));  // Should return [-2, 7]