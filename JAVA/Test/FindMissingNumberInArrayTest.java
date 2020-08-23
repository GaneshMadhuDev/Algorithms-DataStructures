

import AlgoDs.FindMissingNumberInArray;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by ganeshmadhu on 8/23/20.
 */

@RunWith(MockitoJUnitRunner.class)
public class FindMissingNumberInArrayTest {

    @Autowired
    private FindMissingNumberInArray findMissingNumberInArray;
    @Before
    public void init() {

    }

    @Test
    public void findMissingNumberInArrayTest() {
        int[] givenArray = {4, 5, 3, 1};
        int result = findMissingNumberInArray.missingNumberInGivenArray(givenArray);

        assertNotNull(result);
        assertEquals(2, result);

    }


}
