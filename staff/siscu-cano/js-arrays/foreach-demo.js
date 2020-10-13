console.group('DEMO ---> FOREACH:');
console.log('%c The forEach() method executes a provided function once for each array element.', 'color: #686d76;');


var numsForEach = [1, 2, 3, 4, 5];
var result = [];

forEach(numsForEach, function(value) {
    var remainder = value % 2;
    if (remainder === 0) result.push(value);
})

console.log(`%c Initial array: [${numsForEach}]`, 'color: #686d76;');
console.log(`${iconSection} 1.) Obtain the numbers divisible by two:`);
console.log(result);

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 2.) Show all elements that the array contains:`);

forEach(numsForEach, console.log);

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 3.) Multiply each item by 10:`);

forEach(numsForEach, function(value) {
    console.log(value * 10);
})

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 4.) Should fail on argument null as array: forEach(null, console.log)`);

try {
    forEach(null, console.log)
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 5.) Should fail on argument 1 as array: forEach(1, console.log)`);

try {
    forEach(1, console.log)
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 6.) Should fail on argument true as array: forEach(true, console.log)`);

try {
    forEach(true, console.log)
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 7.) Should fail on argument undefined as a function: forEach([1, 2, 3])`);

try {
    forEach([1, 2, 3])
} catch (error) {
    console.error(error)
}

console.groupEnd();