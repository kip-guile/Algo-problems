/*
balanced brackets (Hackerrank)
*/

function balancedBrackets(string) {
  let stack = []
  let open = ["[", "{", "|", "("]
  let close = ["]", "}", "|", ")"]
  for (let i = 0; i < string.length; i++) {
    //because the string can contain other chars besides brackets, check that the char is an open bracket
    if (open.includes(string[i])) {
      //handle open brackets
      // handle the |, if char is |, and the stack isnt empty and, the last item in stack is |, pop stack
      if (
        string[i] === "|" &&
        stack.length > 0 &&
        stack[stack.length - 1] === "|"
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

function threeNumberSum(arr, target) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let lookup = new Set()
    let check = target - arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      let newcheck = check - arr[j]
      if (lookup.has(newcheck)) {
        res.push([arr[i], newcheck, arr[j]].sort((a, b) => a - b))
      } else {
        lookup.add(arr[j])
      }
    }
  }
  return res
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30))
