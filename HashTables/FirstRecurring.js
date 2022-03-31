// First Recurring Character using HashTable

const firstRecurringCharacter = input => {
    let map = {};

    for (let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
    }

    return undefined;
};

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));