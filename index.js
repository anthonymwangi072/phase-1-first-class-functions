function receivesAFunction(spy) {
    return spy();
}
// receivesAFunction() {"receives a function and calls it"};
function returnsANamedFunction(){
    return function namedfunction(){

    }
}
function returnsAnAnonymousFunction(){
    return function (){

    }
};