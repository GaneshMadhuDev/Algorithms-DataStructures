/**
 * PROGRAMS TO DEMONSTRATE THE EXAMPLE FOR JAVASCRIPT MAP VS FOR EACH
 *
 */



 function forEachUsagePrintMultiplyAnArray(givenArray) {

    givenArray.forEach((num, index) => {
        return arr[index] = num * 2;
    });

 }



 function mapUsagePrintMultiplyAnArray(givenArray) {

     let doubled = givenArray.map(num => {
         return num * 2;
     });

  }


 /** TESTING FOREACH
         * GIVEN ARRAY = [2, 4, 8, 16];
         *
         * forEachUsagePrintMultiplyAnArray([2, 4, 8, 16])
         *
         * EXPECTED RESULT    => [4, 8, 16, 32]
         */


 /** TESTING MAP
          * GIVEN ARRAY = [2, 4, 8, 16];
          *
          * mapUsagePrintMultiplyAnArray([2, 4, 8, 16])
          *
          * EXPECTED RESULT    => [4, 8, 16, 32]
          */