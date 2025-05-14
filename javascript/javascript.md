# Javascript

## var vs let

|var|let|
|:---:|:---:|
|function scoped|block scoped|
|can be re-declared|cannot be re-declared|

Block scoped: cannot not be accessed in upper `block`, ie
```
if (true) {
    let i = 0;
} 
console.log(i); // result in error with "i" not defined
```
`For` loop declaration also considers the variable inside the block
```
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


## Swapping variables
Variables can be swapped with array parentheses
```javascript
let a = 'a', b = 'b';
[a, b] = [b, a];
```
