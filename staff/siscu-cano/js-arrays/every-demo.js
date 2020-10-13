console.group('DEMO ---> EVERY:');
console.log('%c The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.', 'color: #686d76;');

var numsEvery = [1, 2, 3, 4];

var expresion = every(numsEvery, function(value) {
    return value > 0;
})


console.log(`%c Initial array: [${numsEvery}]`, 'color: #686d76;');
console.log(`${iconSection} 1.) All elements of the array are greater than 0:`);
console.log(expresion);

//----------------------------------------------------------------------------------------------------

var expresion = every(numsEvery, function(value) {
    return value > 3;
})

console.log(`%c Initial array: [${numsEvery}]`, 'color: #686d76;');
console.log(`${iconSection} 2.) All elements of the array are greater than 3:`);
console.log(expresion);

console.groupEnd();