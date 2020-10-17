console.group(`${iconTesting} Testing ---> Caray (constructor):`);
//----------------------------------------------------------------------------------------------------
// TEST 1 new Caray(10)
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should create a Caray of length 10 when it receives only that argument (Test 1)';
    var reason1 = 'should length be 10';
    var reason2 = 'should all items to be undefined';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var c = new Caray(10);

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = c.length === 10;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { c, reason1 });

    // Condition 2
    for (var i = 0; i < c.length; i++) {
        if (c[i] !== undefined) { conditionTest2 = false; break; }
        conditionTest2 = true
    }
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { c, reason2 });
})();

//----------------------------------------------------------------------------------------------------
// TEST 2 new Caray(10.10)
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should fail when it receives only one numeric non-integer argument (Test 2)';
    var reason1 = 'should _error be defined';
    var reason2 = 'should error be an instance of RangeError';
    var reason3 = 'should error message match';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;
    var _error;

    console.log(`%c - ${explanation}`, 'color: grey');

    try {
        var c = new Caray(10.10);
    } catch (error) {
        _error = error;
    }

    // Condition 1
    conditionTest1 = _error;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { _error, reason1 });

    // Condition 2
    conditionTest2 = _error instanceof RangeError;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { _error, reason2 });

    // Condition 3
    conditionTest3 = _error.message === 'Invalid array length';
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { _error, reason3 });

})();

//----------------------------------------------------------------------------------------------------
// TEST 3 new Caray(random)
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should create a Caray of length 1 when it receives only one argument non-numeric and non-integer (Test 3)';
    var reason1 = 'should length be 1';
    var reason2 = 'should first item match';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var value = ['hello world', true, null, undefined, { hello: 'world' },
        ['hello', 'world']
    ].random();
    var c = new Caray(value);

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = c.length === 1;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { c, reason1 });

    // Condition 2
    conditionTest2 = c[0] === value;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { c, reason2 });

})();

//----------------------------------------------------------------------------------------------------
// TEST 4 new Caray('a', 5, 500, 'b');
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should create a Caray with as many elements as arguments we receive (Test 4)';
    var reason1 = 'should length be 4';
    var conditionTest1 = false;
    var c = new Caray('a', 5, 500, 'b');

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = c.length === 4;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { c, reason1 });
})();

//----------------------------------------------------------------------------------------------------

console.groupEnd();