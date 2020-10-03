


/************ LRU ******************/

////  Least Recently Used cache  ////

// to hold the cache data with the initial limit
// adding to cache,
// getting an element from the cache,
// removing the least used element from the cache and
// iterating through the cache.

/// USING Doubly LinkedList and a Map(Object)


/// Do every insertion at the head.
/// On every read or update operation detach the node from its position and attach at the head of the LinkedList. Remember, LRU is indicated in terms of both read and write operations to the cache.
/// When cache limit exceeds remove a node from the tail
/// Store key:node relation in cache map. So that retrieval is possible in O(1).


// LRU Linked List

/// Head <==>   |prev|key1|value1|next|    <===>   |prev|key2|value2|next|   ==> Tail

// Key1 ---> |prev|key1|value1|next|
// Key2 ---> |prev|key2|value2|next|


class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}


class LRU {
  //set default limit of 10 if limit is not passed.
  constructor(limit = 10) {
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }


  // Write Node to head of LinkedList
    // update cache with Node key and Node reference
    write(key, value){
      this.ensureLimit();

      if(!this.head){
        this.head = this.tail = new Node(key, value);
      }else{
        const node = new Node(key, value, this.head);
        this.head.prev = node;
        this.head = node;
      }

      //Update the cache map
      this.cache[key] = this.head;
      this.size++;
    }


    // Read from cache map and make that node as new Head of LinkedList
      read(key){
        if(this.cache[key]){
          const value = this.cache[key].value;

          // node removed from it's position and cache
          this.remove(key)
          // write node again to the head of LinkedList to make it most recently used
          this.write(key, value);

          return value;
        }

        console.log(`Item not available in cache for key ${key}`);
      }


      ensureLimit(){
          if(this.size === this.limit){
            this.remove(this.tail.key)
          }
        }


        remove(key){
            const node = this.cache[key];

            if(node.prev !== null){
              node.prev.next = node.next;
            }else{
              this.head = node.next;
            }

            if(node.next !== null){
              node.next.prev = node.prev;
            }else{
              this.tail = node.prev
            }

            delete this.cache[key];
            this.size--;
          }

          clear() {
            this.head = null;
            this.tail = null;
            this.size = 0;
            this.cache = {};
          }

          // Invokes the callback function with every node of the chain and the index of the node.
          forEach(fn) {
            let node = this.head;
            let counter = 0;
            while (node) {
              fn(node, counter);
              node = node.next;
              counter++;
            }
          }

          // To iterate over LRU with a 'for...of' loop
          *[Symbol.iterator]() {
            let node = this.head;
            while (node) {
              yield node;
              node = node.next;
            }
          }
        }