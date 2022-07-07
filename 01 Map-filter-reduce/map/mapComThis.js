const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

// MapComThis

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2, 3, 4];

console.log('this -> apple', mapComThis(nums, apple));

console.log('this -> orange', mapComThis(nums, orange));
