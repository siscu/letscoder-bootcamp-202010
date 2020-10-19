var num = [1, 2, 3, 4, 5]

function reverse(array) {
    var aux = "";
    for (var i = 0; i < array.length / 2; i++) {
        aux = array[i];
        array[i] = array[array.length - (i + 1)];
        array[array.length - (i + 1)] = aux;
    }
    return array
}
console.log(reverse(num))