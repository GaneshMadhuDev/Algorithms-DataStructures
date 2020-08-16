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