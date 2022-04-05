const insertionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[0]) {
            // Move number to first position
            arr.unshift(arr.splice(i, 1)[0]);
        } else {
            // Find where number should go
            for(let j = 1; j < i; j++) {
                if(arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                    // Move number to correct spot
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
                }
            }
        }
    }

    return arr;
};