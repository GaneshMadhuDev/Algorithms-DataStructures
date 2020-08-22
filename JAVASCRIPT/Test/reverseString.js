

/**
 * PROGRAM TO REVERSE A GIVEN STRING
 *
 */

function reverse (givenString) {
    if (givenString === "") {
        return "";
    } else {
        return reverse(givenString.substr(1)) + givenString.charAt(0);
    }
}