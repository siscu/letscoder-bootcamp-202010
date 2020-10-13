console.group('DEMO ---> SOME:');
console.log('%c The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.', 'color: #686d76;');

var numSome = [1, 2, 3, 4];

var expresion = some(numSome, function(value) {
    return value > 0;
})

console.log(`%c Initial array: [${numSome}]`, 'color: #686d76;');
console.log(`${iconSection} 1.) Check if any value of the array is greater than 0:`);
console.log(expresion);

//----------------------------------------------------------------------------------------------------

var expresion = some(numSome, function(value) {
    return value > 6
})

console.log(`%c Initial array: [${numSome}]`, 'color: #686d76;');
console.log(`${iconSection} 2.) Check if any value of the array is greater than 6:`);
console.log(expresion);

console.groupEnd()