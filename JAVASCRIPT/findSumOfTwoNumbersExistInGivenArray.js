/**
  * PROGRAM TO FIND SUM OF TWO NUMBERS EXISTS IN THE GIVEN ARRAY
  *
  */


  function isSumExistsInGivenArray(givenArray, sumOfTwoNumbers) {

        let object = {};
        let  arrayLength = givenArray.length;
        let subtractedNumber;

        for (let index = 0; index < arrayLength; index ++) {

            subtractedNumber = sumOfTwoNumbers - givenArray[index];

            if (object[subtractedNumber]) {

                return true;

            } else {

                object[givenArray[index]] = true;

            }

        }

        return false;

  }


  /*** TESTING
      * GIVEN ARRAY = [3, 5, 3, 6, 2, 5, 7]
      *
      * SumOfTwoNumbers = 8
      *
      * isSumExistsInGivenArray([3, 5, 3, 6, 2, 5, 7], 8)
      *
      * EXPECTED RESULT      TRUE
      *
      */


  /*** TESTING
        * GIVEN ARRAY = [3, 5, 3, 6, 2, 5, 7]
        *
        * SumOfTwoNumbers = 18
        *
        * isSumExistsInGivenArray([3, 5, 3, 6, 2, 5, 7], 18)
        *
        * EXPECTED RESULT      FALSE
        *
        */