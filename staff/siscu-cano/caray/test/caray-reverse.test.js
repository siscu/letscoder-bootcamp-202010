console.group(`${iconTesting} Testing ---> Caray.prototype.reverse():`);

//----------------------------------------------------------------------------------------------------
// TEST 1 reverse string
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'should reverse strings a,b,c,d (Test 1)';
    var reason1 = 'should result equal to c (mutable)';
    var reason2 = 'should result equal to "d","c","b","a"';
    var reason3 = 'should result length equal to c length';
    var conditionTest1 = false;
    var conditionTest2 = false;
    var conditionTest3 = false;

    var c = new Caray;
    c[0] = 'a';
    c[1] = 'b';
    c[2] = 'c';
    c[3] = 'd';
    c.length = 4;

    var result = c.reverse();

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result === c;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, c, reason1 });

    // Condition 2
    conditionTest2 = result[0] === 'd' && result[1] === 'c' && result[2] === 'b' && result[3] === 'a';
    conditionTest2 && console.log(`%c \t ${iconOk} ${reason2}`, 'color: green');
    console.assert(conditionTest2, { result, reason2 });

    // Condition 3
    conditionTest3 = result.length === c.length;
    conditionTest3 && console.log(`%c \t ${iconOk} ${reason3}`, 'color: green');
    console.assert(conditionTest3, { result, reason3 });

})();
//----------------------------------------------------------------------------------------------------

console.groupEnd();