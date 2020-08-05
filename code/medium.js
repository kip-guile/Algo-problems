// balanced brackets (Hackerrank)

function balancedBrackets(string) {
  let stack = []
  let open = ["[", "{", "|", "("]
  let close = ["]", "}", "|", ")"]
  for (let i = 0; i < string.length; i++) {
    if (open.includes(string[i])) {
      if (
        string[i] === "|" &&
        stack.length > 0 &&
        stack[stack.length - 1] === "|"
      ) {
        stack.pop()
      } else {
        stack.push(string[i])
      }
    } else if (close.includes(string[i])) {
      let position = close.indexOf(string[i])
      // check that stsck is empty and the open bracket is the last bracket in stack

      if (stack.length > 0 && open[position] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}

console.log(balancedBrackets("{{||[]||}}")) //true
console.log(
  balancedBrackets(
    "This is t(he la[st random sentence I will be writing |and| I am going to stop mid-sent]"
  )
) //false
console.log(balancedBrackets("[(])")) //false
