/** Intersection of Two Arrays */

function intersection(nums1, nums2) {

  const a = new Set(nums1);
  const b = new Set(nums2);
  const inters = [];
  for (const x of a) {
    if (b.has(x)) inters.push(x);
  }
  return inters;


}

// intersection([1, 3, 4] , [2, 3, 5]) => [3]