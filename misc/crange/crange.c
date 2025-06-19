#include <stdio.h>
#include <math.h>

int *range(int start, int stop, int step)
{
    /* 
     * only works with integer param
     * */

    // division with integers result in floor division in C
    // (float) type cast for r to be float
    // + 1 leaves room for a terminator insertion
    float r = ((float)(stop - start) / step) + 1;
    int r_array[(int) ceil(r)];
    int *pointer = r_array;

    // insert a terminator at the end
    r_array[(int) ceil(r)] = start;

    int i = 0;
    int new_val;

    // r needs to either be ceil(r) or float
    while (i < r - 1) {
        new_val = start + i * step;
        r_array[i] = new_val;
        i++;
    }

    return pointer;
}


int main()
{
    // a few test cases
    // int *arr = range(19, 75, 14);  // incrementing sequence with exact end
    // int *arr = range(11, 75, 12);  // incrementing sequence with exact end
    // int *arr = range(10, 2, -1);  // decrementing sequence with exact end
    // int *arr = range(15, 2, -3);  // decrementing sequence without exact end

    // loop till terminator, which is the starting value
    for (int i = 0; *(arr + i + 1) != *arr; i++)
    {
       printf("%d\n", *(arr + i));
    }

    return 0;
}
