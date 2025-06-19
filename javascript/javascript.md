# Javascript

## var vs let

|var|let|
|:---:|:---:|
|function scoped|block scoped|
|can be re-declared|cannot be re-declared|
| declaring `var` becomes a attribute of `window`[^2] | identifier only |

[^2]: `var x;` you can access `x` as `window.x`

Block scoped: cannot not be accessed in upper `block`, ie
```javascript
if (true) {
    let i = 0;
} 
console.log(i); // result in error with "i" not defined
```
`For` loop declaration also considers the variable inside the block
```javascript
for (let i = 0; i < 10; i++) {
    
}
console.log(i); // Uncaught ReferenceError: i is not defined
```


## About For loop
`For` loop in js is really a `while` loop in a nutshell   
```javascript
for (i = 0; // this only executes once, mostly for creating variables
    i < Array.length;  // this is for evaluating boolean, ie while (true)
    i++  // this one executes every loop, you might as well put it in the execution code
) {
    console.log("");
}
```

Therefore this cursed code runs[^1]
[^1]: since `let` is block scoped, declaring it outside of `for` loop block would result in `i`, `j` declaration being outside of the for loop block. See [here](#var-vs-let)
```javascript
let i = 0 , j = 0;
for (;i + j < 10;) {
    console.log(i++ + j++)
}

// resembling
let i = 0 , j = 0;
while (i + j < 10) {
    console.log(i++ + j++)
}
```
However in practice, declaration outside of `for` loop should only be performed intentionally as it affects the scope of the variable if declared with `let`.\
For further information on `lexical scoping` and `for` loop, see MDN documentation [For loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#lexical_declarations_in_the_initialization_block) and [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures#lexical_scoping)

\
In fact, you may even set criteria that may have nothing to do with the array/object you're iterating through
```javascript
for (start = new Date().getTime(), i = 0; (new Date().getTime() - start) < 5000; i++) {
    // this doesn't print anything but it keeps incrementing i for 5 seconds
}
```

See the script [here](#customRange) to see how a `for` loop can be applied to `generator` function.

## Swapping variables
Variables can be swapped with array parentheses
```javascript
let a = 'a', b = 'b';
[a, b] = [b, a];
```

## Singleton
`Singleton` means only allowing one instance to be instantiated and the constructor governs the logic to make sure only one instance is allowed
```javascript
function standaloneFunction() {
    console.log("The class has been instantiated successfully");
}


class MySingletonClass {
    static #instance;                                                   // declare a static private field
    constructor(name) {
        if (MySingletonClass.#instance) {                               // if the static private field is not empty, it means the class has been instantiated once before
            console.warn("An instance has already been initialised");   // Give a console warning when the class has been instantiated before
            return MySingletonClass.#instance;                          // this line will return previously instantiated instance, halting the rest of the constructor "script"
        }
        MySingletonClass.#instance = this;
        this.name = name;
        this.age = 23;
        this.myClassMethod();                                           // this will only be executed if the class is instantiated the first time
    }
    myClassMethod = standaloneFunction;                                 // an outer function can become a class method this way
    lastname = "Griffins";  
}


const a = new MySingletonClass("Peter");                                // console return: "The class has been instantiated successfully"
const b = new MySingletonClass("Mary");                                 // console warns: "An instance has already been initialised"


console.log(a);                                                         // MySingletonClass {lastname: 'Griffins', name: 'Peter', age: 23, myClassMethod: ƒ}
console.log(b);                                                         // MySingletonClass {lastname: 'Griffins', name: 'Peter', age: 23, myClassMethod: ƒ}
console.log(a === b);                                                   // true
```
This implmentation is inspired by [UtkarshPramodGupta](https://stackoverflow.com/a/59646297) on StackOverflow. Also see MDN documentation on [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes).



## customRange

An exercise code snippet has been written for practising purpose (mostly for the LOL) [here](crange.js).

Below provides a snippet how a `for` progresses through the generator function
```javascript
for (c = range.next(); !c.done; c = range.next()) { }
```

