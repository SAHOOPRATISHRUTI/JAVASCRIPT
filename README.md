"# JAVASCRIPT" 
--------Scope Chain-----------
function scope(){
    var a =10;
    let b = 20;
    const c = 30;

        console.log(a); //10
        console.log(b); //20
        console.log(c); //30
}
console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
scope();
