/*
Write a function that receives as input the head node of a linked list and an integer k. Your function should remove the kth node from the end of the linked list and return the head node of the updated list.
For example, if we have the following linked list:
  (20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (14) -> (13) -> (12) -> (11) -> null

The head node would refer to the node (20) . Let k = 4 , so our function should remove the 4th node from the end of the linked list the node (14)

So after the function executes, the state of the linked list should be:
(20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (13) -> (12) -> (11) -> null .
If k is longer than the length of the linked list, the linked list should not be changed.
*/

//strategy:
//first get length of list
//then get the distance of the kth node from the head, by subtracting kth node from head
//traverse the list till we get to the node before kth node, then move the next over

function removeKthLinkedListNode(head, k) {
  //if list is empty, or target is less than 1, return null
  if (head === null || k < 1) return null
  //initializations
  let curr = head
  let count = 0
  //traverse list and update count to get the length of the list.
  while (curr != null) {
    curr = curr.next
    count += 1
  }
  //reset curr
  curr = head
  //return head if target is greater than count, because it means nothing is meant to be removed
  if (k > count) return head
  //find the position from the head to the target.
  let kthToLast = count - k
  // handle case when target is the first node.
  //if kthtolast === 0, it means target is first node, so move head to next and return head
  if (kthToLast === 0) {
    head = head.next
    return head
  }
  // traverse the list until the node before the node we want to delete
  let newCount = 0
  while (newCount !== kthToLast - 1) {
    curr = curr.next
    newCount += 1
  }
  console.log(curr.data)
  // move next to the next node, (skip the node we want to delete): it will get garbage collected.
  curr.next = curr.next.next
  return head
}

/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

//SORT IN PLACE

var removeDuplicates = function (nums) {
  let slow_index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[slow_index]) {
      slow_index += 1
      nums[slow_index] = nums[i]
    }
  }
  return slow_index + 1
}

// console.log(removeDuplicates([1, 1, 1, 3, 4, 4, 5, 2])) //2

/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
*/

var firstUniqChar = function (s) {
  let lookup = {}
  for (let i = 0; i < s.length; i++) {
    if (lookup[s[i]]) {
      lookup[s[i]][0] += 1
    } else {
      lookup[s[i]] = [1, i]
    }
  }
  for (const key in lookup) {
    if (lookup[key][0] === 1) {
      return lookup[key][1]
    }
  }
  return -1
}

// console.log(firstUniqChar("leetcode"))

/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16
*/
let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]
var islandPerimeter = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count += 4
        if (j - 1 >= 0 && grid[i][j - 1] === 1) count -= 2
        if (i - 1 >= 0 && grid[i - 1][j] === 1) count -= 2
      }
    }
  }
  return count
}

console.log(islandPerimeter(grid))

/*
Find consecutive ones
*/

var findMaxConsecutiveOnes = function (nums) {
  let arr = []
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      arr.push(1)
    } else {
      if (arr.length > count) {
        count = arr.length
      }
      arr = []
    }
  }
  if (arr.length > count) return arr.length
  return count
}

/*
Find count of numbers with even number of digits
*/

var findNumbers = function (nums) {
  let evenCount = 0
  for (let i = 0; i < nums.length; i++) {
    let digiCount = 0
    while (nums[i] >= 1) {
      nums[i] = nums[i] / 10
      digiCount += 1
    }
    if (digiCount % 2 === 0) {
      evenCount += 1
    }
  }
  return evenCount
}

/*Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.



Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/

var sortedSquares = function (A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i] * A[i]
  }
  return A.sort((a, b) => a - b)
}

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1, 0, 2, 3, 0, 4, 5, 0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1, 0, 0, 2, 3, 0, 0, 4]

var duplicateZeros = function (arr) {
  let newArr = []
  arr.forEach((el) => {
    newArr.push(el)
  })
  let temp = 0
  let i = 0
  while (i < arr.length) {
    if (!newArr[temp]) {
      arr[i] = 0
      i += 1
      if (i < arr.length) arr[i] = 0
    } else {
      arr[i] = newArr[temp]
    }
    temp += 1
    i += 1
  }
  console.log(arr)
}

// You are a professional robber planning to rob houses along a street.Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non - negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

//   Example 1:

// Input: nums = [1, 2, 3, 1]
// Output: 4
// Explanation: Rob house 1(money = 1) and then rob house 3(money = 3).
// Total amount you can rob = 1 + 3 = 4.

var rob = function (nums) {
  let memo = {}
  function choose(nums, i) {
    if (i < 0) {
      return 0
    }
    if (memo[i] !== undefined) {
      return memo[i]
    }
    let ans = Math.max(nums[i] + choose(nums, i - 2), choose(nums, i - 1))
    memo[i] = ans
    return ans
  }
  return choose(nums, nums.length - 1)
}
