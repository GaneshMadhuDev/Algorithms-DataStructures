/**
 * PROGRAM TO FIND THE SUM OF ALL ODD NUMBERS IN AN GIVEN ARRAY.
 *
 */


 function sumOfAllOddNumbersInArray(givenArray) {

    let sum = 0;

    for (let index = 0; index < givenArray.length; index ++) {

        if (givenArray[index] % 2 === 1) {
            sum += givenArray[index];
        }

    }

    return sum;

 }


 /** TESTING
       * GIVEN ARRAY = [3, 5, 1, 2, 8]
       *
       * sumOfAllOddNumbersInArray([3, 5, 1, 2, 8])
       *
       * EXPECTED RESULT    9
       */