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


console.groupEnd();