console.group(`${iconTesting} 'Testing ---> MAP:`);

//----------------------------------------------------------------------------------------------------
// TEST 1 (check length)
//----------------------------------------------------------------------------------------------------
(function() {
    var labTest = [1, 2, 3, 4];
    var resultTest = [];
    var conditionTest = false;
    var reason = 'resultTest1 length is expected to be equal than labTest1 length (Test1)';

    resultTest = map(labTest, function(value) {
        return value * 2;
    })
    conditionTest = (resultTest.length === labTest.length)

    conditionTest && console.log(`%c ${iconOk} Should map result length is equal to array original length (Test1)`, 'color: green');
    console.assert(conditionTest, { resultTest, labTest, reason });
})();

//----------------------------------------------------------------------------------------------------
// TEST 2 (check result)
//----------------------------------------------------------------------------------------------------
(function() {
    var labTest = [1, 2, 3, 4];
    var nativeLabTest = [1, 2, 3, 4];
    var resultTest = [];
    var resultNativeTest = [];
    var conditionTest = false;
    var reason = 'resultTest2 content is expected to be equal than resultNativeTest2 content (Test2)';

    resultTest = map(labTest, function(value) {
        return value * 2;
    })

    resultNativeTest = nativeLabTest.map(function(value) {
        return value * 2;
    })

    function checkTest() {
        for (var i = 0; i < resultTest.length; i++) {
            if (resultTest[i] !== resultNativeTest[i]) return false;
        }
        return true;
    }

    conditionTest = (checkTest() === true);

    conditionTest && console.log(`%c ${iconOk} Should the implemented method returns the same result as the native method (Test2)`, 'color: green');
    console.assert(conditionTest, { resultTest, resultNativeTest, reason });
})();

//----------------------------------------------------------------------------------------------------
// TEST 3 (first param is null)
//----------------------------------------------------------------------------------------------------
(function() {
    var _error;
    var conditionTest = false;
    var reason = '_error is expected to be defined (Test3)';

    try {
        map(null, function() {})
    } catch (error) {
        _error = error
    }
    conditionTest = (_error !== undefined);
    conditionTest && console.log(`%c ${iconOk} Should if the first parameter is null we get an error object (Test3)`, 'color: green');
    console.assert(conditionTest, { _error, reason });
})();

//----------------------------------------------------------------------------------------------------
// TEST 4 (check error message when first argument not array)
//----------------------------------------------------------------------------------------------------
(function() {
    var _error;
    var conditionTest = false;
    var reason = '_error.message is expected to be equal to: "...is not an array" (Test4)';

    try {
        map(1, function() {})
    } catch (error) {
        _error = error
    }
    conditionTest = (_error.message === '');
    conditionTest && console.log(`%c ${iconOk} Should that in the case that the first parameter is null we get an error object (Test4)`, 'color: green');
    console.assert(conditionTest, { _error, reason });
})();
//----------------------------------------------------------------------------------------------------