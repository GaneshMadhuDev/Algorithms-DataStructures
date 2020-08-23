/**
  * PROGRAM TO FIND GIVEN ARRAY HAS THE DUPLICATE ELEMENTS EXISTS ??
  *
  */


  function isDuplicatesExists(givenArray) {

     let elements = {};

     for (let index = 0; index < givenArray.length; index++) {

        if (!elements[givenArray[index]]) {

            elements[givenArray[index]] = true;

        } else {

          return true;

        }

     }

     return false;

  }



  /** TESTING
    * GIVEN ARRAY = [3, 5, 3, 6, 2, 5, 7]
    *
    * isDuplicatesExists([3, 5, 3, 6, 2, 5, 7])
    *
    * EXPECTED RESULT    TRUE
    *
    */




  /** TESTING
      * GIVEN ARRAY = [3, 4, 8, 6, 2, 5, 7]
      *
      * isDuplicatesExists([3, 4, 8, 6, 2, 5, 7])
      *
      * EXPECTED RESULT    FALSE
      *
      */