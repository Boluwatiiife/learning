//let num=[1,2,3,4,1,1]

function duplicate(array,xx){
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===xx){
            count++;
        }
    }
    //return count;
    if(count>1){
        return true;
    }
    else{
        return false;
    }
}
console.log(duplicate([1,2,3,4,1,1],1));
console.log(duplicate([1,2,3,4,1,1],2));