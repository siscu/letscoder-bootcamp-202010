function map(arr, expression) {
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an array');
    if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        newarr.push(expression(arr[i]))
    }
    return newarr
}