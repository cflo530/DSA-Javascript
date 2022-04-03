const factorialRecursive = number => {
    // Base Case
    if(number < 2) return 1;
    if(number === 2) return 2;

    return number * factorialRecursive(number - 1);


};

const factorialIterative = number => {
    let factorial = 1;

    if(number === 2) {
        factorial = 2;
    }

    for(let i = 2; i <= number; i++) {
        factorial = factorial * i;
    }

    return factorial;
};

// console.log(factorialIterative(5));
console.log(factorialRecursive(100));