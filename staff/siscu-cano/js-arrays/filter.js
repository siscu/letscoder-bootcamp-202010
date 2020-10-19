function filter(array, expression) {
    if (!(array instanceof Array)) { throw new TypeError(array + ' is not an array'); }
    if (typeof expression !== 'function') { throw new TypeError(expression + ' is not a function'); }
    var result = []
    for (var i = 0; i < array.length; i++) {
        var value = array[i]

        if (expression(value)) result.push(value)
    }
    return result
}