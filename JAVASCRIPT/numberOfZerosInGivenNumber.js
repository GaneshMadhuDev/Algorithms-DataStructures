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



