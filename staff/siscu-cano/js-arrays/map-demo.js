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

console.log(`${iconSection} 2.) Add three to all elements of the array and return a new array:`);
console.log(expresion);

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 3.) Should fail on argument null as array: map(null, console.log)`);

try {
    map(null, console.log)
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 4.) Should fail on argument 1 as array: map(1, console.log)`);

try {
    map(1, console.log)
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 5.) Should fail on argument true as array: map(true, console.log)`);

try {
    map(true, console.log)
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 6.) Should fail on argument undefined as a function: map([1, 2, 3])`);

try {
    map([1, 2, 3])
} catch (error) {
    console.error(error)
}

console.groupEnd();