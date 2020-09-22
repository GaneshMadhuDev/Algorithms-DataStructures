

/** program to find the sum of two numbers in BST ****/


function inOrder(root) {
  if (!root) {
    return [];
  } else if (!root.left && !root.right) {
    return [root.val];
  } else {
    return [...inOrder(root.left), root.val, ...inOrder(root.right)];
  }
}



function twoSumFromBST(root, target) {
  const arr = inOrder(root);
  let start = 0;
  let end = arr.length - 1;
  console.log(arr);
  while (start < end) {
    if (arr[start] + arr[end] == target) {
      return true;
    } else if (arr[start] + arr[end] < target) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return false;
}