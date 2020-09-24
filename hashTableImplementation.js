



class HashTable {
   constructor() {
      this.container = [];
      // Populate the container with empty arrays
      // which can be used to add more elements in
      // cases of collisions
      for (let i = 0; i < 11; i++) {
         this.container.push([]);
      }
   }

   display() {
      this.container.forEach((value, index) => {
         let chain = value
         .map(({ key, value }) => `{ ${key}: ${value} }`)
         .join(" --> ");
         console.log(`${index}: ${chain}`);
      });
   }

put(key, value) {
   let hashCode = this.hash(key);

   for (let i = 0; i < this.container[hashCode].length; i++) {
      // Replace the existing value with the given key
      // if it already exists
      if (this.container[hashCode][i].key === key) {
         this.container[hashCode][i].value = value;
         return;
      }
   }

   // Push the pair at the end of the array
   this.container[hashCode].push(new this.KVPair(key, value));
}

get(key) {
   let hashCode = this.hash(key);
   for (let i = 0; i < this.container[hashCode].length; i++) {
      // Find the element in the chain
      if (this.container[hashCode][i].key === key) {
         return this.container[hashCode][i];
      }
   }
   return undefined;
}

remove(key) {
   let hashCode = this.hash(key);

   for (let i = 0; i < this.container[hashCode].length; i++) {
      // Find the element in the chain
      if (this.container[hashCode][i].key === key) {
         this.container[hashCode].splice(i, 1);
         return true;
      }
   }
   return false;
}

hash(key) {
   return key % 11;
}
forEach(callback) {
   // For each chain
   this.container.forEach(elem => {
      // For each element in each chain call callback on KV pair
      elem.forEach(({ key, value }) => callback(key, value));
      });
   }

   static join(table1, table2) {
      // Check if both args are HashTables
      if (!table1 instanceof HashTable || !table2 instanceof HashTable) {
         throw new Error("Illegal Arguments");
      }

      let combo = new HashTable();
      table1.forEach((k, v) => combo.put(k, v));
      table2.forEach((k, v) => combo.put(k, v));
      return combo;
   }
}

HashTable.prototype.KVPair = class {
   constructor(key, value) {
      this.key = key;
      this.value = value;
   }
};