function bubbleSort(arr)
{
    var noSwap;
    for (var i = arr.length - 1; i > 0; i -- )
    {
        noSwap = true;
        for (var j = 0; j < i; j++)
        {
            if ( arr[j] >  arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false; 
            }
        }
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([98,7,3,4,2,5,1,22,4,9]))