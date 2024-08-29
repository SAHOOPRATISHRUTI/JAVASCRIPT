// When a function is defiened inside another function
// & the innerfunction will acess the outerfunction Variable then it is called closure

// A function along with lexical Scope Form Closure



function outerFunction(){
    let outerVariable = "heyy its Shruti"

    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}

const clouserFunction = outerFunction();

clouserFunction();


function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
