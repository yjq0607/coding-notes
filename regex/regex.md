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


Reference table[^1]:
|     | Positive | Negative|
|:---:|:---:|:---:|
|Lookahead| `A(?=B)`[^2] | `A(?!B)`|
|Lookbehind| `A(?<=B)` | `A(?<!B)`[^3] |

[^1]: A is the expression that would be captured while B would not be captured
[^2]: Pattern A if B exists after A, ie `AB`.
[^3]: Pattern A if B does not exists in front of A, ie `BA` would not be a match.




## Metecharacter ref
| char | Explain | Opposite char |
| :---: | :---: | :---: |
| \w | [a-zA-Z0-9_] | \W |
| \d | [0-9] | \d |
| \s | all space like char | \S |
| \b | beginning of word[^4]  | \B |

[^4]: /\bLO/ searches for pattern with `LO` at the beginning
