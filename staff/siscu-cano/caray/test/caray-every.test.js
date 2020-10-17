console.group(`${iconTesting} Testing ---> Caray.prototype.every():`);
//----------------------------------------------------------------------------------------------------
// TEST 1 contain the letter a
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should return true for pilar, aida, marta and caterina, checking they contain the letter a (Test 1)';
    var reason1 = 'should result be true';
    var reason2 = 'should iterations count be 4';
    var conditionTest1 = false;
    var conditionTest2 = false;

    var c = new Caray;
    c[0] = 'pilar';
    c[1] = 'aida';
    c[2] = 'marta';
    c[3] = 'caterina';
    c.length = 4;

    var iterations = 0;

    var result = c.every(function(name) {
        iterations++
        return name.includes('a')
    })

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result === true;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, reason1 });

    // Condition 2
    conditionTest2 = iterations === 4;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { iterations, reason2 });

})();

//----------------------------------------------------------------------------------------------------
// TEST 2 contain the letter i
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should return false for pilar, aida, marta and caterina, checking they contain the letter i (Test 2)';
    var reason1 = 'should result be false';
    var reason2 = 'should iterations count be 3';
    var conditionTest1 = false;
    var conditionTest2 = false;

    var c = new Caray;
    c[0] = 'pilar';
    c[1] = 'aida';
    c[2] = 'marta';
    c[3] = 'caterina';
    c.length = 4;

    var iterations = 0;

    var result = c.every(function(name) {
        iterations++;

        return name.includes('i');
    })

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result === false;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, reason1 });

    // Condition 2
    conditionTest2 = iterations === 3;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { iterations, reason2 });
})();

//----------------------------------------------------------------------------------------------------
// TEST 3 non-function callback
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should fail on non-function callback (Test 3)';
    var reason1 = 'should fail be defined';
    var reason2 = 'should fail be instance of TypeError';
    var conditionTest1 = false;
    var conditionTest2 = false;

    var callback = [1, true, 'string', null, undefined, {}].random();
    var c = new Caray;
    var _error;

    try {
        c.every(callback)
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
})();

//----------------------------------------------------------------------------------------------------

console.groupEnd();