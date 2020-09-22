


/***** Given a Length of a string generate a random string ***/

let randomString = Math.random().toString(36).substring(7);
console.log("randomString", r);



function generateString(length) {

   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(generateString(5));