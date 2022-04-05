const swap = (arr, first, second) => {
    [arr[first], arr[second]] = [arr[second], arr[first]];

    return arr;
};

const partition = (arr, pivot, left, right) => {
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    for(let i = left; i < right; i++) {
        if(arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(arr, right, partitionIndex);
    return partitionIndex;
};

const quickSort = (arr, left, right) => {
    let pivot;
    let partitionIndex;

    if(left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        // Sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }

    return arr;
};