console.group(`${iconTesting} Testing ---> Caray.prototype.concat():`);

//----------------------------------------------------------------------------------------------------
// TEST 1 concat array
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should concat with array [0,1] (Test 1)';
    var reason1 = 'should concat the Caray object with the array passed as argument';
    var reason2 = 'should the length of the result be equal to the sum of the lengths of c and a';
    var reason3 = 'should not be the same returned object';
    var reason4 = 'should the returned object be an instance of Caray';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;
    var conditionTest4 = false;

    var c = new Caray;
    c[0] = 'a';
    c[1] = 'b';
    c.length = 2;

    var a = new Array;
    a[0] = 0;
    a[1] = 1;

    var result = c.concat(a);

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result[0] === 'a' && result[1] === 'b' && result[2] === 0 && result[3] === 1;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, c, reason1 });

    // Condition 2
    conditionTest2 = result.length === c.length + a.length;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { result, c, a, reason2 });

    // Condition 3
    conditionTest3 = result !== c;
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { result, c, reason3 });

    // Condition 4
    conditionTest4 = result instanceof Caray;
    conditionTest4 && console.log(`%c \t ${iconOk} ${reason4}`, 'color: green');
    console.assert(conditionTest4, { result, reason4 });

})();

//----------------------------------------------------------------------------------------------------
// TEST 2 check array param
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should fail on non array param (Test 2)';
    var reason1 = 'should fail be defined';
    var reason2 = 'should fail be instance of TypeError';
    var reason3 = 'should error message match'
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;

    var array = [1, true, 'string', null, undefined, {}].random();
    var c = new Caray;
    var _error;

    try {
        c.concat(array)
    } catch (error) {
        _error = error
    }

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = _error;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { _error, reason1 });

    // Condition 2
    conditionTest2 = _error instanceof TypeError;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { _error, reason2 });

    // Condition 3
    conditionTest3 = _error.message === array + ' is not an array';
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { _error, reason3 });

})();

//----------------------------------------------------------------------------------------------------

console.groupEnd();