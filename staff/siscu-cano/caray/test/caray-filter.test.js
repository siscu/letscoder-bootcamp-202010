console.group(`${iconTesting} Testing ---> Caray.prototype.filter():`);
//----------------------------------------------------------------------------------------------------
// TEST 1 return new arry with elements greater than 100
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should return a new array with elements greater than 200 (Test 1)';
    var reason1 = 'Should counter be equal to the length of result';
    var reason2 = 'should returned array will be different from the current array';
    var reason3 = 'should returned array instance of Caray';

    var conditionTest1 = false;
    var result = new Caray;
    var count = 0;

    var c = new Caray;
    c[0] = Math.floor(Math.random() * 100) + 1;
    c[1] = Math.floor(Math.random() * 100) + 1;
    c[2] = Math.floor(Math.random() * 100) + 1;
    c[3] = Math.floor(Math.random() * 100) + 1;
    c[4] = Math.floor(Math.random() * 100) + 1;
    c[5] = Math.floor(Math.random() * 100) + 1;
    c[6] = Math.floor(Math.random() * 100) + 1;
    c[7] = Math.floor(Math.random() * 100) + 1;
    c[8] = Math.floor(Math.random() * 100) + 1;
    c.length = 4;

    result = c.filter(function(element) {
        if (element >= 200) count++;
        return element >= 200;
    })

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result.length === count;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, c, reason1 });

    // Condition 2
    conditionTest2 = result !== c;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { result, c, reason2 });

    // Condition 3
    conditionTest3 = result instanceof Caray;
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { result, c, reason3 });


})();

//----------------------------------------------------------------------------------------------------
// TEST 2 check callback is a function
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should fail on non-function callback (Test 2)';
    var reason1 = 'should fail be defined';
    var reason2 = 'should fail be instance of TypeError';
    var reason3 = 'should error message match'
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;

    var callback = [1, true, 'string', null, undefined, {}].random();
    var c = new Caray;
    var _error;

    try {
        c.filter(callback)
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
    conditionTest3 = _error.message === callback + ' is not a function';
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { _error, reason3 });

})();
//----------------------------------------------------------------------------------------------------

console.groupEnd();