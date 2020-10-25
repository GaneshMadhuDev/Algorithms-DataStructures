

/**
 * LINKED LIST
 */
function LinkedList() {
  this._head = this._tail = null;
}

LinkedList.prototype = {
  createNode: function(data, next) {
    return {
      data: (data || null),
      next: (next || null)
    };
  },

  addToHead: function(data) {
    var node = this.createNode(data);

    if(this._head === null) {
      this._head = this._tail = node;
    }
    else {
      node.next = this._head;
      this._head = node;
    }

    return this;
  },

  addToTail: function(data) {
    var node = this.createNode(data);

    if(this._head === null) {
      this._head = this._tail = node;
    }
    else {
      this._tail.next = node;
      this._tail = node;
    }

    return this;
  },

  deleteFromHead: function() {
    var data = null;

    if(this._head !== null) {
      // If the list only contains one node.
      if(this._head === this._tail) {
        // We save the data of the node we want to remove.
        data = this._head.data;
        // Then we remove the reference to that node.
        this._head = this._tail = null;
      }
      else {
        // We save the data of the node we want to remove.
        data = this._head.data;
        // Then we set the next node as the head. And the reference to
        // the old head is gone.
        this._head = this._head.next;
      }
    }

    return data;
  },

  deleteFromTail: function() {
    var data = null,
        head = this._head,
        tail = this._tail,
        tempNode;

    if(head !== null) {
      if(head === tail) {
        data = tail.data;

        this._head = this._tail = null;
      }
      else {
        data = tail.data;

        // We find the last node before the tail. The node that is pointing to the tail.
        for(tempNode = head; tempNode.next !== tail; tempNode = tempNode.next);

        this._tail = tempNode;
        this._tail.next = null;
      }
    }

    return data;
  },

  toArray: function() {
    var array = [],
        node  = this._head;

    while(node) {
      array.push(node.data);
      node = node.next;
    }

    return array;
  },

  toString: function() {
    return this.toArray().join(' ,');
  }
};