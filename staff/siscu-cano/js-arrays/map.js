function map(arr, expression) {
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        newarr.push(expression(arr[i]))
    }
    return newarr
}