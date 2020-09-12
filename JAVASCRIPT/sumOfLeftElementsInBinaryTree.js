

// Find the sum of all left leaves in a given binary tree


//   3
// /   \
// 9    20
//    /   \
//   15   7


const sumOfLeftLeavesAux = (root, sum, isLeft) => {
  if (root === null) return 0;
  if (!root.left && !root.right && isLeft) return root.val;
  if (root.left) sum += sumOfLeftLeavesAux(root.left, 0, true);
  if (root.right) sum += sumOfLeftLeavesAux(root.right, 0, false);
  return sum;
};

function sumOfLeftLeaves(root) {
  return sumOfLeftLeavesAux(root, 0, false);
}

// output => 24