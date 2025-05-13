# Javascript


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

Therefore this cursed code runs
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

In fact, you may even set criteria that may have nothing to do with the array/object you're iterating through
```javascript
for (start = new Date().getTime(), i = 0; (new Date().getTime() - start) < 5000; i++) {
    // this doesn't print anything but it keeps incrementing i for 5 seconds
}
```
