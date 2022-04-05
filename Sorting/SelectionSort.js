const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        // Set current index as min
        let min = i;
        let temp = arr[i];

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
};