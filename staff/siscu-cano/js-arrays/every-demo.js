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

console.log(`${iconSection} 2.) All elements of the array are greater than 3:`);
console.log(expresion);

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 3.) Should fail on argument null as array: every(null, console.log);`);

try {
    var expresion = every(null, console.log);
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 4.) Should fail on argument 1 as array: every(1, console.log);`);

try {
    var expresion = every(1, console.log);
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 5.) Should fail on argument true as array: every(true, console.log);`);

try {
    var expresion = every(true, console.log);
} catch (error) {
    console.error(error)
}


//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 6.) Should fail on argument undefined as a function: every(([1, 2, 3]));`);

try {
    var expresion = every(([1, 2, 3]));
} catch (error) {
    console.error(error)
}


console.groupEnd();