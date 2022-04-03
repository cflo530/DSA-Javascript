const reverseString = str => {
    let arr = [];

    for(let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i]);
    }

    return arr.join('');
};

const reverseStringRecursive = str => {
    if(str === '') {
        return '';
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
};