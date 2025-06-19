# Custom Range

Python `range()` is a class which can take up to 3 `int` arguments

The class is instantiated and performs calculation to provide various way for user to interact with the sequence.

For example

```python

r = range(10, 20, 2)  # [10, 12, 14, 16, 18]
print(r.start)        # 10
print(r.stop)         # 20
print(r.step)         # 2
print(10 in r)        # True
print(11 in r)        # False
print(r.index(16))    # 3
print(len(r))         # 5
print(r.count(10))    # 1  (number of 10 in the sequence)
print(r)              # range(10, 20, 2)

```


## Python

As a practice, I only have written a generator version for exercise.

> [!NOTE]
> `r` is a `float`, where `math.ceil(r)` is similar to the `range.count`

See [script](crange.py).


## Javascript

Please refer [here](../../javascript/javascript.md#customRange).


## C

As an exercise, only function version is written for the time being. 

It only integers for arguments.

Returns a pointer of array looking like `[1,2,3,1]` where last `1` acts as a loop terminator for outer scoop

See [script](crange.c).

