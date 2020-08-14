
/**
  * PROGRAM TO FIND SUM OF GIVEN MULTIPLE ARRAYS
  *
  */


  function sumOfGivenArrays(givenArray) {

    let sumOfArrays = 0;

    for (let arrayIndex = 0; arrayIndex < givenArray.length; arrayIndex++) {

        for (let elementIndex = 0; elementIndex < givenArray[arrayIndex].length; elementIndex++) {

            sum += givenArray[arrayIndex][elementIndex];

        }

    }

    return sumOfArrays;

  }