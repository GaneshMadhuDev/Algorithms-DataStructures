/**
 * PROGRAM TO FIND A MISSING NUMBER IN GIVEN ARRAY.
 *
 */

package AlgoDs;

import java.util.Arrays;

/**
 * Created by ganeshmadhu on 8/23/20.
 */
public class FindMissingNumberInArray {

    public static int missingNumberInGivenArray(int[] givenArray) {

        int totalLength = givenArray.length + 1;

        int totalSum = totalLength * (totalLength + 1) / 2;

        int givenArraySum = Arrays.stream(givenArray).sum(); // JAVA 8

        return totalSum - givenArraySum;

    }

}


/** TESTING
 * GIVEN ARRAY => int[] givenArray={4, 5, 3, 1};
 *
 * missingNumberInGivenArray(givenArray)
 *
 * EXPECTED RESULT    2
 *
 */