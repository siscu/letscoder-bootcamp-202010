console.group(`${iconTesting} Testing ---> Caray.prototype.map():`);
//----------------------------------------------------------------------------------------------------
// TEST 1 map numbers multiplied by 10
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should map numbers multiplied by 10 (Test 1)';
    var reason1 = 'should result be instance of Caray';
    var reason2 = 'should result length match the original Caray';
    var reason3 = 'should iterations be 5';
    var reason4 = 'should all elements on results equal to c*10';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;
    var conditionTest4 = false;

    var c = new Caray;

    c[0] = Math.random();
    c[1] = Math.random();
    c[2] = Math.random();
    c[3] = Math.random();
    c[4] = Math.random();

    c.length = 5;

    var iterations = 0;

    var result = c.map(function(item) {
        iterations++;
        return item * 10;
    })

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result instanceof Caray;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, reason1 });

    // Condition 2
    conditionTest2 = result.length === 5;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { result, reason2 });

    // Condition 3
    conditionTest3 = iterations === 5;
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { result, reason3 });

    // Condition 4
    for (var i = 0; i < c.length; i++) {
        if (result[i] !== c[i] * 10) {
            conditionTest4 = false;
            break;
        }
        conditionTest4 = true;
    }


    conditionTest4 && console.log(`%c \t ${iconOk} ${reason4}`, 'color: green');
    console.assert(conditionTest4, { result, c, reason4 });
})();

//----------------------------------------------------------------------------------------------------

console.groupEnd();