

/** Subarray Sum Equals K */

   // Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

   // Example 1:
   // Input:nums = [1,1,1], k = 2
   // Output: 2


   /**
    * @param {number[]} nums
    * @param {number} k
    * @return {number}
    */
   function subarraySum(nums, k) {

     const map = new Map([[0, 1]]);
     let sum = 0;
     let count = 0;
     for (const num of nums) {
       sum += num;
       const complement = sum - k;
       if (map.has(complement)) {
         count += map.get(complement);
       }
       if (map.has(sum)) {
         map.set(sum, map.get(sum) + 1);
       } else {
         map.set(sum, 1);
       }
     }

     return count;

   }
