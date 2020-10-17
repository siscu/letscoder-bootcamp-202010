console.group(`${iconTesting} Testing ---> Caray.prototype.some():`);
//----------------------------------------------------------------------------------------------------
// TEST 1 return true
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should return true we check if there is an element greater than thirty (Test 1)';
    var reason1 = 'should result be true';
    var conditionTest1 = false;

    var c = new Caray;
    c[0] = 10;
    c[1] = 20;
    c[2] = 30;
    c[3] = 40;
    c.length = 4;

    var result = c.some(function(element) {
        return (element > 30);
    })

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result === true;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, c, reason1 });

})();

//----------------------------------------------------------------------------------------------------
// TEST 2 return false
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should return false we check if there is an element greater than forty (Test 2)';
    var reason1 = 'should result be false';
    var conditionTest1 = false;

    var c = new Caray;
    c[0] = 10;
    c[1] = 20;
    c[2] = 30;
    c[3] = 40;
    c.length = 4;

    var result = c.some(function(element) {
        return (element > 40);
    })

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result === false;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, c, reason1 });

})();

//----------------------------------------------------------------------------------------------------
// TEST 3 check callback is a function
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should fail on non-function callback (Test 3)';
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
        c.some(callback)
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