// find the highest number in an array and how many times it appeared in the array.

function highestNumCount(arr){
    let maxi=Math.max(...arr);

    let count=0;

    arr.forEach(element => {
        if(element===maxi){
            count=count+1;
        }
    });
    return `${maxi} is the highest number in the array and it appeared ${count} times`;
}
console.log(highestNumCount([3,4,3,4,5,5,5,7,7,9]))