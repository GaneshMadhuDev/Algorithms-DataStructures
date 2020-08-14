/**
  * PROGRAM TO FIND NUMBER OF ZEROS UPTO THE THE GIVEN NUMBER
  *
  */


  function findNumberOfZerosInGivenNumber(givenNumber) {

        let numberOfZerosUpToGivenNumber = 0;

        while (givenNumber > 0) {

            numberOfZerosUpToGivenNumber += Math.floor(givenNumber / 10);

            givenNumber = givenNumber / 10;

        }

        return numberOfZerosUpToGivenNumber;

  }



  /** TESTING
      * GIVEN NUMBER = 30;
      *
      * findNumberOfZerosInGivenNumber(30)
      *
      * EXPECTED RESULT     3 => 10, 20, 30
      *
      */


  /** TESTING
        * GIVEN NUMBER = 101;
        *
        * findNumberOfZerosInGivenNumber(101)
        *
        * EXPECTED RESULT     11 => 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
        *                            |   |   |   |   |   |   |   |   |   ||
        *
        */