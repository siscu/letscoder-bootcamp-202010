console.group('DEMO ---> REDUCE:');
console.log('%c The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.', 'color: #686d76;');

const numReduce = [1, 2, 3, 4, 5];

var resultReduce = reduce(numReduce, function(result, element) {
    return result + element;
});

console.log(`%c Initial array: [${numReduce}]`, 'color: #686d76;');
console.log(`${iconSection} 1.) We add all the elements of the array: ${resultReduce}`);

//--------------------------------------------------------------------------------------------------------

var resultReduce2 = reduce(numReduce, function(result, element) {
    return result + element;
}, 50)

console.log(`%c Initial array: [${numReduce}]`, 'color: #686d76;');
console.log(`${iconSection} 2.) We add all the elements of the array and pass an additional parameter: ${resultReduce2}`);

//--------------------------------------------------------------------------------------------------------

var resultReduce3 = reduce(numReduce, function(result, element) {
    return result - element;
});

console.log(`%c Initial array: [${numReduce}]`, 'color: #686d76;');
console.log(`${iconSection} 3.) We substract all the elements of the array: ${resultReduce3}`);

//--------------------------------------------------------------------------------------------------------

var resultReduce4 = reduce(numReduce, function(result, element) {
    return result - element;
}, 50)

console.log(`%c Initial array: [${numReduce}]`, 'color: #686d76;');
console.log(`${iconSection} 4.) We subtract all the elements of the array and pass an additional parameter: ${resultReduce4}`);

console.groupEnd()