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

console.groupEnd();