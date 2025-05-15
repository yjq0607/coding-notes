# Base Conversion



## Python
To try out the code, you can open CMD prompt and run `python`
```python
from convert_base import *

to_hex = to_base(16)  # to_base requires 2 args to be triggered, the first args is the base to be converted to
to_hex(100)

# alternatively you can run the function directly like this
to_base(16)(100)

hex_to_dec = to_dec(16)
hex_to_dec('64')
```
For `to_base` function, the inner function is called recursively.
There is a return oneliner suggestion on stackoverflow for its excellent brevity, see [here](https://stackoverflow.com/a/53675480)
```python
 def baseN(num,b,numerals="0123456789abcdefghijklmnopqrstuvwxyz"):
     return ((num == 0) and numerals[0]) or (baseN(num // b, b, numerals).lstrip(numerals[0]) + numerals[num % b])

```


## Javascript
Browser console can run javascript
Or copy the code into `Node.js`
```javascript

toOct = toBase(8);
toOct(77);  // convert 77 to octal number "115"

octToDec = toDec(8);
octToDec('115');
```
