console.group('DEMO ---> FILTER:');
console.log('%c The filter() method creates a new array with all elements that pass the test implemented by the provided function.', 'color: #686d76;');

var numsFilter = [1, 2, 3, 4, 5];

var result = filter(numsFilter, function(value) {
    return value % 2 === 0;
})

console.log(`%c Initial array: [${numsFilter}]`, 'color: #686d76;');
console.log(`${iconSection} 1.) Filter each item that is a multiple of 2:`);
console.log(result);

//----------------------------------------------------------------------------------------------------

var result = filter(numsFilter, function(value) { return value > 3 });

console.log(`${iconSection} 2.) Filter by numbers greater than 3:`);
console.log(result);

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 3.) Should fail on argument null as array: filter(null, console.log);`);

try {
    var expresion = filter(null, console.log);
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 4.) Should fail on argument 1 as array: filter(1, console.log);`);

try {
    var expresion = filter(1, console.log);
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 5.) Should fail on argument true as array: filter(true, console.log);`);

try {
    var expresion = filter(true, console.log);
} catch (error) {
    console.error(error)
}


//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 6.) Should fail on argument undefined as a function: filter(([1, 2, 3]));`);

try {
    var expresion = filter(([1, 2, 3]));
} catch (error) {
    console.error(error)
}


console.groupEnd();