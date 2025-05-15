const n = "0123456789abcdefghijklmnopqrstuvwxyz";


function toBase(base) {
    function innerFunc(num) {
        if (num < base) {
            return n[num]
        }
        let quotient = Math.floor(num / base);
        let remainder = num % base;
        return innerFunc(quotient) + n[remainder]
    }
    return innerFunc;
}

function toDec(base) {
    function innerFunc(num) {
        let result = 0;
        for (let i = 0; i < num.length; i++) {
            if (parseInt(n.indexOf(num[num.length - 1 - i])) >= base) {
                return `Invalid number: Base ${base} should not contain digit ${num[num.length - 1 - i]}`
            }
            result += parseInt(n.indexOf(num[num.length - 1 - i])) * base ** i;
        }
        return result;
    }
    return innerFunc;
}

