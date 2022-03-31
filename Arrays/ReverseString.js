const reverseString = (str) => {

    // Check Input
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'Data is invalid.'
    }

    const reverse = [];
    const length = str.length - 1;

    for (let i = length; i >= 0; i--) {
        reverse.push(str[i]);
    }

    return reverse.join('');

};

const reverse = str => [...str].reverse().join('');

console.log(reverseString('hello there'));
console.log(reverse('hello there'));