



/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {

  var sortedNums = nums.sort();

  return sortedNums[Math.floor(nums.length / 2)];

}

// console.log(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1]));