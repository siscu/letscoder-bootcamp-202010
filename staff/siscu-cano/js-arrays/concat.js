// String.prototype.concat()
// What does? the concat() method concatenates the string arguments to the calling string and returns a new string.
// Return: a new string containing the combined text of the strings provided.
// Doesn’t mutate the arrays

function concat(array1, array2) {
    var arrayConcat = [];
    if (!(array1 instanceof Array) && !(typeof array1 === 'string')) throw new TypeError(array1 + ' is not an array');
    if (!(array2 instanceof Array) && !(typeof array2 === 'string')) throw new TypeError(array2 + ' is not an array');

    if ((typeof array1 === 'string') && (typeof array2 === 'string')) {
        return array1 + array2;
    } else {
        for (var i = 0; i < array1.length; i++) {
            arrayConcat[i] = array1[i];
        }
        for (var i = 0; i < array2.length; i++) {
            arrayConcat[arrayConcat.length] = array2[i];
        }
    }
    return arrayConcat;
}