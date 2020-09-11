


// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root
// node down to the farthest leaf node.


function TreeNode(val: any) {

  this.val = val;
  this.left = this.right = null;

}

function MaxDepth(root, count): number {

  if (!root) return 0;

  const first = MaxDepth(root.left, count);
  const sec = MaxDepth(root.right, count);

  return Math.max(first, sec) + 1;

}

const t = new TreeNode(1);
const t2 = new TreeNode(2);
const t3 = new TreeNode(3);

//           t1
//         /   \
//       t2     null
//      / \
//   null  t3

t.left = t2.right = t3;

// MaxDepth(t, 0)