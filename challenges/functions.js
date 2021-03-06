// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const animals = ['dog', 'cat', 'bird', 'fish'];

function contains(item, list, cb) {
  for (let i =0; i< list.length; i++){
    if( list[i] === item){
      return cb(true);
    }
  }
  return cb(false);
}

contains('dog', animals, function(dog){
console.log(dog)
});



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(x, y, cb) {
  return cb(x,y)
}


let add = function(x,y){
  return (x+y);
}

let multiply = function(x,y){
  return (x*y);
}

let greeting = function(x,y){
  return (`Hello ${x} ${y}, nice to meet you!`);
}


// /* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!




// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Because of scope. nested function is still inside of myFunction's scope.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();