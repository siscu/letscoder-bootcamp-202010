console.group('DEMO ---> MAP:');
console.log('%c The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.', 'color: #686d76;');

var numMap = [1, 2, 3, 4];

var expresion = map(numMap, function(value) {
    return value * 2;
})

console.log(`%c Initial array: [${numMap}]`, 'color: #686d76;');
console.log(`${iconSection} 1.) It multiplies by two all the elements of the array and returns a new array:`);
console.log(expresion);

//----------------------------------------------------------------------------------------------------

var expresion = map(numMap, function(value) {
    return value + 3;
})

console.log(`%c Initial array: [${numMap}]`, 'color: #686d76;');
console.log(`${iconSection}2.) Add three to all elements of the array and return a new array:`);
console.log(expresion);

console.groupEnd();