/**
 * PROGRAM TO PRINT ALL NUMBERS BETWEEN AND GIVEN LOW AND HIGH RANGE AND DIVISIBLE BY GIVEN NUMBER
 *
 */


 function printAllDivisorsOfAGivenNUmberBetweenRange(lowNUmber, highNUmber, givenDivisor) {


    let printObject = {};

    for (let index = lowNUmber; index <= highNUmber; index ++) {

        printObject[index] = index % givenDivisor === 0;

    }

    return printObject;

 }


 /** TESTING
      *  lowNUmber = 4
      *  highNUmber = 17
      *  givenDivisor = 3;
      *  printAllDivisorsOfAGivenNUmberBetweenRange(4, 17, 3)
      *
      * EXPECTED RESULT   { 5: false, 6 : true, 7 : false, 8: false, 9: true, 10: false, 11: false, 12: true, 13: false, 14:false, 15: true, 16: false }
      *
      */