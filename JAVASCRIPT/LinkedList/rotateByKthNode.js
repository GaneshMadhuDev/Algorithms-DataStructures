


    function rotateByKthNode(sll, k){
       var prevHead = sll.head,
           previous = sll.head,
           current = sll.head,
           i = 1;
       while(current.next){
         if(i==k+1){
           sll.head = current;
           previous.next = null;
         }
         previous = current;
         current = current.next;
         i++;
      }
      current.next = prevHead;
      return sll;
    }


    rotateByKthNode(sll,3);
    //{head: {value:4, next:{value: 5, next: {value: 1, next: {value:2, next:{value:3, next: null}}}}}}

