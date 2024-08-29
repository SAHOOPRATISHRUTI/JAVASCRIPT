//---------------------------------------------VAR--------------------------------

//*****Scope***
// var is a function Scope that's mean it is only accessible only in inside the function scope only,
// if it declared outside function,it becomes globally scoped


//*******Hoisting***



//****Redeclaration ****
//Redeclaration of var variable in the same scope only

function exampleVar(){
    console.log(x); //undefiened
    var x = 10;
    console.log(x); //10
    if(true){
        var x = 20;
        console.log(x); //20
        
    }
    console.log(x); //20
    
    
}
exampleVar();

//------------------------Let------------------

//*****Scope***
// let is block scope that's mean it is only accessible only in inside the block scope only

// if it declared outside function,it becomes globally scoped

function exampleLet(){
    // console.log(y);  // ReferenceError: Cannot access 'b' before initialization
    let y= 30;
    console.log(y);

    if(true){
        let y = 40;
        console.log(y);
        
    }
    console.log(y);
    
}
exampleLet();

//-----------------------CONST------------------------
// const is block scope that's mean it is only accessible only in inside the block scope only

function exampleConst() {
    const c = 100;
    console.log(c); // 10
    
    // c = 20; // TypeError: Assignment to constant variable.
    
    const d = { name: "John" };
    d.name = "Doe"; // Allowed, since we're not reassigning `d`, just mutating its content
    console.log(d.name); // "Doe"
}

exampleConst();



