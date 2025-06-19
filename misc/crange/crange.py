# note that the true range() is actually a class offers a bit more than just this generator action

def c_range(start, stop="", step=1):
    # mimicks the behaviour of inferring single param to range() means stop=param
    if stop == "":
        stop = 0
        start, stop = stop, start

    i = 0

    r = ((stop - start) / step)
    while i < r:
        value = start + (i * step)
        i += 1
        yield value


if __name__ == "__main__":
    pass

