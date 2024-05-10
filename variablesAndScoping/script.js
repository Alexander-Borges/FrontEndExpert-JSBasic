// Variables and the different ways we can define them

// let has the more predictable behavior becuase of its scope. 

function test(){
    var varNum = 0;
    let letNum = 0;

    console.log('varNum', varNum);
    console.log('letNum', letNum);
}
test();

// var is scoped to the entire function
// let is only scoped to the block it is defined in

function scopeTest(){
    if(true){
        var varNum2 = 0;
        let letNum2 = 0;
    }
    console.log('varNum2', varNum2);
    console.log('letNum2', letNum2);
}
scopeTest();

// returns an error becuase letNum2 is out of the scope.
// let is generally the better variable value becuase of its predictability in behavior

//const 
// Straightforward a variable that is immutable. Use for values that will not change. 
// The value cannot be reassigned but if for example there is an array. Values can be pushed or popped. The value itself cannot be changed.
