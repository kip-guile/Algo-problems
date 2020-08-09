/*
Write a function that receives as input the head node of a linked list and an integer k. Your function should remove the kth node from the end of the linked list and return the head node of the updated list.
For example, if we have the following linked list:
  (20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (14) -> (13) -> (12) -> (11) -> null

The head node would refer to the node (20) . Let k = 4 , so our function should remove the 4th node from the end of the linked list the node (14)

So after the function executes, the state of the linked list should be:
(20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (13) -> (12) -> (11) -> null .
If k is longer than the length of the linked list, the linked list should not be changed.
*/

function removeKthLinkedListNode(head, k) {
  //if list is empty, or target is less than 1, return null
  if (head === null || k < 1) return null
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
