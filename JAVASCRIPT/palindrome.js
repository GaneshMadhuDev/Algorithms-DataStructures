/**
  * PROGRAM TO CHECK  THE GIVEN STRING IS PALINDROME
  *
  */


  function isStringIsPalindrome(givenString) {

      let index;
      let length = givenString.length;

      for (index = 0; index < length / 2; index ++) {

        if (givenString[index] !== givenString[length - 1 - index]) {

                return false;
        }

      }

      return true;
  }


  function isStringIsPalindrome2(givenString) {
      return givenString == givenString.split('').reverse().join('');
  }


  /** TESTING
        * GIVEN STRING = "GANESHMADHU"
        *
        * isStringIsPalindrome("GANESHMADHU")
        *
        * EXPECTED RESULT    FALSE
        *
        */


  /** TESTING
          * GIVEN STRING = "MADAM"
          *
          * isStringIsPalindrome("MADAM")
          *
          * EXPECTED RESULT    TRUE
          *
          */