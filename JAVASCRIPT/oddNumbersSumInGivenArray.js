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