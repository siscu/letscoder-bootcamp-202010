console.group(`${iconTesting} Testing ---> Caray.prototype.push():`);
//----------------------------------------------------------------------------------------------------
// TEST 1 individual values
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should push individual values 1, "a", true, null (Test 1)';
    var reason1 = 'should caray length be 4';
    var reason2 = 'should index 0 point to value 1';
    var reason3 = 'should index 1 point to value "a"';
    var reason4 = 'should index 2 point to value true';
    var reason5 = 'should index 2 point to value true';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;
    var conditionTest4 = false;
    var conditionTest5 = false;

    var c = new Caray();

    c.push(1);
    c.push('a');
    c.push(true);
    c.push(null);

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = c.length === 4;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { c, reason1 });

    // Condition 2
    conditionTest2 = c[0] === 1;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { c, reason2 });

    // Condition 3
    conditionTest3 = c[1] === 'a';
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { c, reason3 });

    // Condition 4
    conditionTest4 = c[2] === true;
    conditionTest4 && console.log(`%c \t ${iconOk} ${reason4}`, 'color: green');
    console.assert(conditionTest4, { c, reason4 });

    // Condition 5
    conditionTest5 = c[3] === null;
    conditionTest5 && console.log(`%c \t ${iconOk} ${reason5}`, 'color: green');
    console.assert(conditionTest5, { c, reason5 });

})();

//----------------------------------------------------------------------------------------------------
// TEST 2 multiple values
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should push multiple values 1, "a", true, null (Test 2)';
    var reason1 = 'should caray length be 4';
    var reason2 = 'should index 0 point to value 1';
    var reason3 = 'should index 1 point to value "a"';
    var reason4 = 'should index 2 point to value true';
    var reason5 = 'should index 2 point to value true';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;
    var conditionTest4 = false;
    var conditionTest5 = false;
    var c = new Caray;

    c.push(1, 'a', true, null);

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = c.length === 4;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { c, reason1 });

    // Condition 2
    conditionTest2 = c[0] === 1;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { c, reason2 });

    // Condition 3
    conditionTest3 = c[1] === 'a';
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { c, reason3 });

    // Condition 4
    conditionTest4 = c[2] === true;
    conditionTest4 && console.log(`%c \t ${iconOk} ${reason4}`, 'color: green');
    console.assert(conditionTest4, { c, reason4 });

    // Condition 5
    conditionTest5 = c[3] === null;
    conditionTest5 && console.log(`%c \t ${iconOk} ${reason5}`, 'color: green');
    console.assert(conditionTest5, { c, reason5 });
})();

//----------------------------------------------------------------------------------------------------
// TEST 3 multiple random values
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should push multiple random values (Test 3)';
    var reason1 = 'should caray length be 4';
    var reason2 = 'should index 0 point to value 1';
    var reason3 = 'should index 1 point to value "a"';
    var reason4 = 'should index 2 point to value true';
    var reason5 = 'should index 2 point to value true';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;
    var conditionTest4 = false;
    var conditionTest5 = false;
    var c = new Caray

    var v1 = Math.random()
    var v2 = ['a', 'b', 'c', 'd', 'e', 'f'].random()
    var v3 = Math.random() > .5 ? true : false
    var v4 = Math.random() > .5 ? null : undefined

    c.push(v1, v2, v3, v4)

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = c.length === 4;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { c, reason1 });

    // Condition 2
    conditionTest2 = c[0] === v1;
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { c, reason2 });

    // Condition 3
    conditionTest3 = c[1] === v2;
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { c, reason3 });

    // Condition 4
    conditionTest4 = c[2] === v3;
    conditionTest4 && console.log(`%c \t ${iconOk} ${reason4}`, 'color: green');
    console.assert(conditionTest4, { c, reason4 });

    // Condition 5
    conditionTest5 = c[3] === v4;
    conditionTest5 && console.log(`%c \t ${iconOk} ${reason5}`, 'color: green');
    console.assert(conditionTest5, { c, reason5 });

})();

//----------------------------------------------------------------------------------------------------

console.groupEnd();