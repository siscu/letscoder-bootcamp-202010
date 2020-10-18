console.group(`${iconTesting} Testing ---> Caray.prototype.find():`);

//----------------------------------------------------------------------------------------------------
// TEST 1 find object
//----------------------------------------------------------------------------------------------------
(function() {
    var explanation = 'Should the find method return a object (Test 1)';
    var reason1 = 'should return a ring object';
    var conditionTest1 = false;


    var anillo = { item: "anillo", precio: 140 };
    var pulsera = { item: "pulsera", precio: 80 };
    var reloj = { item: "reloj", precio: 380 };
    var c = new Caray(anillo, pulsera, reloj);

    var findCallback = function(element) {
        return element.precio > 100;
    }
    var result = c.find(findCallback);

    console.log(`%c - ${explanation}`, 'color: grey');

    // Condition 1
    conditionTest1 = result === anillo;
    conditionTest1 && console.log(`%c \t ${iconOk} ${reason1}`, 'color: green');
    console.assert(conditionTest1, { result, anillo, reason1 });
})();

//----------------------------------------------------------------------------------------------------

console.groupEnd();