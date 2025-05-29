# Regular Expression

## Greedy matching vs lazy matching
A quantifier can be added after expression such as `.*` to match the shortest string available instead of the `greedy` match for the longest string.\
To match only one time `?` can be added after `.*`. See example below.
```javascript
let myString = '<a href="https://linkA.com" target="_blank">Link A</a><a href="https://linkB.com/" target="_blank">Link B</a>';
myString.match(/<a href="(.*?)" target/)[1]  // returns "https://linkA.com"
myString.match(/<a href="(.*)" target/)[1]  // returns "https://linkA.com" target="_blank">Link A</a><a href="https://linkB.com/"

```
See this StackOverflow [comment](https://stackoverflow.com/a/34806154) for further info. 


## Lookahead
This checks for alphabet `[a-z]` which has a char space and l ` l` behind, with the globe match. \
As a result, `a` and `e` are matched. This known as positive lookahead.
```javascript
let myString = "Mary has a little lamb";
myString.match(/[a-z](?= l)/g)  // returns (2) ['a', 'e']

```
