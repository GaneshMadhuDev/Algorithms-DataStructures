/**
 * PROGRAM TO FIND A MISSING NUMBER IN GIVEN ARRAY.
 *
 */

 function findMissingNumberInGivenArray(givenArray) {

    let arrayLength = givenArray.length + 1;

    let actualSum = (arrayLength + 1) * arrayLength / 2;

    let totalSumOfElementsInArray = 0;

    for (let index = 0; index < givenArray.length; index++) {

        totalSumOfElementsInArray += givenArray[index];

    }

    return actualSum - totalSumOfElementsInArray;

 }





 /** TESTING
     * GIVEN ARRAY = [4, 5, 3, 1]
     *
     * findMissingNumberInGivenArray([4, 5, 3, 1])
     *
     * EXPECTED RESULT    2
     *
     */