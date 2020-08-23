
/**
 * PROGRAM TO USE RECURSION WITH EXAMPLE
 *
 */

 function power(givenNumber, givenRange) {

    let total = 1;

      // multiply result by givenNumber,  givenRange times in the loop
      for (let index = 0; index < givenRange; index++) {
        total *= givenNumber;
      }

      return total;

 }


 function powerUsingRecursion(givenNumber, givenRange) {

    if (givenRange == 1) {
        return givenNumber;
      } else {
        return givenNumber * pow(givenNumber, givenRange - 1);
      }

 }



 /** TESTING USING LOOP
     * GIVEN NUMBER = 5
     *
     * GIVEN RANGE = 3
     *
     * power(5, 3)
     *
     * EXPECTED RESULT    125
     *
     */



    /** TESTING USING RECURSION
      * GIVEN NUMBER = 5
      *
      * GIVEN RANGE = 3
      *
      * power(5, 3)
      *
      * EXPECTED RESULT    125
      *
      */