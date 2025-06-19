function* range(start, stop=null, step=1) {
    // mimicks the behaviour where user can supply only one param as stop
    // ie range(5) returns [0, 1, 2, 3, 4]
    if (stop === null) {
        stop = 0;
        [stop, start] = [start, stop];
    }

    // ceiling of r represents the length of the output should be 
    let r = (stop - start) / step;

    let i = 0;
    while (i < r) {
        yield start + i++ * step;
    }
}


function list(range) {
    let b = [];
    for (c = range.next(); !c.done; c = range.next()) {
        b.push(c.value);
    }
    return b;
}

