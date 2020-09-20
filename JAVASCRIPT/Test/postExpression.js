
/*** Postfix notation (operators are placed on the left of their operands) **/

function reversePolish(newExpr) {

  let expr = newExpr.split(" ");
  let stack =[];
   if(expr === ''){
    return 0;
  }

  for(let i=0; i<expr.length; i++) {
    if(!isNaN(expr[i]) && isFinite(expr[i])) {
      stack.push(expr[i]);

    }else {
      let a = stack.pop();
      let b = stack.pop();
      if(expr[i] === "+") {
        stack.push(parseInt(a) + parseInt(b));
      } else if(expr[i] === "-") {
          stack.push(parseInt(b) - parseInt(a));
        } else if(expr[i] === "*") {
            stack.push(parseInt(a) * parseInt(b));
        } else if(expr[i] === "/") {
            stack.push(parseInt(b) / parseInt(a));
        } else if(expr[i] === "^") {
            stack.push(Math.pow(parseInt(b), parseInt(a)));
        }
    }
  }

  if(stack.length > 1) {
    return "ERROR";
  }else {
    return stack[0];
  }

}

console.log(reversePolish('1 3 5 * -'));  // Result: -14