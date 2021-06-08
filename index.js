function receivesAFunction(argument1) {
    return argument1()
}

function returnsANamedFunction() {
    const function1 = function() {
    }
    return function1;
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}