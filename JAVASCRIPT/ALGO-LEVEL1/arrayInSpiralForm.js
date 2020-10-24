function spiralParser(inputMatrix){
  const output = [];
  let rows = inputMatrix.length;
  let cols = rows > 0 ? inputMatrix[0].length : 0;

  //singleEmptyRow => Edge case 1 //[]
  if (rows === 0) {
    return []
  }

  if (rows === 1) {
    //singleElementRowNoCol => Edge case 2 //[[]]
    if (cols === 0) {
      return []
    } else if (cols === 1){
      //singleElementRow => Edge case 3 //[[1]]
      output.push(inputMatrix[0][0])
      return output
    }
  }

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;
  let direction = 0;
  //0 => left->right
  //1 => top->bottom
  //2 => right->left
  //3 => bottom->top

  while(left <= right && top <= bottom) {
    if(direction === 0) {
      //left->right
      for (let i=left; i<=right;i++) {
        output.push(inputMatrix[top][i])
      }
      top++;
    } else if (direction === 1) {
      //top->bottom
      for (let i=top; i<=bottom;i++) {
        output.push(inputMatrix[i][right])
      }
      right--
    } else if (direction === 2) {
      //right->left
      for (let i=right; i>=left;i--) {
        output.push(inputMatrix[bottom][i])
      }
      bottom--
    } else if (direction === 3) {
      //bottom->top
      for (let i=bottom; i>=top;i--) {
        output.push(inputMatrix[i][left])
      }
      left++
    }
    direction = (direction + 1) % 4
  }
  return output;
}

console.log(spiralParser(inputMatrix2))

const inputMatrix = [
  [1, 2, 3, 4,  5],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
]

const exprectOutput = [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]