

    function pushSorted(sll, val){
       var head = sll.head,
           current = head,
           previous;
       //value lower than head value
       if(val < sll.head.value){
          sll.head = {value: val, next: head};
          return sll;
       }

       while(current){
          if(current.value > val){
             previous.next = {value: val, next: current};
             return sll;
          }
          previous = current;
          current = current.next;
       }
       //value higher than the last node value
       previous.next = {value:val, next: null};
       return sll;
    }


    var sll = new LinkedList();
    sll.push(5);
    sll.push(7);
    sll.push(10);
    sll.push(14);

    pushSorted(sll, 9);
    //{head: {value: 5, next: {value: 7, next: {value: 9, next: {value: 10, next: {value: 14, next: null}}}}}}
