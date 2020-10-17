console.group(`${iconTesting} Testing ---> Caray.prototype.foreach():`);
//----------------------------------------------------------------------------------------------------
// TEST 1 return 100
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should return 100 we check summation using the forEach (Test 1)';
    var reason1 = 'should result be 100';
    var conditionTest1 = false;
    var result = 0;

    var c = new Caray;
    c[0] = 10;
    c[1] = 20;
    c[2] = 30;
    c[3] = 40;
    c.length = 4;

    c.forEach(function(element) {
        result += element;
    })

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result === (c[0] + c[1] + c[2] + c[3]);
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, c, reason1 });
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
        c.forEach(callback)
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