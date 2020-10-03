


class MyMap {
   constructor() {
      this.container = {};
   }
   display() {
      console.log(this.container);
   }
   hasKey(key) {
      return key in this.container;
   }
   put(key, value) {
      this.container[key] = value;
   }
   delete(key) {
      if (this.hasKey(key)) {
         delete this.container[key];
         return true;
      }
      return false;
   }
   get(key) {
      return this.hasKey(key) ? this.container[key] : undefined;
   }
   keys() {
      return Object.keys(this.container);
   }
   values() {
      let values = []; for (let key in this.container) {
         values.push(this.container[key]);
      }
      return values;
   }
   clear() {
      this.container = {};
   }
   forEach(callback) {
      for (let prop in this.container) {
         // Call the callback as: callback(key, value)
         callback(prop, this.container[prop]);
      }
   }
}