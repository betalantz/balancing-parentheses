const Stack = require('./stack');

function balancingParentheses(string) {
  const stack = new Stack()
  // type your code here
  for (let c of string){
    if (stack.peek() == '(' && c == ')'){
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return stack.size()
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
