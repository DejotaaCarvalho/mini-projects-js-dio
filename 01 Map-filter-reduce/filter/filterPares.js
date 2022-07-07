// Com arrow function =>

function filtraPares(arr) {
    return arr.filter((item) => item % 2 === 0);
}

// Sem arrow function
//function callback(item) {
//    return item % 2 === 0;
//}

const nums = [1, 14, 55, 67, 30, 4, 9];

console.log(filtraPares(nums));