n = "0123456789abcdefghijklmnopqrstuvwxyz"

def to_base(base):
    def inner_function(num):
        if num < base:
            return n[num]
        return inner_function(num // base) + n[num % base]
    return inner_function

def to_dec(base):
    def inner_function(num):
        result = 0
        if int(n.index(num[len(num) - 1 - i])) >= base:
            return f"Invalid number: Base {base} should not contain digit {n.index(num[len(num) - 1 - i])}."
        for i in range(len(num)):
            result += int(n.index(num[len(num) - 1 - i])) * base ** i
        return result
    return inner_function

