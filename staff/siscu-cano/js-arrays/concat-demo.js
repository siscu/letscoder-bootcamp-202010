console.group('DEMO ---> CONCAT:');
console.log('%c The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.', 'color: #686d76;');


var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var resultConcat = [];

resultConcat = concat(array1, array2);

console.log(`${iconSection} 1.) Merge array [${array1}] with array [${array2}]:`);
console.log(resultConcat);
console.log('%c The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.', 'color: #686d76;');

//----------------------------------------------------------------------------------------------------


var hello = 'Hello!.';
var niceDay = 'Have a nice day.';

resultConcat = concat(hello, niceDay)

console.log(`${iconSection} 2.) Merge string "${hello}" with string "${niceDay}":`);
console.log(resultConcat);

//----------------------------------------------------------------------------------------------------


console.log(`${iconSection} 2.) Should fail argument not defined: concat()`);

try {
    resultConcat = concat();
} catch (error) {
    console.error(error)
}

//----------------------------------------------------------------------------------------------------

console.log(`${iconSection} 3.) Should fail argument two no array: concat([1,2,3], false)`);

try {
    resultConcat = concat([1, 2, 3], false);
} catch (error) {
    console.error(error)
}