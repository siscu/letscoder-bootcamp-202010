console.group(`${iconTesting} Testing ---> Caray.prototype.reduce():`);
//----------------------------------------------------------------------------------------------------
// TEST 1 reduce addition elements
//----------------------------------------------------------------------------------------------------
(function() {

    var explanation = 'should return the sum of all the elements that the object contains (Test 1)';
    var reason1 = 'should result be equal to the sum of all elements';
    var conditionTest1 = false;

    var c = new Caray;

    c[0] = Math.floor((Math.random() * 10) + 1);
    c[1] = Math.floor((Math.random() * 10) + 1);
    c[2] = Math.floor((Math.random() * 10) + 1);
    c[3] = Math.floor((Math.random() * 10) + 1);
    c[4] = Math.floor((Math.random() * 10) + 1);
    c[5] = Math.floor((Math.random() * 10) + 1);
    c[6] = Math.floor((Math.random() * 10) + 1);
    c[7] = Math.floor((Math.random() * 10) + 1);

    c.length = 8;

    var result = c.reduce(function(acum, element) {
        return acum + element;
    })

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result === c[0] + c[1] + c[2] + c[3] + c[4] + c[5] + c[6] + c[7];
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, reason1 });
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
        c.reduce(callback)
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