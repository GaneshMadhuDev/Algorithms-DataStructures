



class MySet {
   constructor() {
      this.container = {};
   }
   display() {
      console.log(this.container);
   }
   has(val) {
      return this.container.hasOwnProperty(val);
   }
   add(val) {
      if (!this.has(val)) {
         this.container[val] = val;
         return true;
      }
      return false;
   }
   delete(val) {
      if (this.has(val)) {
         delete this.container[val];
         return true;
      }
      return false;
   }
   clear() {
      this.container = {};
   }
   forEach(callback) {
      for (let prop in this.container) {
         callback(prop);
      }
   }
   static union(s1, s2) {
      if (!s1 instanceof MySet || !s2 instanceof MySet) {
         console.log("The given objects are not of type MySet");
         return null;
      }
      let newSet = new MySet();
      s1.forEach(elem => newSet.add(elem));
      s2.forEach(elem => newSet.add(elem));
      return newSet;
   }
   static difference(s1, s2) {
      if (!s1 instanceof MySet || !s2 instanceof MySet) {
         console.log("The given objects are not of type MySet");
         return null;
      }
      let newSet = new MySet();
      s1.forEach(elem => newSet.add(elem));
      s2.forEach(elem => newSet.delete(elem));
      return newSet;
   }
}

