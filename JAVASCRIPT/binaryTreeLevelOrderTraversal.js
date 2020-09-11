



function levelOrder(root) {

  if (!root) return [];

  const queue = [];
  queue.push(root);
  const ans = [];
  const depths = new Map();
  depths.set(root, 0);
  let prev;
  let arr = [];
  while (queue.length) {
    const item = queue.shift();
    const depth = depths.get(item);
    if (!prev || (prev && depths.get(prev) !== depths.get(item))) {
      arr = [];
      ans.push(arr);
    }
    arr.push(item.val);
    if (item.left) {
      depths.set(item.left, depth + 1);
      queue.push(item.left);
    }
    if (item.right) {
      depths.set(item.right, depth + 1);
      queue.push(item.right);
    }
    prev = item;
  }
  return ans;

}


// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]
