

    function reverseSLL(sll) {

      if(!sll.head || !sll.head.next) return sll;

      var nodes=[],
        current = sll.head;
      //storing all the nodes in an array
      while(current){
        nodes.push(current);
        current = current.next;
      }

      var reversedLL = new LinkedList();

      reversedLL.head = nodes.pop();
      current = reversedLL.head;

      var node = nodes.pop();
      //make sure to make next of the newly inserted node to be null
      //other wise the last node of your SLL will retain its old next.
      while(node){
         node.next = null;
         current.next = node;

         current = current.next;
         node = nodes.pop();
      }
      return reversedLL;
    }

    test at least once.


    //create the LL
    var sll = new LinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);

    //test it
    reversesll(sll);
    //{head: {value:5, next:{value: 4, next: {value: 3, next: {value:2, next:{value:1, next: null}}}}}}