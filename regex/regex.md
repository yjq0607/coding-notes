# Regular Expression

## Greedy matching vs lazy matching
A quantifier can be added after expression such as `.*` so to limit the matching to just the shortest match available instead of the `greedy` match for the longest string.
```javascript
let myString = '<a href="https://linkA.com" target="_blank">Link A</a><a href="https://linkB.com/" target="_blank">Link B</a>';
myString.match(<a href="(.*?)" target/)[1]  // returns "https://linkA.com"
myString.match(<a href="(.*)" target/)[1]  // returns "https://linkA.com" target="_blank">Link A</a><a href="https://linkB.com/"

```
