

/**
 * PROGRAM TO REVERSE A GIVEN STRING
 *
 */

function reverse (givenString) {
    if (givenString === "") {
        return "";
    } else {
        return reverse(givenString.substr(1)) + givenString.charAt(0);
    }
}



/**
 * ALTERNATE WAY OF STRING REVERSE
 */


 function reverse(givenString) {

   givenString = givenString.split('');

   let len = givenString.length;

   let halfIndex = Math.floor(len / 2) - 1;

   let revStr;

   for (let index = 0; index <= halfIndex; index++) {

     revStr = givenString[len - index - 1];

     givenString[len - index - 1] = givenString[index];

     givenString[index] = revStr;

   }

   return givenString.join('');

 }


 /** TESTING
        * GIVEN STRING = "GANESH MADHU";
        *
        * reverse("GANESH MADHU")
        *
        * EXPECTED RESULT    "UHDAMHSENAG"
        */