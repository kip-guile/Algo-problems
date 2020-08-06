;```
balanced brackets (Hackerrank)
```

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
