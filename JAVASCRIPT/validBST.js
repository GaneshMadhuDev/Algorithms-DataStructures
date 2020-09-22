

/** program to validate valid BST or not ***/

function isValidBST(root) {
  // Check left node
  if (root.left) {
  	if (root.left.val > root.val) {
    	return false;
    } else {
    	isValidBST(root.left);
    }
  }

  // Check right node
  if (root.right) {
  	if (root.right.val < root.val) {
      return false;
    } else {
      isValidBST(root.right);
    }
  }

  return true;
}