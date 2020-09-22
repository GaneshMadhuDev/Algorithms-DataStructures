
/*** Bottom Left Node Value **/

function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

function bfsTraversal(root) {
	let queue = [];
  let traversal = [];
  let nodesDepth = new Map();
  queue.push(root);
  traversal.push(root);
  nodesDepth.set(root, 1);
  let maxDepth = 1;

  while(queue.length > 0){
  	let node = queue.shift();
    let children = [node.left, node.right];
    let parentDepth = nodesDepth.get(node);
    children.forEach((child) => {
      if(child !== null){
        if(!nodesDepth.has(child)){
          queue.push(child);
          traversal.push(child);
          nodesDepth.set(child, parentDepth + 1);
          if(parentDepth + 1 > maxDepth){
            maxDepth = parentDepth + 1;
          }
        }
      }

    });
  }

  return [traversal, nodesDepth, maxDepth];
}

function bottomLeftNodeVal(root) {
  // Fill in this method
  let bfs = bfsTraversal(root);
  let traversal = bfs[0];
  let nodesDepth = bfs[1];
  let treeDepth = bfs[2];
  let bottomNodes = traversal.filter(node => {
  	return nodesDepth.get(node) === treeDepth;
  });
  return bottomNodes[0].val;
}

var tree3 = new Node(6);
tree3.left = new Node(3);

console.log(bottomLeftNodeVal(tree3));