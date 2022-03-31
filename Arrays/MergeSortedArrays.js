const mergeSortedArrays = (arr1, arr2) => {
    const mergedArray = [];

    let array1 = arr1[0];
    let array2 = arr2[0];
    let i = 1;
    let j = 1;

    // Check Input
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    while (array1 || array2) {
        if (!array2 || array1 < array2) {
            mergedArray.push(array1);
            array1 = arr1[i];
            i++;
        } else {
            mergedArray.push(array2);
            array2 = arr2[j];
            j++;
        }
    }

    return mergedArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));