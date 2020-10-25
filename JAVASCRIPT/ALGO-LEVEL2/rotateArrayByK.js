


    var rotate = function(nums, k) {

        var reverse = function(nums, start, end) {

            while (start < end) {

                var temp = nums[start];

                nums[start] = nums[end];

                nums[end] = temp;

                start ++;

                end --;

            }
        }

        k = k % nums.length

        reverse(nums, 0, nums.length - 1);

        reverse(nums, 0, k-1);

        reverse(nums, k, nums.length - 1);
    };


    rotate([1,2,3,4,5], 3); ==> [3, 4, 5, 1, 2];