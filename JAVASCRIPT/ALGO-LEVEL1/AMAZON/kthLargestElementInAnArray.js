

var findKthLargest = function(nums, k) {
    let heap = [null, ...nums];
    let maxHeap = maxHeapify(heap);
    let max = 0;
    for (let i = 0; i < k; i++) {
        max = removeMax(heap);
    }
    return max;
};

let maxHeapify = (heap) => {
    let i = heap.length-1;
    while (i > 1) {
        let parent = Math.floor(i/2);
        if (heap[i] > heap[parent]) {
            swap(heap, i, parent);
        }
        i--;
    }
}

let removeMax = (heap) => {
    let max = heap[1];

    swap(heap, 1, heap.length-1);
    heap.pop();
    maxHeapify(heap);

    return max;
}

let swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}