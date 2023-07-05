function reduce(nums, fn, init) {
    let value = init;
    nums.forEach(element => {
        value = fn(value, element)
    })

    return value
};

console.log(reduce([1,2,3,4],function sum(acc, cur){return acc+cur;},0));