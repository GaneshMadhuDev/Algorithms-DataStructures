
// Example 1: Given the array [2, -1, 1, 2, 2], there is a loop, from index 0 -> 2 -> 3 -> 0.


// Example 2: Given the array [-1, 2], there is no loop.


function CircularArrayLoop(nums: number[]): boolean {

  const _nums = new Set();
  let ended = false;
  let index = 0;

  while (!ended) {
    if (!_nums.has(index)) {
      _nums.add(index);
    } else {
      ended = false;
    }

    index += nums[index];
  }

  return false;


}


// CircularArrayLoop([2, -1, 1, 2, 2]))