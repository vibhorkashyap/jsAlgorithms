function selectionSort(arr)
{
    var min;
    for (var i = 0; i < arr.length -1; i++ )
    {
        min = i;
        for (var j = i+1; j < arr.length-1; j++)
        {
            if(arr[j]<arr[min])
            {
                min = j;
            }
        }
        var temp = arr[i]
        arr[i] =  arr[min]
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort([9,8,7,6,5,4,3,23]))