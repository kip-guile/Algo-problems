/*
balanced brackets (Hackerrank)
*/

function balancedBrackets(string) {
  let stack = []
  let open = ['[', '{', '|', '(']
  let close = [']', '}', '|', ')']
  for (let i = 0; i < string.length; i++) {
    //because the string can contain other chars besides brackets, check that the char is an open bracket
    if (open.includes(string[i])) {
      //handle open brackets
      // handle the |, if char is |, and the stack isnt empty and, the last item in stack is |, pop stack
      if (
        string[i] === '|' &&
        stack.length > 0 &&
        stack[stack.length - 1] === '|'
      ) {
        stack.pop()
        // else push the char (open bracket) into stack
      } else {
        stack.push(string[i])
      }
      //handle if char is a close bracket
    } else if (close.includes(string[i])) {
      //find the index of the bracket
      let position = close.indexOf(string[i])
      // check that stack is not empty and the equivalent open bracket is the last bracket in stack
      //if it is pop, else return false because it means the brackets are unbalanced
      if (stack.length > 0 && open[position] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  //after iteration, if stack is empty it means brackets are balanced, ergo return true
  //return false otherwise
  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}

// console.log(balancedBrackets("{{||[]||}}")) //true
// console.log(
//   balancedBrackets(
//     "This is t(he la[st random sentence I will be writing |and| I am going to stop mid-sent]"
//   )
// ) //false
// console.log(balancedBrackets("[(])")) //false

/*
Three number Sum
Write a function that takes in a non-empty array of distinct integers and a target integer. Your function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. Each inner array containing a single triplet should have all three of its elements ordered in ascending order. The triplets themselves should be ordered in ascending order by the first triplet element. If two triplet elements have the same first element, then they should be ordered such that the smaller second element comes first. If two triplet elements have the same first and second elements, then they should be ordered such that the smaller third element comes first.
If no such triplets can be found in the array, your function should return an empty array.
Example 1:
Input: [12, 3, 1, 2, -6, 5, -8, 6], 0
Expected Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
Example 2:
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30 Expected Output: [[6, 9, 15], [7, 8, 15]]
*/

//the idea is there are 3 numbers in the arr, that add up to the target, so loop through the array
//for every index, find the result of the target minus element at that index
//then loop through the array again and check if the result minus that element at that new index is in the lookup table
//if it is, push [i, j, and second remainder] into res
// else, add arr[j] to lookup. Idea being that we'll be adding elements to the lookup and at some point,
// we'll come accross three indexes such that i, j, + secondremainder (if it is in lookup) will equal target
function threeNumberSum(arr, target) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let lookup = new Set()
    let firstremainder = target - arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      let secondremainder = firstremainder - arr[j]
      if (lookup.has(secondremainder)) {
        res.push([arr[i], secondremainder, arr[j]].sort((a, b) => a - b))
      } else {
        lookup.add(arr[j])
      }
    }
  }
  return res
}

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
// console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30))

// Given a non - empty array of integers, return the k most frequent elements.

//   Example 1:

// Input: nums = [1, 1, 1, 2, 2, 3], k = 2
// Output: [1, 2]

var topKFrequent = function (nums, k) {
  let lookup = {}
  for (let i = 0; i < nums.length; i++) {
    if (lookup[nums[i]] !== undefined) {
      lookup[nums[i]] += 1
    } else {
      lookup[nums[i]] = 1
    }
  }
  let freqs = []
  for (let i = 0; i < k; i++) {
    let max = 0
    let newkey
    for (const key in lookup) {
      if (lookup[key] > max) {
        max = lookup[key]
        newkey = key
      }
    }
    freqs.push(newkey)
    delete lookup[newkey]
  }
  return freqs
}

/* Task: Get the length of the longest sentence in a given paragraph. 
Sentences are marked by periods(.), commas(,) and exclamation points(!).
*/
const S =
  'This  is..Some other phrase. . x D. This is the longest sentence at eight words.'

function solution(S) {
  const lengths = S.split(/[.,!]/).map((sentenceArr) => {
    const onlyWords = sentenceArr.split(' ').filter((word) => word.length > 0)
    return onlyWords.length
  })

  const maxNumOfWords = Math.max(...lengths)

  console.log(maxNumOfWords)

  return maxNumOfWords
}

// solution(S)
