const sumFibs = (num) => {
    let fibArr = [1, 1];
    for(let i = 0; fibArr[i] + fibArr[fibArr.length - 1] <= num; i++) {
    fibArr.push(fibArr[i] + fibArr[fibArr.length - 1]);
    // console.log(fibArr)
    }
    return fibArr.reduce((accumulator, currentValue) => (
        accumulator = currentValue % 2 !== 0 ? 
        accumulator += currentValue : accumulator
    )
);
//  return fibArr.filter(x => x % 2 !== 0).reduce((x, y) => x + y);
}

console.log(sumFibs(10))
console.log(sumFibs(1))
// should return a number.
console.log(sumFibs(1000))
// should return 1785.
console.log(sumFibs(4000000))
// should return 4613732.
console.log(sumFibs(4))
// should return 5.
console.log(sumFibs(75024))
// should return 60696.
console.log(sumFibs(75025))
//   // should return 135721.

const sumAll = (arr) => {
    let begin = arr.sort(function(a, b){return a - b})
    console.log(begin)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
}
}