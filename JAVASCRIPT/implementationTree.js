


class Tree {
  constructor() {
    this.head = {
      val: "",
      children: {},
    };
  }

  add(val) {
    let currentNode = this.head,
      newNode = null,
      currentChar = val.slice(0, 1);

    val = val.slice(1);

    while (
      typeof currentNode.children[currentChar] !== "undefined" &&
      currentChar.length > 0
    ) {
      currentNode = currentNode.children[currentChar];
      currentChar = val.slice(0, 1);
      val = val.slice(1);
    }

    while (currentChar.length) {
      newNode = {
        val: currentChar,
        value: val.length === 0 ? null : undefined,
        children: {},
      };

      currentNode.children[currentChar] = newNode;

      currentNode = newNode;

      currentChar = val.slice(0, 1);
      val = val.slice(1);
    }
  }

  search(val) {
    let currentNode = this.head,
      currentChar = val.slice(0, 1),
      depth = 0;

    val = val.slice(1);

    while (
      typeof currentNode.children[currentChar] !== "undefined" &&
      currentChar.length > 0
    ) {
      currentNode = currentNode.children[currentChar];
      currentChar = val.slice(0, 1);
      val = val.slice(1);
      depth += 1;
    }

    if (currentNode.value === null && val.length === 0) {
      return depth;
    } else {
      return -1;
    }
  }

  remove(val) {
    function removeHelper(node, val, depth) {
      if (depth === 0 && Object.keys(node.children).length === 0) {
        return true;
      }

      let currentChar = val.slice(0, 1);

      if (removeHelper(node.children[currentChar], val.slice(1), depth - 1)) {
        delete node.children[currentChar];
        if (Object.keys(node.children).length === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    let depth = this.search(val);
    if (depth) {
      removeHelper(this.head, val, depth);
    }
  }
}


class Tree {
  constructor() {
    this.head = {
      val: "",
      children: {},
    };
  }

  add(val) {
    let currentNode = this.head,
      newNode = null,
      currentChar = val.slice(0, 1);

    val = val.slice(1);

    while (
      typeof currentNode.children[currentChar] !== "undefined" &&
      currentChar.length > 0
    ) {
      currentNode = currentNode.children[currentChar];
      currentChar = val.slice(0, 1);
      val = val.slice(1);
    }

    while (currentChar.length) {
      newNode = {
        val: currentChar,
        value: val.length === 0 ? null : undefined,
        children: {},
      };

      currentNode.children[currentChar] = newNode;

      currentNode = newNode;

      currentChar = val.slice(0, 1);
      val = val.slice(1);
    }
  }

  search(val) {
    let currentNode = this.head,
      currentChar = val.slice(0, 1),
      depth = 0;

    val = val.slice(1);

    while (
      typeof currentNode.children[currentChar] !== "undefined" &&
      currentChar.length > 0
    ) {
      currentNode = currentNode.children[currentChar];
      currentChar = val.slice(0, 1);
      val = val.slice(1);
      depth += 1;
    }

    if (currentNode.value === null && val.length === 0) {
      return depth;
    } else {
      return -1;
    }
  }

  remove(val) {
    function removeHelper(node, val, depth) {
      if (depth === 0 && Object.keys(node.children).length === 0) {
        return true;
      }

      let currentChar = val.slice(0, 1);

      if (removeHelper(node.children[currentChar], val.slice(1), depth - 1)) {
        delete node.children[currentChar];
        if (Object.keys(node.children).length === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    let depth = this.search(val);
    if (depth) {
      removeHelper(this.head, val, depth);
    }
  }
}