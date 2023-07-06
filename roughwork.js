function createCounter(init) {
    i = init;
    function increment(){
        return ++init;
    }
    function decrement(){
        return --init;
    }
    function reset(){
        init = i;
        return init;
    }
    return{increment, decrement, reset}
};
console.log(createCounter(0,['increment','reset','decrement']));
console.log('i love Jesus!')