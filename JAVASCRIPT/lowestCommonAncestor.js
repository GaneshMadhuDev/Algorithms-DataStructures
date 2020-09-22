

/*** Program to return a lowest common ancestor **/


function lowestCommonAncestor(root, node1, node2) {

  if (root.val > node1 && root.val > node2) {
    return lowestCommonAncestor(root.left, node1, node2);
  } else if (root.val < node1 && root.val < node2) {
    return lowestCommonAncestor(root.right, node1, node2);
  } else {
    return root.val;
  }

}