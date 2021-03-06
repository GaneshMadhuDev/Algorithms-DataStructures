/**
  * PROGRAM TO FIND THE LARGEST SUM OF TWO NUMBERS IN A GIVEN ARRAY
  *
  */




  function largestSumOfTwoNumbersInArray(givenArray){

    let bigNumber = arr[0];

    let secondBigNumber = arr[1];

    let givenArrayLength = givenArray.length;

    if (givenArrayLength < 2)

        return null;

    if (bigNumber < second) {

      bigNumber = givenArray[1];

      second = givenArray[0];

    }

    for(let index = 2; index < givenArrayLength;  index++){

     if(givenArray[index] > bigNumber) {

        secondBigNumber = bigNumber;

        bigNumber = givenArray[index];

      }
     else if (givenArray[index] > secondBigNumber) {

        secondBigNumber = givenArray[index];

     }

   }

   return bigNumber + secondBigNumber;

  }


  /** TESTING
      * GIVEN ARRAY = [3, 5, 4, 6, 2, 8, 7]
      *
      * largestSumOfTwoNumbersInArray([3, 5, 4, 6, 2, 8, 7])
      *
      * EXPECTED RESULT    8, 7
      *
      */